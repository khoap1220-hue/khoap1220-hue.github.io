#!/usr/bin/env python3
"""Daily GitHub truth sync for khoaphan.dev.

Fetches the public, visitor-verifiable record for @khoap1220-hue and keeps every
volatile number on the site in lockstep with GitHub:

* external merged pull requests (self-owned repos and onboarding lists excluded),
* live state of every PR card tagged with ``data-pr="owner/repo#n"``,
* the public 52-week contribution calendar shown on github.com.

Outputs ``data/stats.json`` and rewrites the baked fallback numbers inside the
HTML/JS/XML so no-JS readers, crawlers and link previews never see stale data.
Standard library only, so it runs unchanged on a stock GitHub Actions runner.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

SITE = Path(os.environ.get("KP_SITE_DIR", Path(__file__).resolve().parents[1]))
STATS_PATH = SITE / "data" / "stats.json"
USER = "khoap1220-hue"
# Own account + personal alt account: self-merged PRs are not upstream proof.
SELF_OWNERS = {"khoap1220-hue", "phankhoa95"}
# Onboarding/contributor-list repos are not engineering work.
EXCLUDED_REPOS = {"firstcontributions/first-contributions"}
TEXT_SUFFIXES = {".html", ".js", ".xml", ".md", ".webmanifest"}
SKIP_DIRS = {"tools", "data", ".github"}
# Values baked into the site before the first automated sync.
BOOTSTRAP = {"merged_count": 17, "contributions_total": 4043, "active_days": 39}
API = "https://api.github.com"
UA = "khoaphan.dev-stats-sync/1.0"


def _token() -> str | None:
    return os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")


def _request(url: str, *, data: bytes | None = None, accept: str = "application/vnd.github+json") -> bytes:
    headers = {"User-Agent": UA, "Accept": accept}
    token = _token()
    if token and url.startswith(API):
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, data=data, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def _api(path: str) -> dict | list:
    return json.loads(_request(f"{API}{path}"))


def fetch_merged_prs() -> list[dict]:
    query = urllib.parse.quote(f"is:pr author:{USER} is:merged")
    items: list[dict] = []
    for page in range(1, 11):
        batch = _api(f"/search/issues?q={query}&per_page=100&page={page}")
        items.extend(batch.get("items", []))
        if len(batch.get("items", [])) < 100:
            break
    merged: list[dict] = []
    for it in items:
        full = it["repository_url"].split("/repos/", 1)[1]
        owner = full.split("/", 1)[0].lower()
        if owner in SELF_OWNERS or full.lower() in EXCLUDED_REPOS:
            continue
        merged_at = (it.get("pull_request") or {}).get("merged_at") or it.get("closed_at")
        merged.append({
            "repo": full,
            "number": it["number"],
            "title": it["title"],
            "merged_at": merged_at,
            "url": it["html_url"],
        })
    merged.sort(key=lambda p: p["merged_at"] or "", reverse=True)
    return merged


def fetch_tracked_prs() -> dict[str, dict]:
    refs: set[str] = set()
    for html in SITE.rglob("*.html"):
        if SKIP_DIRS.intersection(html.relative_to(SITE).parts):
            continue
        refs.update(re.findall(r'data-pr="([\w.-]+/[\w.-]+#\d+)"', html.read_text(encoding="utf-8")))
    tracked: dict[str, dict] = {}
    for ref in sorted(refs):
        repo, num = ref.split("#")
        pr = _api(f"/repos/{repo}/pulls/{num}")
        state = "merged" if pr.get("merged") else pr.get("state", "unknown")
        tracked[ref] = {"state": state, "merged_at": pr.get("merged_at"), "url": pr.get("html_url")}
    return tracked


def _parse_public_calendar(html: str) -> tuple[int, dict[str, int]]:
    total_m = re.search(r"([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year", html)
    if not total_m:
        raise ValueError("total header not found")
    total = int(total_m.group(1).replace(",", ""))
    id_to_date: dict[str, str] = {}
    for td in re.findall(r"<td\b[^>]*>", html):
        date_m = re.search(r'data-date="(\d{4}-\d{2}-\d{2})"', td)
        id_m = re.search(r'\bid="([^"]+)"', td)
        if date_m and id_m:
            id_to_date[id_m.group(1)] = date_m.group(1)
    days: dict[str, int] = {}
    for for_id, text in re.findall(r'<tool-tip\b[^>]*\bfor="([^"]+)"[^>]*>([^<]*)</tool-tip>', html):
        date = id_to_date.get(for_id)
        if not date:
            continue
        count_m = re.match(r"\s*([\d,]+)\s+contribution", text)
        days[date] = int(count_m.group(1).replace(",", "")) if count_m else 0
    if not days or sum(days.values()) != total:
        raise ValueError(f"calendar mismatch: days={len(days)} sum={sum(days.values())} total={total}")
    return total, days


def _graphql_calendar() -> tuple[int, dict[str, int]]:
    query = (
        'query{user(login:"%s"){contributionsCollection{contributionCalendar'
        "{totalContributions weeks{contributionDays{date contributionCount}}}}}}" % USER
    )
    raw = _request(f"{API}/graphql", data=json.dumps({"query": query}).encode())
    cal = json.loads(raw)["data"]["user"]["contributionsCollection"]["contributionCalendar"]
    days = {d["date"]: d["contributionCount"] for w in cal["weeks"] for d in w["contributionDays"]}
    return cal["totalContributions"], days


def fetch_contributions() -> dict:
    try:
        html = _request(f"https://github.com/users/{USER}/contributions", accept="text/html").decode("utf-8")
        total, days = _parse_public_calendar(html)
        source = "github-public-calendar"
    except (ValueError, urllib.error.URLError) as exc:
        print(f"public calendar parse failed ({exc}); falling back to GraphQL", file=sys.stderr)
        total, days = _graphql_calendar()
        source = "github-graphql"
    ordered = sorted(days)
    active = {d: c for d, c in days.items() if c > 0}
    return {
        "total": total,
        "active_days": len(active),
        "start": ordered[0],
        "end": ordered[-1],
        "source": source,
        "days": dict(sorted(active.items())),
    }


def _js_contrib_block(days: dict[str, int]) -> str:
    pairs = [f'"{d}": {c}' for d, c in days.items()]
    rows = [", ".join(pairs[i:i + 4]) for i in range(0, len(pairs), 4)]
    return "{\n    " + ",\n    ".join(rows) + "\n  }"


def rewrite_baked_values(prev: dict, stats: dict) -> list[str]:
    old_m, new_m = int(prev["merged_count"]), stats["merged_count"]
    old_c, new_c = int(prev["contributions_total"]), stats["contributions"]["total"]
    old_d, new_d = int(prev["active_days"]), stats["contributions"]["active_days"]
    end = dt.date.fromisoformat(stats["contributions"]["end"])
    rules: list[tuple[re.Pattern[str], str]] = [
        (re.compile(r"(?<=synced )\d{4}-\d{2}-\d{2}"), end.isoformat()),
        (re.compile(r"(?<=đồng bộ )\d{2}/\d{2}/\d{4}"), end.strftime("%d/%m/%Y")),
        (re.compile(r"(?<=queried )\d{4}-\d{2}-\d{2}"), end.isoformat()),
        (re.compile(r'(?<=data-stat="merged">)\d+(?=<)'), str(new_m)),
        (re.compile(r'(?<=data-stat="contrib">)[\d,]+(?=<)'), f"{new_c:,}"),
    ]
    if old_m != new_m:
        rules.append((
            re.compile(rf"(?<![\w#.,/-]){old_m}(?=(?:\s|&nbsp;)+(?:live\s+|verified\s+)?(?:merged\b|PRs?\b))", re.I),
            str(new_m),
        ))
    if old_c != new_c:
        rules.append((re.compile(rf"(?<![\d,]){re.escape(f'{old_c:,}')}(?![\d,])"), f"{new_c:,}"))
    if old_d != new_d:
        rules.append((re.compile(rf"(?<!\d){old_d}(?=`?\s+(?:active days|ngày hoạt động))"), str(new_d)))

    changed: list[str] = []
    for path in SITE.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        if SKIP_DIRS.intersection(path.relative_to(SITE).parts):
            continue
        text = path.read_text(encoding="utf-8")
        new_text = text
        for pattern, repl in rules:
            new_text = pattern.sub(repl, new_text)
        if path.name == "i18n.js":
            new_text = re.sub(
                r"(const REAL_GH_CONTRIBUTIONS = )\{.*?\n  \}",
                lambda m: m.group(1) + _js_contrib_block(stats["contributions"]["days"]),
                new_text,
                count=1,
                flags=re.S,
            )
        if new_text != text:
            path.write_text(new_text, encoding="utf-8", newline="")
            changed.append(str(path.relative_to(SITE)).replace("\\", "/"))
    return changed


def main() -> int:
    prev = dict(BOOTSTRAP)
    if STATS_PATH.exists():
        old = json.loads(STATS_PATH.read_text(encoding="utf-8"))
        prev = {
            "merged_count": old["merged_count"],
            "contributions_total": old["contributions"]["total"],
            "active_days": old["contributions"]["active_days"],
        }

    merged = fetch_merged_prs()
    stats = {
        "generated_at": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "user": USER,
        "merged_count": len(merged),
        "merged_prs": merged,
        "tracked": fetch_tracked_prs(),
        "contributions": fetch_contributions(),
    }
    if stats["merged_count"] < prev["merged_count"]:
        # Merged PRs never un-merge; a drop means a transient API/search gap.
        print(f"refusing to lower merged count {prev['merged_count']} -> {stats['merged_count']}", file=sys.stderr)
        return 1

    changed = rewrite_baked_values(prev, stats)
    STATS_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATS_PATH.write_text(json.dumps(stats, indent=2, ensure_ascii=False) + "\n", encoding="utf-8", newline="\n")

    assets_changed = stats["merged_count"] != prev["merged_count"]
    print(
        f"merged={stats['merged_count']} (was {prev['merged_count']}) "
        f"contributions={stats['contributions']['total']} (was {prev['contributions_total']}) "
        f"active_days={stats['contributions']['active_days']} source={stats['contributions']['source']} "
        f"tracked={len(stats['tracked'])} rewritten={len(changed)}"
    )
    for name in changed:
        print(f"  rewrote {name}")
    gh_out = os.environ.get("GITHUB_OUTPUT")
    if gh_out:
        with open(gh_out, "a", encoding="utf-8") as fh:
            fh.write(f"assets_changed={'true' if assets_changed else 'false'}\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())

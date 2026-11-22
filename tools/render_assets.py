"""Render khoaphan.dev social banners, OpenGraph card and 1-page A4 resume PDF.

Canonical renderer shared by the local brand toolchain and the daily GitHub
Actions stats sync. Volatile numbers are read from data/stats.json so every
exported asset matches the live GitHub record.
"""
from __future__ import annotations

import base64
import functools
import http.server
import json
import os
import re
import socketserver
import threading
from pathlib import Path
from playwright.sync_api import sync_playwright

SITE_DIR = Path(os.environ.get("KP_SITE_DIR", Path(__file__).resolve().parents[1]))
SITE_BANNERS = SITE_DIR / "assets" / "banners"
OG_ROOT = SITE_DIR / "og-image.png"
AVATAR_PATH = SITE_DIR / "assets" / "avatar.jpg"
RESUME_PDF_PATH = SITE_DIR / "assets" / "Khoa_Phan_Senior_Engineer_Resume.pdf"
STATS_PATH = SITE_DIR / "data" / "stats.json"


def _merged_count() -> int:
    if STATS_PATH.exists():
        return int(json.loads(STATS_PATH.read_text(encoding="utf-8"))["merged_count"])
    return 17


MERGED = _merged_count()


def _avatar_data_uri() -> str:
    raw = AVATAR_PATH.read_bytes()
    return "data:image/jpeg;base64," + base64.b64encode(raw).decode("ascii")


KP_MARK_SVG = """
<svg viewBox="0 0 460 460" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="460" height="460" rx="84" fill="#0B1014" stroke="#24303B" stroke-width="14"/>
  <path d="M68 106H118V214L205 106H269L147 265H118V360H68V106Z" fill="#FFFFFF"/>
  <path d="M188 245L279 360H212L157 287L188 245Z" fill="#FFFFFF"/>
  <path d="M234 188V266L203 228L234 188Z" fill="#33F6F6"/>
  <path d="M295 106H372C404 106 426 129 426 161V210C426 242 404 266 372 266H305V360L256 296V215H368C374 215 377 211 377 205V165C377 159 374 155 368 155H258L295 106Z" fill="#FFFFFF"/>
</svg>
"""


def build_html(spec: dict, avatar_uri: str) -> str:
    w = spec["width"]
    h = spec["height"]
    mode = spec["layout"]

    base_css = f"""
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap');
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    html, body {{
      width: {w}px; height: {h}px; overflow: hidden;
      background: #0B1014; color: #F4F7FA;
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }}
    .canvas {{
      position: relative; width: {w}px; height: {h}px;
      background:
        radial-gradient(circle at 82% 18%, rgba(51, 246, 246, 0.14), transparent 44%),
        radial-gradient(circle at 14% 88%, rgba(16, 185, 129, 0.08), transparent 40%),
        linear-gradient(180deg, #0B1014 0%, #0F161D 100%);
      overflow: hidden;
    }}
    .grid {{
      position: absolute; inset: 0;
      background-image:
        linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: {spec.get('grid', 48)}px {spec.get('grid', 48)}px;
    }}
    .accent-bar {{
      position: absolute; top: 0; left: 0; right: 0; height: {spec.get('bar', 4)}px;
      background: linear-gradient(90deg, #33F6F6 0%, #0EA5E9 55%, #10B981 100%);
    }}
    .pill {{
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 14px; border-radius: 999px;
      background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34D399; font-family: 'JetBrains Mono', monospace;
      font-size: {spec.get('pill_fs', 14)}px; font-weight: 600; letter-spacing: 0.03em;
    }}
    .dot {{
      width: 8px; height: 8px; border-radius: 999px; background: #10B981;
    }}
    .domain-chip {{
      display: inline-flex; align-items: center; gap: 0;
      padding: 8px 16px; border-radius: 8px;
      background: #11181F; border: 1px solid #24303B;
      color: #F4F7FA; font-family: 'JetBrains Mono', monospace;
      font-size: {spec.get('domain_fs', 18)}px; font-weight: 600;
    }}
    .domain-chip span {{ color: #33F6F6; }}
    .stack-row {{
      display: flex; flex-wrap: wrap; gap: 10px;
    }}
    .tag {{
      padding: 6px 13px; border-radius: 6px;
      background: #13161E; border: 1px solid #262C3A;
      color: #D1D6E0; font-family: 'JetBrains Mono', monospace;
      font-size: {spec.get('tag_fs', 14)}px; font-weight: 500;
    }}
    .stat-box {{
      background: rgba(17, 19, 24, 0.88); border: 1px solid #242833;
      border-radius: 10px; padding: 14px 18px;
    }}
    .stat-num {{
      font-family: 'Space Grotesk', sans-serif; font-weight: 700;
      color: #F4F5F7; letter-spacing: -0.02em;
    }}
    .stat-lbl {{
      font-family: 'JetBrains Mono', monospace; color: #8B93A3;
      text-transform: uppercase; letter-spacing: 0.06em;
    }}
    """

    if mode == "card":
        # OpenGraph 1200x630 & GitHub Social 1280x640
        body = f"""
        <div class="canvas">
          <div class="grid"></div>
          <div class="accent-bar"></div>
          <div style="position:relative; z-index:2; height:100%; display:flex; align-items:center; justify-content:space-between; padding:56px 68px; gap:44px;">
            <div style="flex:1; display:flex; flex-direction:column; gap:22px;">
              <div style="display:flex; align-items:center; gap:16px;">
                <div style="width:52px; height:52px;">{KP_MARK_SVG}</div>
                <div class="domain-chip">khoaphan<span>.dev</span></div>
                <div class="pill"><span class="dot"></span>GPG-SIGNED GUARDKITS</div>
              </div>
              <h1 style="font-family:'Space Grotesk',sans-serif; font-size:62px; font-weight:700; line-height:1.05; letter-spacing:-0.035em;">
                Khoa Phan
              </h1>
              <p style="font-size:24px; line-height:1.4; color:#B4C0CC; max-width:650px;">
                Polyglot Systems, Web3 &amp; Custom MCP Architect.<br/>
                <span style="color:#F4F7FA; font-weight:500;">{MERGED} merged upstream PRs, 6 MIT guardkits &amp; live 3D platforms.</span>
              </p>
              <div class="stack-row">
                <span class="tag">Rust / Wasm</span>
                <span class="tag">Go 1.22+</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Python / MCP</span>
                <span class="tag">Three.js / VRM</span>
              </div>
              <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:14px; margin-top:6px; max-width:640px;">
                <div class="stat-box">
                  <div class="stat-num" style="font-size:26px;">{MERGED} Merged</div>
                  <div class="stat-lbl" style="font-size:11px; margin-top:3px;">Upstream PRs</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num" style="font-size:26px;">6 MIT</div>
                  <div class="stat-lbl" style="font-size:11px; margin-top:3px;">Open-Source Repos</div>
                </div>
                <div class="stat-box">
                  <div class="stat-num" style="font-size:26px;">&lt; 210ms</div>
                  <div class="stat-lbl" style="font-size:11px; margin-top:3px;">MCP Auto-Recovery</div>
                </div>
              </div>
            </div>
            <div style="width:310px; display:flex; flex-direction:column; align-items:center; gap:18px;">
              <div style="width:280px; height:280px; border-radius:24px; overflow:hidden; border:2px solid #2D3344; box-shadow:0 24px 60px rgba(0,0,0,0.55); background:#111318;">
                <img src="{avatar_uri}" style="width:100%; height:100%; object-fit:cover; object-position:center top;" />
              </div>
              <div style="font-family:'JetBrains Mono',monospace; font-size:13px; color:#8B93A3; text-align:center;">
                github.com/khoap1220-hue<br/>vrm3d.com • uploadhtml.com
              </div>
            </div>
          </div>
        </div>
        """
    elif mode == "wide_right_safe":
        # LinkedIn 1584x396 & X 1500x500 (left-bottom kept clear for profile avatar overlay!)
        pad_left = 340 if w >= 1500 else 220
        title_fs = 54 if h >= 450 else 48
        sub_fs = 21 if h >= 450 else 19
        body = f"""
        <div class="canvas">
          <div class="grid"></div>
          <div class="accent-bar"></div>
          <div style="position:relative; z-index:2; height:100%; display:flex; align-items:center; justify-content:space-between; padding:36px 68px 36px {pad_left}px; gap:40px;">
            <div style="display:flex; flex-direction:column; gap:16px; max-width:740px;">
              <div style="display:flex; align-items:center; gap:14px;">
                <div style="width:44px; height:44px;">{KP_MARK_SVG}</div>
                <div class="domain-chip">khoaphan<span>.dev</span></div>
                <div class="pill"><span class="dot"></span>GPG-SIGNED GUARDKITS</div>
              </div>
              <h1 style="font-family:'Space Grotesk',sans-serif; font-size:{title_fs}px; font-weight:700; line-height:1.06; letter-spacing:-0.035em;">
                Systems, Web3 &amp; Custom MCP Architect
              </h1>
              <p style="font-size:{sub_fs}px; color:#B4C0CC; line-height:1.4;">
                Production primitives in <strong style="color:#F4F7FA;">Rust • Go • TypeScript • Python</strong> — 6 MIT Repos • vrm3d.com • uploadhtml.com
              </p>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px; min-width:255px;">
              <div class="stat-box">
                <div class="stat-num" style="font-size:24px;">{MERGED} Merged PRs</div>
                <div class="stat-lbl" style="font-size:11px; margin-top:2px;">Externalize • Solana • RevMarket • TLDR</div>
              </div>
              <div class="stat-box">
                <div class="stat-num" style="font-size:24px;">14-Day MCP Sprints</div>
                <div class="stat-lbl" style="font-size:11px; margin-top:2px;">Zero-Zombie • 100% Tested</div>
              </div>
            </div>
          </div>
        </div>
        """
    elif mode == "facebook":
        # Facebook Cover 820x312 (keep bottom-left ~190px clear for mobile/desktop avatar)
        body = f"""
        <div class="canvas">
          <div class="grid"></div>
          <div class="accent-bar"></div>
          <div style="position:relative; z-index:2; height:100%; display:flex; flex-direction:column; justify-content:center; padding:26px 40px 26px 210px; gap:12px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:36px; height:36px;">{KP_MARK_SVG}</div>
              <div class="domain-chip" style="font-size:15px; padding:6px 12px;">khoaphan<span>.dev</span></div>
              <div class="pill" style="font-size:11px; padding:4px 10px;"><span class="dot"></span>GPG GUARDKITS</div>
            </div>
            <h1 style="font-family:'Space Grotesk',sans-serif; font-size:34px; font-weight:700; line-height:1.08; letter-spacing:-0.03em;">
              Khoa Phan — Systems, Web3 &amp; AI/MCP
            </h1>
            <p style="font-size:15px; color:#B4BBC6; line-height:1.4;">
              Rust • Go • TypeScript • Python • 6 MIT Toolkits • vrm3d.com • uploadhtml.com
            </p>
            <div style="font-family:'JetBrains Mono',monospace; font-size:12px; color:#60A5FA;">
              github.com/khoap1220-hue &nbsp;|&nbsp; khoaphan.dev/links
            </div>
          </div>
        </div>
        """
    else:
        # YouTube Channel Art 2560x1440 (safe zone centered 1546x423!)
        body = f"""
        <div class="canvas">
          <div class="grid"></div>
          <div class="accent-bar"></div>
          <div style="position:relative; z-index:2; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
            <!-- Strictly centered inside YouTube 1546x423 universal safe zone -->
            <div style="width:1420px; height:380px; display:flex; align-items:center; justify-content:space-between; padding:0 48px; border:1px solid rgba(53,59,75,0.65); border-radius:20px; background:rgba(17,19,24,0.72);">
              <div style="display:flex; flex-direction:column; gap:18px; max-width:920px;">
                <div style="display:flex; align-items:center; gap:18px;">
                  <div style="width:64px; height:64px;">{KP_MARK_SVG}</div>
                  <div class="domain-chip" style="font-size:24px; padding:10px 20px;">khoaphan<span>.dev</span></div>
                  <div class="pill" style="font-size:16px; padding:8px 18px;"><span class="dot"></span>GPG-SIGNED GUARDKITS</div>
                </div>
                <h1 style="font-family:'Space Grotesk',sans-serif; font-size:52px; font-weight:700; line-height:1.08; letter-spacing:-0.03em; white-space:nowrap;">
                  KHOA PHAN — SYSTEMS &amp; AI/MCP
                </h1>
                <p style="font-size:24px; color:#B4BBC6;">
                  Rust • Go • TypeScript • Python &nbsp;•&nbsp; Custom MCP Architecture &amp; 3D Web
                </p>
              </div>
              <div style="width:240px; height:240px; border-radius:20px; overflow:hidden; border:2px solid #353B4B; flex-shrink:0;">
                <img src="{avatar_uri}" style="width:100%; height:100%; object-fit:cover; object-position:center top;" />
              </div>
            </div>
          </div>
        </div>
        """

    return f"<!doctype html><html><head><meta charset='utf-8'><style>{base_css}</style></head><body>{body}</body></html>"


SPECS = [
    {"filename": "og-khoaphan-dev-1200x630.png", "width": 1200, "height": 630, "layout": "card", "grid": 48, "bar": 5},
    {"filename": "github-social-1280x640.png", "width": 1280, "height": 640, "layout": "card", "grid": 48, "bar": 5},
    {"filename": "linkedin-banner-1584x396.png", "width": 1584, "height": 396, "layout": "wide_right_safe", "grid": 44, "bar": 5},
    {"filename": "x-header-1500x500.png", "width": 1500, "height": 500, "layout": "wide_right_safe", "grid": 48, "bar": 5},
    {"filename": "facebook-cover-820x312.png", "width": 820, "height": 312, "layout": "facebook", "grid": 36, "bar": 4},
    {"filename": "youtube-banner-2560x1440.png", "width": 2560, "height": 1440, "layout": "youtube", "grid": 64, "bar": 8},
]


def main() -> None:
    SITE_BANNERS.mkdir(parents=True, exist_ok=True)
    avatar_uri = _avatar_data_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for spec in SPECS:
            page = browser.new_page(viewport={"width": spec["width"], "height": spec["height"]}, device_scale_factor=1)
            html = build_html(spec, avatar_uri)
            page.set_content(html, wait_until="networkidle")
            page.wait_for_timeout(350)
            out_site = SITE_BANNERS / spec["filename"]
            page.screenshot(path=str(out_site), type="png")
            if spec["filename"] == "og-khoaphan-dev-1200x630.png":
                OG_ROOT.write_bytes(out_site.read_bytes())
            page.close()
            print(f"EXPORTED: {spec['filename']} ({spec['width']}x{spec['height']}) -> {out_site.stat().st_size} bytes")

        # Deterministically render 1-page A4 Senior Engineer Resume PDF directly from /resume/
        class QuietHandler(http.server.SimpleHTTPRequestHandler):
            def log_message(self, format, *args):
                pass

        handler = functools.partial(QuietHandler, directory=str(SITE_DIR))
        with socketserver.TCPServer(("127.0.0.1", 0), handler) as httpd:
            port = httpd.server_address[1]
            threading.Thread(target=httpd.serve_forever, daemon=True).start()
            cv_page = browser.new_page(viewport={"width": 1200, "height": 1600})
            cv_page.goto(f"http://127.0.0.1:{port}/resume/", wait_until="networkidle")
            cv_page.emulate_media(media="print")
            cv_page.pdf(path=str(RESUME_PDF_PATH), format="A4", print_background=True)
            cv_page.close()
            httpd.shutdown()

        pdf_raw = RESUME_PDF_PATH.read_bytes()
        pdf_pages = len(re.findall(rb"/Type\s*/Page(?![sA-Za-z])", pdf_raw))
        assert pdf_pages == 1, f"Resume PDF must fit on 1 A4 page, got {pdf_pages} pages"
        print(f"EXPORTED: {RESUME_PDF_PATH.name} (1-Page A4) -> {len(pdf_raw)} bytes")
        browser.close()


if __name__ == "__main__":
    main()

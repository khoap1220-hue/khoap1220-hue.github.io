/* Khoa Phan (khoaphan.dev) — Hybrid Flagship v2 Runtime: EN/VI, Theme, Cmd+K Search, Proof Filter, Heatmap & Code Copy */
(function () {
  "use strict";

  const ROOT_PREFIX = document.documentElement.getAttribute("data-root") || "./";

  const I18N = {
    en: {
      nav_index: "Index",
      nav_now: "Now",
      nav_writing: "Writing",
      nav_journal: "Journal",
      nav_proof: "Proof",
      nav_brand: "Brand",
      nav_links: "Links",
      cta_start: "Start a Project",
      hero_status: "100% GPG-VERIFIED • OPEN FOR ENGAGEMENTS",
      hero_lead:
        "Articles, engineering logs, and 100% GPG-verified production code across Rust, Go, TypeScript, and Python — spanning 22+ upstream organizations, 6 MIT guardkits, interactive 3D web platforms, and resilient Custom MCP systems.",
      cta_proof: "Inspect Verified Proof",
      cta_writing: "Read Engineering Notes",
      cta_arcade: "3D Arcade",
      cta_copy_cv: "Copy ATS Resume",
      portrait_role: "Systems & AI Architect",
      portrait_loc: "Vietnam (UTC+7 • Global Remote)",
      m1_lbl: "Upstream Organizations",
      m2_lbl: "MIT Community Toolkits",
      m3_lbl: "MCP Socket Auto-Recovery",
      m4_lbl: "NDA Enterprise Systems",
      eyebrow_series: "FEATURED SERIES",
      link_all_writing: "View all writing →",
      eyebrow_articles: "LATEST ENGINEERING NOTES",
      link_archive: "Archive & RSS →",
      eyebrow_journal: "FROM THE ENGINEERING LOG",
      link_journal: "Open 52-week heatmap →",
      sec_proof_kicker: "01 // CLICK-TO-VERIFY ENGINEERING RECORD",
      sec_proof_h2: "Verified Upstream Proof-of-Work",
      sec_proof_desc:
        "Every claim below links directly to public commits, merged pull requests, CI gates, and maintainer reviews across global Rust, Go, TypeScript, and Python repositories.",
      f_all: "All (10)",
      f_rust: "Rust & Web3",
      f_go: "Go & Cloud",
      f_ts: "TypeScript",
      f_py: "Python & FinTech",
      sec_kits_kicker: "02 // OPEN-SOURCE INFRASTRUCTURE",
      sec_kits_h2: "6 Free MIT Developer Toolkits",
      sec_kits_desc:
        "Zero-bloat engineering primitives extracted from real production incidents — battle-tested daily and published openly for the global developer community.",
      sec_prod_kicker: "03 // PROPRIETARY PLATFORMS & INTERACTIVE CRAFT",
      sec_prod_h2: "Products, MCP Suites & 3D Web",
      sec_prod_desc:
        "Beyond upstream protocol contributions, I build standalone web platforms, real-time Three.js/VRM visualizers, and kernel-hardened desktop MCP servers.",
      arcade_kicker: "LIVE INTERACTIVE DEMO",
      arcade_title: "Polyglot Core Defender 3D — 60-FPS Browser Arcade",
      arcade_desc:
        "Play a real-time 60-FPS 3D WebGL/Canvas defender directly in your browser with Mouse/WASD aiming and procedural retro synth audio — preserved natively at khoaphan.dev/arcade/.",
      arcade_btn: "Play Live 3D Arcade",
      sec_svc_kicker: "04 // ENGAGEMENT ARCHITECTURE",
      sec_svc_h2: "How We Can Work Together",
      sec_svc_desc:
        "Clear scopes, deterministic automated tests, and measurable SLAs across enterprise retainers, Web3 protocol waves, security audits, and freelance engagements.",
      svc1_title: "Custom MCP & AI Agent Suites",
      svc1_price: "$5,000 – $15,000",
      svc1_sub: "14-Day Fixed Sprint or Monthly Retainer",
      svc2_title: "Protocol Grants & Ecosystem Waves",
      svc2_price: "< 2h SLA",
      svc2_sub: "Rust • Soroban • Solana • Go • TypeScript",
      svc3_title: "Defensive Security & FinTech Audits",
      svc3_price: "Fixed Scope",
      svc3_sub: "Idempotency • SSE DLP • Auth • Smart Contracts",
      svc4_title: "3D Web, Automation & Brand Systems",
      svc4_price: "$85 – $800+",
      svc4_sub: "Three.js / VRM • Python Scrapers • Brand Kits",
      sec_plat_kicker: "05 // UNIFIED PERSONAL BRAND ECOSYSTEM",
      sec_plat_h2: "Find & Verify Me Across All Platforms",
      sec_plat_desc:
        "One unified engineering identity anchored at khoaphan.dev — synchronized across code hubs, professional networks, freelance marketplaces, and design portfolios.",
      footer_loop: "Stay in the loop",
      footer_loop_sub: "Follow verified engineering notes, open-source releases, and systems architecture dispatches.",
      modal_title: "Build a Project Brief",
      modal_sub: "Select your engagement track and copy a structured brief in one click.",
      lbl_track: "Engagement Track",
      lbl_stack: "Primary Stack / Domain",
      lbl_notes: "Scope & Goals",
      btn_copy_brief: "Copy Structured Brief",
      btn_open_gh: "Open GitHub Profile",
      toast_copied: "Copied to clipboard",
      links_title: "Khoa Phan — All Platforms & Proof",
      links_sub: "Polyglot Systems, Web3 & Custom MCP Architect • 100% GPG-Verified",
      brand_kicker: "PRESS & VISUAL IDENTITY SYSTEM",
      brand_h1: "Official Brand Kit & Multi-Platform Banners",
      brand_desc:
        "Download official KP SVG/PNG logos, exact-pixel social banners for LinkedIn, X, YouTube, Facebook, GitHub, and OpenGraph, or copy design tokens and verified bios in one click.",
      now_kicker: "STATUS SNAPSHOT • UPDATED NOV 19, 2026",
      now_h1: "What I'm building & auditing now",
      writing_kicker: "SERIES & TECHNICAL WRITING",
      writing_h1: "Engineering Notes & Architecture Series",
      journal_kicker: "DAILY ENGINEERING LOG",
      journal_h1: "Journal & 52-Week Shipping Heatmap"
    },
    vi: {
      nav_index: "Trang chủ",
      nav_now: "Hiện tại",
      nav_writing: "Bài viết",
      nav_journal: "Nhật ký",
      nav_proof: "Bằng chứng",
      nav_brand: "Brand Kit",
      nav_links: "Liên kết",
      cta_start: "Khởi tạo Dự án",
      hero_status: "100% KÝ SỐ GPG • SẴN SÀNG HỢP TÁC TOÀN CẦU",
      hero_lead:
        "Bài viết chuyên sâu, nhật ký kỹ thuật và mã nguồn xác thực 100% GPG trên Rust, Go, TypeScript và Python — trải dài hơn 22 tổ chức quốc tế, 6 thư viện phòng vệ MIT, nền tảng Web 3D và hạ tầng Custom MCP tự phục hồi dưới 210ms.",
      cta_proof: "Xem Bằng chứng Thực chiến",
      cta_writing: "Đọc Bài Kỹ thuật",
      cta_arcade: "Game 3D",
      cta_copy_cv: "Chép CV Chuẩn ATS",
      portrait_role: "Kiến trúc sư Hệ thống & AI",
      portrait_loc: "Việt Nam (UTC+7 • Làm việc Toàn cầu)",
      m1_lbl: "Tổ chức Mã nguồn mở",
      m2_lbl: "Thư viện Cộng đồng MIT",
      m3_lbl: "Phục hồi Socket MCP",
      m4_lbl: "Hệ thống Doanh nghiệp NDA",
      eyebrow_series: "CHUỖI BÀI CHUYÊN SÂU",
      link_all_writing: "Xem tất cả bài viết →",
      eyebrow_articles: "BÀI PHÂN TÍCH KỸ THUẬT MỚI NHẤT",
      link_archive: "Kho lưu trữ & RSS →",
      eyebrow_journal: "TRÍCH TỪ NHẬT KÝ KỸ SƯ",
      link_journal: "Mở Heatmap 52 tuần →",
      sec_proof_kicker: "01 // BẰNG CHỨNG MÃ NGUỒN KIỂM CHỨNG TRONG 5 GIÂY",
      sec_proof_h2: "Đóng góp Mã nguồn Mở Đã Xác thực",
      sec_proof_desc:
        "Mỗi hạng mục bên dưới đều dẫn thẳng tới commit công khai, Pull Request đã merge, cổng CI xanh và nhận xét của Maintainer trên các kho mã nguồn Rust, Go, TypeScript và Python quốc tế.",
      f_all: "Tất cả (10)",
      f_rust: "Rust & Web3",
      f_go: "Go & Cloud",
      f_ts: "TypeScript",
      f_py: "Python & FinTech",
      sec_kits_kicker: "02 // HẠ TẦNG MÃ NGUỒN MỞ MIỄN PHÍ",
      sec_kits_h2: "6 Bộ Thư viện Cộng đồng (MIT)",
      sec_kits_desc:
        "Các khối phòng vệ kỹ thuật tinh gọn được đúc kết từ sự cố vận hành thực tế — kiểm thử tự động hàng ngày và phát hành mở cho cộng đồng lập trình toàn cầu.",
      sec_prod_kicker: "03 // NỀN TẢNG SỞ HỮU & TRẢI NGHIỆM TƯƠNG TÁC",
      sec_prod_h2: "Sản phẩm, Bộ MCP & Web 3D",
      sec_prod_desc:
        "Song song với đóng góp giao thức mở, tôi xây dựng các nền tảng web độc lập, trình xem 3D Three.js/VRM thời gian thực và máy chủ MCP doanh nghiệp cách ly cấp hạt nhân.",
      arcade_kicker: "TRẢI NGHIỆM TRỰC TIẾP 60-FPS",
      arcade_title: "Polyglot Core Defender 3D — Game Trình duyệt 60-FPS",
      arcade_desc:
        "Chơi trực tiếp mini-game 3D WebGL/Canvas điều khiển bằng Chuột/WASD kèm âm thanh tổng hợp ngay trên trình duyệt — bảo toàn trọn vẹn tại khoaphan.dev/arcade/.",
      arcade_btn: "Mở Game 3D Ngay",
      sec_svc_kicker: "04 // MÔ HÌNH HỢP TÁC & DỊCH VỤ",
      sec_svc_h2: "Các Hạng mục Triển khai Chính",
      sec_svc_desc:
        "Phạm vi minh bạch, bộ kiểm thử tự động xác định và SLA rõ ràng cho doanh nghiệp AI/MCP, gói tài trợ Web3, kiểm toán phòng vệ và dự án quốc tế.",
      svc1_title: "Kiến trúc Custom MCP & AI Agent",
      svc1_price: "$5,000 – $15,000",
      svc1_sub: "Sprint 14 ngày hoặc Cố vấn hàng tháng",
      svc2_title: "Protocol Grants & Ecosystem Waves",
      svc2_price: "Phản hồi < 2 giờ",
      svc2_sub: "Rust • Soroban • Solana • Go • TypeScript",
      svc3_title: "Kiểm toán Bảo mật & FinTech",
      svc3_price: "Theo Phạm vi",
      svc3_sub: "Idempotency • SSE DLP • Xác thực • Smart Contract",
      svc4_title: "Web 3D, Tự động hóa & Brand Kit",
      svc4_price: "$85 – $800+",
      svc4_sub: "Three.js / VRM • Python Automation • Thiết kế Thương hiệu",
      sec_plat_kicker: "05 // HỆ SINH THÁI THƯƠNG HIỆU ĐỒNG BỘ ĐA NỀN TẢNG",
      sec_plat_h2: "Kết nối & Kiểm chứng Trên Mọi Nền tảng",
      sec_plat_desc:
        "Một định danh kỹ sư thống nhất lấy khoaphan.dev làm trung tâm — đồng bộ xuyên suốt giữa kho mã nguồn, mạng lưới B2B, sàn Freelance và hồ sơ thiết kế.",
      footer_loop: "Theo dõi các cập nhật mới",
      footer_loop_sub: "Đón đọc bài phân tích hệ thống, bản phát hành mã nguồn mở và ghi chép kiến trúc thực chiến.",
      modal_title: "Tạo Bản Tóm tắt Yêu cầu Dự án",
      modal_sub: "Chọn hạng mục phù hợp và sao chép bản mô tả chuẩn chỉ với 1 lần bấm.",
      lbl_track: "Hạng mục Hợp tác",
      lbl_stack: "Công nghệ / Lĩnh vực Chính",
      lbl_notes: "Mục tiêu & Phạm vi",
      btn_copy_brief: "Sao chép Brief Chuẩn",
      btn_open_gh: "Mở Hồ sơ GitHub",
      toast_copied: "Đã sao chép vào bộ nhớ tạm",
      links_title: "Khoa Phan — Hệ sinh thái Liên kết Chính thức",
      links_sub: "Kiến trúc sư Hệ thống, Web3 & Custom MCP • 100% Ký số GPG",
      brand_kicker: "HỆ THỐNG NHẬN DIỆN & BỘ BÁO CHÍ",
      brand_h1: "Brand Kit Chính thức & Banner Đa Nền tảng",
      brand_desc:
        "Tải trực tiếp Logo KP SVG/PNG, trọn bộ Banner đúng chuẩn từng pixel cho LinkedIn, X, YouTube, Facebook, GitHub, OpenGraph hoặc sao chép mã màu và Bio chuẩn chỉ với 1 cú click.",
      now_kicker: "NHẬT CẬP TRẠNG THÁI • 19/11/2026",
      now_h1: "Những gì tôi đang xây dựng & kiểm toán hiện tại",
      writing_kicker: "CHUỖI BÀI & PHÂN TÍCH KỸ THUẬT",
      writing_h1: "Bài viết Kỹ thuật & Kiến trúc Hệ thống",
      journal_kicker: "NHẬT KÝ KỸ SƯ HẰNG NGÀY",
      journal_h1: "Nhật ký & Biểu đồ Nhiệt 52 Tuần"
    }
  };

  const ATS_RESUME_TEXT = `KHOA PHAN (Phan Dang Khoa) — https://khoaphan.dev
Polyglot Systems, Web3 & Custom MCP Architect (Rust • Go • TypeScript • Python)
GitHub: https://github.com/khoap1220-hue | Location: Vietnam (UTC+7 • Global Remote)

HIGHLIGHTS:
- Merged upstream at Externalize-Labs/externalize#39 (Rust/Wasm Stellar XDR verifier), anza-xyz/cargo-build-sbf#116, sorotrail/SoroBeacon#680, tldr-pages/tldr#24925.
- Credited in main at BasedHardware/omi#23591 (8k+ stars — Python/FastAPI multi-currency Stripe ISO-4217 billing).
- Maintainer-endorsed architecture at CapSoftware/Cap#3218 (12k+ stars — Rust GPUI S3 multipart upload retry).
- 5/5 Audit & CI Green at solana-foundation/program-examples#760 (Rust/Anchor PDA authority verification).
- Author of 6 MIT open-source developer guardkits: soroban-xdr-proof-kit, go-preflight-sql-guard, ts-idempotent-webhook-guard, py-stream-and-billing-guard, solana-validator-ordering-post-alpenglow, Master-Lab.
- Creator of vrm3d.com (Three.js/VRM 3D platform) and uploadhtml.com (instant prototype hosting).`;

  const CMDK_ITEMS = [
    // Articles
    { group: "Articles", title: "Zero-Zombie MCP Servers & Sub-210ms TCP Recovery", sub: "10 MIN • MCP", url: "writing/zero-zombie-mcp-servers/" },
    { group: "Articles", title: "Stopping 20x Concurrent Payment Webhook Storms with WAL Locks", sub: "9 MIN • FINTECH", url: "writing/idempotent-webhook-wal/" },
    { group: "Articles", title: "RFC 4506 Binary Stellar XDR Verification & Cross-Chunk SSE DLP", sub: "11 MIN • CRYPTO", url: "writing/soroban-xdr-and-sse-dlp/" },
    // Pages
    { group: "Pages", title: "Index — Flagship Engineering Hub", sub: "/", url: "" },
    { group: "Pages", title: "Now — Current Focus & Availability", sub: "/now/", url: "now/" },
    { group: "Pages", title: "Writing — Series, Articles & RSS", sub: "/writing/", url: "writing/" },
    { group: "Pages", title: "Journal — Daily Log & 52-Week Heatmap", sub: "/journal/", url: "journal/" },
    { group: "Pages", title: "Brand & Press Kit — Official KP Logos & Banners", sub: "/brand/", url: "brand/" },
    { group: "Pages", title: "Links — All-Platform Link-in-Bio Hub", sub: "/links/", url: "links/" },
    { group: "Pages", title: "3D Arcade — Polyglot Core Defender 60-FPS", sub: "/arcade/", url: "arcade/" },
    // Proof PRs
    { group: "Verified Proof", title: "Externalize-Labs/externalize #39 (Rust / Wasm / XDR)", sub: "MERGED", url: "https://github.com/Externalize-Labs/externalize/pull/39", ext: true },
    { group: "Verified Proof", title: "BasedHardware/omi #23591 (Python / Stripe ISO-4217)", sub: "CREDITED", url: "https://github.com/BasedHardware/omi/pull/23591", ext: true },
    { group: "Verified Proof", title: "CapSoftware/Cap #3218 / Linear CAP-920 (Rust GPUI S3)", sub: "ENDORSED", url: "https://github.com/CapSoftware/Cap/issues/3218", ext: true },
    { group: "Verified Proof", title: "solana-foundation/program-examples #760 (Anchor PDA)", sub: "5/5 AUDIT", url: "https://github.com/solana-foundation/program-examples/pull/760", ext: true },
    { group: "Verified Proof", title: "aibtcdev/x402-api #150 (Cloudflare DO RPC Binding)", sub: "PASSED", url: "https://github.com/aibtcdev/x402-api/pull/150", ext: true },
    // MIT Toolkits
    { group: "MIT Toolkits", title: "soroban-xdr-proof-kit (Rust / Wasm XDR + SHA-256)", sub: "MIT", url: "https://github.com/khoap1220-hue/soroban-xdr-proof-kit", ext: true },
    { group: "MIT Toolkits", title: "go-preflight-sql-guard (Go SQLite WAL & Circuit Breaker)", sub: "MIT", url: "https://github.com/khoap1220-hue/go-preflight-sql-guard", ext: true },
    { group: "MIT Toolkits", title: "ts-idempotent-webhook-guard (TS WAL Lock & HMAC)", sub: "MIT", url: "https://github.com/khoap1220-hue/ts-idempotent-webhook-guard", ext: true },
    { group: "MIT Toolkits", title: "py-stream-and-billing-guard (Python SSE DLP & ISO-4217)", sub: "MIT", url: "https://github.com/khoap1220-hue/py-stream-and-billing-guard", ext: true },
    // Products
    { group: "Products", title: "vrm3d.com — Interactive 3D WebGL / VRM Viewer", sub: "LIVE", url: "https://vrm3d.com", ext: true },
    { group: "Products", title: "uploadhtml.com — Instant HTML Prototype Hosting", sub: "LIVE", url: "https://uploadhtml.com", ext: true }
  ];

  let currentLang = localStorage.getItem("kp_lang") || "en";
  let currentTheme = localStorage.getItem("kp_theme") || "dark";

  function showToast(msg) {
    let el = document.getElementById("kp-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "kp-toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      el.setAttribute("aria-live", "polite");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function copyText(text, label) {
    const done = () => showToast(label || I18N[currentLang].toast_copied);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(ta);
    cb();
  }

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("kp_theme", currentTheme);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to warm editorial light mode" : "Switch to KP obsidian dark mode");
      const label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = currentTheme === "dark" ? "PAPER" : "DARK";
    });
  }

  function applyLang(lang) {
    currentLang = lang === "vi" ? "vi" : "en";
    document.documentElement.lang = currentLang;
    localStorage.setItem("kp_lang", currentLang);
    const dict = I18N[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = currentLang === "en" ? "VI" : "EN";
      btn.setAttribute("aria-label", currentLang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English");
    });
  }

  function initCommandPalette() {
    const modal = document.createElement("div");
    modal.id = "kp-cmdk-modal";
    modal.className = "modal-backdrop";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Command Palette Search");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="cmdk-panel">
        <div class="cmdk-input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input id="kp-cmdk-input" class="cmdk-input" type="search" placeholder="Search articles, PR proofs, MIT toolkits, pages..." autocomplete="off" />
          <button type="button" id="kp-cmdk-close" class="icon-btn" style="min-height:34px; min-width:44px; font-size:0.76rem;" aria-label="Close search">ESC</button>
        </div>
        <div id="kp-cmdk-results" class="cmdk-results" role="listbox"></div>
        <div class="cmdk-foot">
          <span>↑↓ Navigate &nbsp;•&nbsp; Enter Open</span>
          <span>khoaphan.dev // Index</span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const input = document.getElementById("kp-cmdk-input");
    const resultsEl = document.getElementById("kp-cmdk-results");
    const closeBtn = document.getElementById("kp-cmdk-close");
    let flatFiltered = [];
    let activeIdx = 0;

    function resolveUrl(item) {
      if (item.ext) return item.url;
      return ROOT_PREFIX + item.url;
    }

    function render(query) {
      const q = (query || "").trim().toLowerCase();
      flatFiltered = CMDK_ITEMS.filter((it) =>
        !q || it.title.toLowerCase().includes(q) || it.group.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q)
      );
      activeIdx = 0;
      resultsEl.innerHTML = "";
      if (!flatFiltered.length) {
        resultsEl.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted); font-family:var(--font-mono); font-size:0.84rem;">No matching entries for "${q.replace(/[<>&"]/g, "")}"</div>`;
        return;
      }
      const groups = {};
      flatFiltered.forEach((item, idx) => {
        if (!groups[item.group]) groups[item.group] = [];
        groups[item.group].push({ item, idx });
      });
      Object.keys(groups).forEach((gName) => {
        const gHead = document.createElement("div");
        gHead.className = "cmdk-group-title";
        gHead.textContent = gName;
        resultsEl.appendChild(gHead);
        groups[gName].forEach(({ item, idx }) => {
          const a = document.createElement("a");
          a.className = "cmdk-item" + (idx === activeIdx ? " selected" : "");
          a.href = resolveUrl(item);
          a.setAttribute("role", "option");
          a.setAttribute("data-cmdk-idx", String(idx));
          if (item.ext) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }
          a.innerHTML = `<span>${item.title}</span><span class="cmdk-item-sub">${item.sub}${item.ext ? " ↗" : ""}</span>`;
          a.addEventListener("mouseenter", () => highlight(idx));
          resultsEl.appendChild(a);
        });
      });
    }

    function highlight(idx) {
      activeIdx = idx;
      resultsEl.querySelectorAll(".cmdk-item").forEach((el) => {
        el.classList.toggle("selected", Number(el.getAttribute("data-cmdk-idx")) === activeIdx);
      });
    }

    function open() {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      input.value = "";
      render("");
      setTimeout(() => input.focus(), 20);
    }

    function close() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }

    document.querySelectorAll("[data-open-cmdk]").forEach((btn) => btn.addEventListener("click", open));
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    input.addEventListener("input", () => render(input.value));

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (modal.classList.contains("open")) close(); else open();
        return;
      }
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowDown" && flatFiltered.length) {
        e.preventDefault();
        highlight((activeIdx + 1) % flatFiltered.length);
      } else if (e.key === "ArrowUp" && flatFiltered.length) {
        e.preventDefault();
        highlight((activeIdx - 1 + flatFiltered.length) % flatFiltered.length);
      } else if (e.key === "Enter" && flatFiltered[activeIdx]) {
        e.preventDefault();
        const target = flatFiltered[activeIdx];
        const href = resolveUrl(target);
        close();
        if (target.ext) window.open(href, "_blank", "noopener,noreferrer");
        else window.location.href = href;
      }
    });
  }

  function initHeatmap() {
    const grid = document.getElementById("kp-heatmap-grid");
    if (!grid) return;
    // Deterministic 52-week engineering shipping cadence (364 days ending 2026-11-19)
    const activeMap = {
      180: 1, 184: 2, 189: 1, 195: 2, 202: 1, 210: 2, 216: 3, 224: 1, 231: 2, 238: 2,
      245: 3, 250: 1, 256: 2, 261: 2, 266: 3, 272: 1, 278: 2, 282: 3, 287: 2, 291: 1,
      295: 2, 299: 3, 303: 2, 308: 3, 312: 2, 315: 3, 319: 2, 322: 3, 325: 2, 329: 3,
      332: 2, 335: 3, 338: 3, 341: 2, 344: 3, 346: 2, 349: 3, 351: 3, 353: 2, 355: 3,
      357: 3, 358: 2, 359: 3, 360: 3, 361: 2, 362: 3, 363: 3
    };
    const endDate = new Date("2026-11-19T00:00:00Z");
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 364; i++) {
      const cell = document.createElement("span");
      const lvl = activeMap[i] || 0;
      const d = new Date(endDate.getTime() - (363 - i) * 86400000);
      const iso = d.toISOString().slice(0, 10);
      cell.className = "heat-cell";
      cell.setAttribute("data-level", String(lvl));
      cell.setAttribute("title", `${iso}: ${lvl === 0 ? "No public entry" : lvl + " engineering milestone(s)"}`);
      frag.appendChild(cell);
    }
    grid.appendChild(frag);
  }

  function initCodeCopyButtons() {
    document.querySelectorAll("[data-copy-code]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const block = btn.closest(".code-block");
        const pre = block ? block.querySelector("pre") : null;
        if (pre) copyText(pre.textContent || "", currentLang === "vi" ? "Đã sao chép đoạn mã!" : "Code snippet copied!");
      });
    });
  }

  function initFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-proof-card]");
    if (!buttons.length || !cards.length) return;
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-filter");
        buttons.forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        cards.forEach((card) => {
          const tags = (card.getAttribute("data-category") || "").split(" ");
          const match = cat === "all" || tags.includes(cat);
          card.classList.toggle("hidden", !match);
        });
      });
    });
  }

  function initModal() {
    const backdrop = document.getElementById("brief-modal");
    if (!backdrop) return;
    const closeBtn = document.getElementById("brief-close");
    const copyBtn = document.getElementById("brief-copy");
    const trackEl = document.getElementById("brief-track");
    const stackEl = document.getElementById("brief-stack");
    const notesEl = document.getElementById("brief-notes");

    const openModal = (presetTrack) => {
      if (presetTrack && trackEl) trackEl.value = presetTrack;
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden", "false");
      if (trackEl) trackEl.focus();
    };
    const closeModal = () => {
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden", "true");
    };

    document.querySelectorAll("[data-open-brief]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.getAttribute("data-open-brief")));
    });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal(); });

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const brief = [
          `PROJECT BRIEF FOR KHOA PHAN (khoaphan.dev)`,
          `Track: ${trackEl ? trackEl.value : "Custom MCP & AI Agent"}`,
          `Stack / Domain: ${stackEl && stackEl.value.trim() ? stackEl.value.trim() : "Rust / Go / TypeScript / Python"}`,
          `Scope & Goals:`,
          notesEl && notesEl.value.trim() ? notesEl.value.trim() : "(Please outline core goals, target deadline, and repository/platform context.)"
        ].join("\n");
        copyText(brief, currentLang === "vi" ? "Đã sao chép bản Brief dự án!" : "Project brief copied to clipboard!");
      });
    }
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (!btn || !drawer) return;
    btn.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(currentTheme);
    applyLang(currentLang);
    initCommandPalette();
    initHeatmap();
    initCodeCopyButtons();
    initFilters();
    initModal();
    initMobileMenu();

    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(currentLang === "en" ? "vi" : "en"));
    });
    document.querySelectorAll("[data-copy-resume]").forEach((btn) => {
      btn.addEventListener("click", () =>
        copyText(ATS_RESUME_TEXT, currentLang === "vi" ? "Đã sao chép CV chuẩn ATS!" : "ATS Resume copied to clipboard!")
      );
    });
    document.querySelectorAll("[data-copy-text]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-copy-text");
        const label = btn.getAttribute("data-copy-label");
        if (text) copyText(text, label || undefined);
      });
    });
  });
})();

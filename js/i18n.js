/* Khoa Phan (khoaphan.dev) — Bilingual EN/VI, Theme, Proof Filter & Brief Builder */
(function () {
  "use strict";

  const I18N = {
    en: {
      nav_proof: "Proof",
      nav_toolkits: "Toolkits",
      nav_products: "Products",
      nav_services: "Services",
      nav_platforms: "Platforms",
      nav_brand: "Brand Kit",
      nav_links: "Links",
      cta_start: "Start a Project",
      hero_status: "100% GPG-VERIFIED • OPEN FOR ENGAGEMENTS",
      hero_h1_prefix: "Polyglot Systems, Web3 &",
      hero_h1_accent: "Custom MCP Architect",
      hero_lead:
        "I architect and ship production-hardened software across Rust, Go, TypeScript, and Python — backed by merged upstream open-source code, 6 MIT developer guardkits, interactive 3D web platforms, and sub-second resilient AI agent infrastructure.",
      cta_proof: "Inspect Verified Proof",
      cta_arcade: "Launch 3D Arcade",
      cta_copy_cv: "Copy ATS Resume",
      portrait_role: "Systems & AI Architect",
      portrait_loc: "Vietnam (UTC+7 • Global Remote)",
      m1_lbl: "Upstream Organizations",
      m2_lbl: "MIT Community Toolkits",
      m3_lbl: "MCP Socket Auto-Recovery",
      m4_lbl: "NDA Enterprise Systems",
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
        "Play a real-time 60-FPS 3D WebGL/Canvas defender directly in your browser with Mouse/WASD aiming and procedural retro synth audio — preserved natively on khoaphan.dev/arcade/.",
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
      modal_title: "Build a Project Brief",
      modal_sub: "Select your engagement track and copy a structured brief in one click.",
      lbl_track: "Engagement Track",
      lbl_stack: "Primary Stack / Domain",
      lbl_notes: "Scope & Goals",
      btn_copy_brief: "Copy Structured Brief",
      btn_open_gh: "Open GitHub Profile",
      footer_rights: "Khoa Phan (Phan Đăng Khoa). Built for speed, verified by code.",
      toast_copied: "Copied to clipboard",
      links_title: "Khoa Phan — All Platforms & Proof",
      links_sub: "Polyglot Systems, Web3 & Custom MCP Architect • 100% GPG-Verified",
      brand_kicker: "PRESS & VISUAL IDENTITY SYSTEM",
      brand_h1: "Official Brand Kit & Multi-Platform Banners",
      brand_desc:
        "Download official SVG logos, exact-pixel social banners for LinkedIn, X, YouTube, Facebook, GitHub, and OpenGraph, or copy design tokens and verified bios in one click."
    },
    vi: {
      nav_proof: "Bằng chứng",
      nav_toolkits: "Thư viện MIT",
      nav_products: "Sản phẩm",
      nav_services: "Dịch vụ",
      nav_platforms: "Nền tảng",
      nav_brand: "Bộ Brand Kit",
      nav_links: "Liên kết",
      cta_start: "Khởi tạo Dự án",
      hero_status: "100% KÝ SỐ GPG • SẴN SÀNG HỢP TÁC TOÀN CẦU",
      hero_h1_prefix: "Kiến trúc sư Hệ thống, Web3 &",
      hero_h1_accent: "Custom MCP / AI Agent",
      hero_lead:
        "Tôi thiết kế và bàn giao các hệ thống chuẩn sản xuất trên Rust, Go, TypeScript và Python — được kiểm chứng trực tiếp bằng mã nguồn đã merge tại các tổ chức quốc tế, 6 thư viện MIT miễn phí, nền tảng Web 3D và hạ tầng AI Agent tự phục hồi dưới 210ms.",
      cta_proof: "Xem Bằng chứng Thực chiến",
      cta_arcade: "Chơi Game 3D Arcade",
      cta_copy_cv: "Chép CV Chuẩn ATS",
      portrait_role: "Kiến trúc sư Hệ thống & AI",
      portrait_loc: "Việt Nam (UTC+7 • Làm việc Toàn cầu)",
      m1_lbl: "Tổ chức Mã nguồn mở",
      m2_lbl: "Thư viện Cộng đồng MIT",
      m3_lbl: "Phục hồi Socket MCP",
      m4_lbl: "Hệ thống Doanh nghiệp NDA",
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
      sec_kits_h2: "6 Bộ Thư viện Công đồng (MIT)",
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
      modal_title: "Tạo Bản Tóm tắt Yêu cầu Dự án",
      modal_sub: "Chọn hạng mục phù hợp và sao chép bản mô tả chuẩn chỉ với 1 lần bấm.",
      lbl_track: "Hạng mục Hợp tác",
      lbl_stack: "Công nghệ / Lĩnh vực Chính",
      lbl_notes: "Mục tiêu & Phạm vi",
      btn_copy_brief: "Sao chép Brief Chuẩn",
      btn_open_gh: "Mở Hồ sơ GitHub",
      footer_rights: "Khoa Phan (Phan Đăng Khoa). Tối ưu hiệu năng, kiểm chứng bằng mã nguồn.",
      toast_copied: "Đã sao chép vào bộ nhớ tạm",
      links_title: "Khoa Phan — Hệ sinh thái Liên kết Chính thức",
      links_sub: "Kiến trúc sư Hệ thống, Web3 & Custom MCP • 100% Ký số GPG",
      brand_kicker: "HỆ THỐNG NHẬN DIỆN & BỘ BÁO CHÍ",
      brand_h1: "Brand Kit Chính thức & Banner Đa Nền tảng",
      brand_desc:
        "Tải trực tiếp Logo SVG, trọn bộ Banner đúng chuẩn từng pixel cho LinkedIn, X, YouTube, Facebook, GitHub, OpenGraph hoặc sao chép mã màu và Bio chuẩn chỉ với 1 cú click."
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
      btn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      const label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = currentTheme === "dark" ? "LIGHT" : "DARK";
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
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
    });

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

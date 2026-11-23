/* Khoa Phan (khoaphan.dev) — v2.4 Complete Flagship Runtime:
   100% EN/VI Bilingual Engine, Zero-FOUC Theme & Theme-Color Sync, Bilingual Cmd+K Search + WAI-ARIA Focus Trap & Return,
   Global Brief + Mailto Modal, Daily-Synced GitHub Heatmap (7,528 contributions), Reading Progress, Print CV & Code Copy */
(function () {
  "use strict";

  const ROOT_PREFIX = document.documentElement.getAttribute("data-root") || "./";
  const CONTACT_EMAIL = "khoap1220@gmail.com";

  const I18N = {
    en: {
      nav_index: "Index",
      nav_now: "Now",
      nav_writing: "Writing",
      nav_journal: "Journal",
      nav_proof: "Proof",
      nav_resume: "Resume",
      nav_brand: "Brand",
      nav_links: "Links",
      cta_start: "Start a Project",
      hero_status: "GPG-SIGNED GUARDKITS • VERIFIED PROOF",
      hero_h1_html:
        "Building on <em>distributed systems</em>, <em>cryptography</em>, and <em>custom MCP</em> — verified in public code.",
      hero_lead:
        "Articles, engineering logs, and public proof-of-work across Rust, Go, TypeScript, and Python — backed by 18 merged upstream pull requests, 6 MIT guardkits, 4 bilingual technical articles, and resilient Custom MCP infrastructure.",
      cta_proof: "Inspect Verified Proof",
      cta_writing: "Read Engineering Notes",
      cta_arcade: "3D Arcade",
      cta_copy_cv: "Printable CV / PDF",
      portrait_role: "Systems & AI Architect",
      portrait_loc: "Vietnam (UTC+7 • Global Remote)",
      m1_val: "18 Merged",
      m1_lbl: "Upstream Pull Requests",
      m2_val: "6 MIT",
      m2_lbl: "Open-Source Guardkits",
      m3_val: "4 Articles",
      m3_lbl: "Bilingual Tech Series",
      m4_val: "< 210ms",
      m4_lbl: "MCP Socket Auto-Recovery",
      eyebrow_series: "FEATURED SERIES",
      link_all_writing: "View all writing →",
      s1_title: "Production MCP & Zero-Zombie Agents",
      s1_desc:
        "Kernel-level Windows Job Object containment (SetInformationJobObject), POSIX process groups, sub-210ms TCP RST auto-recovery, and strict JSON-RPC 2.0 boundaries.",
      s2_title: "Cryptographic & FinTech Guardkits",
      s2_desc:
        "First-principles RFC 4506 Stellar XDR verification in Rust/Wasm, concurrent payment webhook WAL locks, cross-chunk SSE DLP scanners, and ISO-4217 integer billing math.",
      read_start: "Start reading →",
      eyebrow_articles: "LATEST ENGINEERING NOTES",
      link_archive: "Archive & RSS →",
      a1_title: "Zero-Zombie MCP Servers & Sub-210ms TCP RST Auto-Recovery",
      a1_desc:
        "Why naive stdio and subprocess MCP wrappers leak gigabytes of RAM and deadlock on transient socket drops — and how Windows Job Objects plus delimiter frame reassembly solve both deterministically.",
      a2_title: "Stopping 20x Concurrent Payment Webhook Storms with In-Flight Locks & JSONL WAL",
      a2_desc:
        "Proving why SELECT-then-INSERT collapses under 2ms retry bursts, and walking through the exact in-flight Promise.all mutex + durable Write-Ahead Log pattern inside ts-idempotent-webhook-guard.",
      a3_title: "RFC 4506 Binary Stellar XDR Proofs & Cross-Chunk SSE Secret Leak Guards",
      a3_desc:
        "Notes from merging proveAncestor to WebAssembly (Externalize-Labs/externalize#39) and mitigating split-packet TCP secret leaks (CWE-444) in streaming LLM proxies.",
      eyebrow_journal: "FROM THE ENGINEERING LOG",
      link_journal: "Open 52-week heatmap →",
      j0_note:
        "Merged PDA authority security docs into solana-foundation/program-examples#760 (a9446bc) plus 3 backend PRs in Altacon-Labs/RevMarket (#42, #56, #57 — SQLite checkpoints & proxy rate limits), reaching 18 merged PRs & 7,528 GitHub contributions.",
      j1_note:
        "Shipped khoaphan.dev Hybrid Flagship with official KP vector system, warm editorial paper mode, ⌘K command palette, RSS feed, and live-verified GitHub contribution heatmap.",
      j2_note:
        "Merged official stellar-cli smart contract deployment command specification into tldr-pages/tldr#24925 (64k+ star repository).",
      j3_note:
        "Merged Solana SBF syscall deduplication in anza-xyz/cargo-build-sbf#116 and incident runbook in Wayfare-labs/wayfare#860.",
      j4_note:
        "Merged wasm-bindgen proveAncestor XDR verifier into Externalize-Labs/externalize#39 (commit a927da3, 11/11 CI green).",
      sec_proof_kicker: "01 // CLICK-TO-VERIFY ENGINEERING RECORD",
      sec_proof_h2: "Verified Upstream Proof-of-Work",
      sec_proof_desc:
        "Every card below links directly to live HTTP-200 GitHub pull requests — clearly separating merged upstream code, boundary-test credits, and active open PRs currently under review.",
      f_all: "All (10)",
      f_rust: "Rust & Web3",
      f_go: "Python & Ops",
      f_ts: "TypeScript & Node",
      f_open: "Open In Review",
      sec_kits_kicker: "02 // OPEN-SOURCE INFRASTRUCTURE",
      sec_kits_h2: "6 Free MIT Open-Source Repositories",
      sec_kits_desc:
        "Zero-bloat engineering guardkits and research benchmarks — all 6 carrying verified MIT licenses on GitHub, with GPG-signed commits on all 4 core guardkits.",
      sec_prod_kicker: "03 // PROPRIETARY PLATFORMS & INTERACTIVE CRAFT",
      sec_prod_h2: "Custom MCP Suites, Agent CLIs & 3D Web",
      sec_prod_desc:
        "Beyond upstream protocol contributions, I architect kernel-hardened Custom MCP suites, stateful --json Python CLIs, and interactive 60-FPS 3D WebGL experiences.",
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
      svc4_sub: "Three.js / VRM • Python Automation • Brand Kits",
      sec_plat_kicker: "05 // UNIFIED PERSONAL BRAND ECOSYSTEM",
      sec_plat_h2: "Find, Contact & Verify Me Everywhere",
      sec_plat_desc:
        "One unified engineering identity anchored at khoaphan.dev — direct email, verified GitHub commits, live 3D platforms, printable CV, and freelance hubs.",
      footer_loop: "Stay in the loop",
      footer_loop_sub: "Follow verified engineering notes, open-source releases, or reach out directly for architecture sprints.",
      modal_title: "Build & Send a Project Brief",
      modal_sub: "Configure your scope below, then send directly via Email or copy in one click.",
      lbl_track: "Engagement Track",
      lbl_stack: "Primary Stack / Domain",
      lbl_notes: "Scope & Goals",
      btn_copy_brief: "Copy Brief",
      btn_send_email: "Send via Email ↗",
      btn_open_gh: "GitHub ↗",
      toast_copied: "Copied to clipboard",
      links_title: "Khoa Phan — All Platforms & Proof",
      links_sub: "Polyglot Systems, Web3 & Custom MCP Architect • 18 Merged PRs & 6 MIT GuardKits",
      brand_kicker: "PRESS & VISUAL IDENTITY SYSTEM",
      brand_h1: "Official Brand Kit & Multi-Platform Banners",
      brand_desc:
        "Download official KP SVG/PNG logos, exact-pixel social banners for LinkedIn, X, YouTube, Facebook, GitHub, and OpenGraph, or copy design tokens and verified bios in one click.",
      now_kicker: "STATUS SNAPSHOT • UPDATED NOV 21, 2026",
      now_h1: "What I'm building & auditing now",
      now_lead:
        "A living /now page summarizing my current engineering priorities, active open-source tracks, and remote availability from Vietnam (UTC+7).",
      writing_kicker: "SERIES & TECHNICAL WRITING",
      writing_h1: "Engineering Notes & Architecture Series",
      writing_lead:
        "First-principles technical articles distilled from merged PRs, adversarial test suites, and production systems — with full English/Vietnamese toggle and /rss.xml feed.",
      journal_kicker: "DAILY ENGINEERING LOG (SYNCED DAILY FROM GITHUB)",
      journal_h1: "Journal & 52-Week Contribution Heatmap",
      journal_lead:
        "Chronological log of upstream merges, guardkit releases, and active engineering milestones synced from @khoap1220-hue's real GitHub contribution calendar (7,528 contributions across 42 active days)."
    },
    vi: {
      nav_index: "Trang chủ",
      nav_now: "Hiện tại",
      nav_writing: "Bài viết",
      nav_journal: "Nhật ký",
      nav_proof: "Bằng chứng",
      nav_resume: "Hồ sơ",
      nav_brand: "Brand",
      nav_links: "Liên kết",
      cta_start: "Khởi tạo Dự án",
      hero_status: "GUARDKITS KÝ SỐ GPG • BẰNG CHỨNG MỞ",
      hero_h1_html:
        "Xây dựng <em>hệ thống phân tán</em>, <em>mật mã học</em> và <em>Custom MCP</em> — kiểm chứng trên mã nguồn mở.",
      hero_lead:
        "Bài viết chuyên sâu, nhật ký kỹ sư và bằng chứng mã nguồn công khai trên Rust, Go, TypeScript và Python — gồm 18 PR đã merge tại các dự án quốc tế, 6 kho mã nguồn MIT, 4 bài phân tích kỹ thuật song ngữ và hạ tầng Custom MCP tự phục hồi dưới 210ms.",
      cta_proof: "Xem Bằng chứng Thực chiến",
      cta_writing: "Đọc Bài Kỹ thuật",
      cta_arcade: "Game 3D",
      cta_copy_cv: "Xem CV / Tải PDF",
      portrait_role: "Kiến trúc sư Hệ thống",
      portrait_loc: "Việt Nam (UTC+7 • Làm việc Toàn cầu)",
      m1_val: "18 Merged",
      m1_lbl: "PR Đã Merge Quốc tế",
      m2_val: "6 MIT",
      m2_lbl: "Kho Mã nguồn Mở MIT",
      m3_val: "4 Articles",
      m3_lbl: "Chuỗi Bài Kỹ thuật Song ngữ",
      m4_val: "< 210ms",
      m4_lbl: "Phục hồi Socket MCP",
      eyebrow_series: "CHUỖI BÀI CHUYÊN SÂU",
      link_all_writing: "Xem tất cả bài viết →",
      s1_title: "Production MCP & Chống Rò rỉ Tiến trình (Zero-Zombie)",
      s1_desc:
        "Cô lập tiến trình con cấp hạt nhân bằng Windows Job Object (SetInformationJobObject), POSIX process groups, tự phục hồi kết nối TCP RST dưới 210ms và chuẩn hóa JSON-RPC 2.0.",
      s2_title: "Bộ Khung Phòng vệ Mật mã & Thanh toán FinTech",
      s2_desc:
        "Giải mã nhị phân Stellar XDR chuẩn RFC 4506 bằng Rust/Wasm, khóa chống trùng lặp webhook thanh toán bằng WAL, quét rò rỉ khóa qua gói tin SSE và số học nguyên ISO-4217.",
      read_start: "Đọc ngay →",
      eyebrow_articles: "BÀI PHÂN TÍCH KỸ THUẬT MỚI NHẤT",
      link_archive: "Kho lưu trữ & RSS →",
      a1_title: "Zero-Zombie MCP Servers & Tự phục hồi TCP RST dưới 210ms",
      a1_desc:
        "Vì sao các trình bọc stdio/subprocess ngây thơ gây rò rỉ hàng GB RAM và treo cứng khi đứt kết nối tạm thời — cùng giải pháp triệt để bằng Windows Job Object và bộ ghép khung phân cách.",
      a2_title: "Chặn Bão 20x Webhook Thanh toán Đồng thời bằng Khóa In-Flight & Sổ cái WAL",
      a2_desc:
        "Chứng minh lỗi đua tranh TOCTOU khi dùng SELECT-rồi-INSERT dưới đợt retry 2ms và phân tích chi tiết khóa Promise.all + FileWalIdempotencyStore trong ts-idempotent-webhook-guard.",
      a3_title: "Xác thực Mật mã Stellar XDR (RFC 4506) & Chống Rò rỉ Bí mật Qua Khung SSE",
      a3_desc:
        "Kinh nghiệm xuất hàm proveAncestor sang WebAssembly (Externalize-Labs/externalize#39) và vá lỗ hổng rò rỉ khóa API bị cắt đôi qua hai gói TCP (CWE-444) trên proxy LLM.",
      eyebrow_journal: "TRÍCH TỪ NHẬT KÝ KỸ SƯ",
      link_journal: "Mở Heatmap 52 tuần →",
      j0_note:
        "Được merge PR bảo mật PDA tại solana-foundation/program-examples#760 (a9446bc) và 3 PR backend tại Altacon-Labs/RevMarket (#42, #56, #57 — SQLite checkpoint & giới hạn tốc độ sau proxy), cán mốc 18 PR đã merge và 7,528 đóng góp GitHub.",
      j1_note:
        "Phát hành khoaphan.dev Hybrid Flagship đồng bộ hệ vector Logo KP, chế độ giấy ấm Editorial, thanh tìm kiếm ⌘K, nguồn RSS và Heatmap đóng góp GitHub thực tế.",
      j2_note:
        "Được merge tài liệu đặc tả lệnh triển khai smart contract stellar-cli vào kho tldr-pages/tldr#24925 (hơn 64,000 sao).",
      j3_note:
        "Được merge PR chuẩn hóa bảng syscall Solana SBF tại anza-xyz/cargo-build-sbf#116 và quy trình ứng phó sự cố tại Wayfare-labs/wayfare#860.",
      j4_note:
        "Được merge bộ xác thực phả hệ XDR proveAncestor (wasm-bindgen) vào Externalize-Labs/externalize#39 (commit a927da3, 11/11 CI xanh).",
      sec_proof_kicker: "01 // BẰNG CHỨNG MÃ NGUỒN KIỂM CHỨNG TRỰC TIẾP",
      sec_proof_h2: "Hồ sơ Mã nguồn Mở Đã Xác thực",
      sec_proof_desc:
        "Mỗi thẻ bên dưới dẫn thẳng tới Pull Request HTTP-200 trên GitHub — phân tách minh bạch giữa PR đã Merge, ghi nhận kiểm thử biên và PR đang mở chờ duyệt.",
      f_all: "Tất cả (10)",
      f_rust: "Rust & Web3",
      f_go: "Python & Vận hành",
      f_ts: "TypeScript & Node",
      f_open: "Đang chờ Review",
      sec_kits_kicker: "02 // HẠ TẦNG MÃ NGUỒN MỞ MIỄN PHÍ",
      sec_kits_h2: "6 Kho Mã nguồn Mở Chuẩn Giấy phép MIT",
      sec_kits_desc:
        "Các thư viện phòng vệ kỹ thuật và bộ đo kiểm thực nghiệm — cả 6 kho đều có tệp LICENSE MIT hợp lệ trên GitHub, trong đó 4 guardkits cốt lõi được ký số GPG.",
      sec_prod_kicker: "03 // NỀN TẢNG VẬN HÀNH & TRẢI NGHIỆM TƯƠNG TÁC",
      sec_prod_h2: "Bộ Custom MCP, Agent CLI & 3D Web",
      sec_prod_desc:
        "Bên cạnh đóng góp mã nguồn mở, tôi kiến trúc hệ thống Custom MCP doanh nghiệp, bộ công cụ Python CLI trạng thái (--json) và trải nghiệm WebGL 3D 60-FPS.",
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
      sec_plat_h2: "Kết nối, Liên hệ & Kiểm chứng Mọi Nơi",
      sec_plat_desc:
        "Một định danh kỹ sư thống nhất lấy khoaphan.dev làm trung tâm — kết nối trực tiếp qua Email, kho mã nguồn GitHub, CV bản in PDF, nền tảng 3D và sàn quốc tế.",
      footer_loop: "Giữ kết nối & Theo dõi cập nhật",
      footer_loop_sub: "Đón đọc bài phân tích hệ thống, bản phát hành mã nguồn mở hoặc gửi yêu cầu dự án trực tiếp.",
      modal_title: "Khởi tạo & Gửi Yêu cầu Dự án",
      modal_sub: "Chọn hạng mục bên dưới để gửi trực tiếp qua Email hoặc sao chép bản tóm tắt chuẩn chỉ với 1 lần bấm.",
      lbl_track: "Hạng mục Hợp tác",
      lbl_stack: "Công nghệ / Lĩnh vực Chính",
      lbl_notes: "Mục tiêu & Phạm vi",
      btn_copy_brief: "Sao chép Brief",
      btn_send_email: "Gửi qua Email ↗",
      btn_open_gh: "GitHub ↗",
      toast_copied: "Đã sao chép vào bộ nhớ tạm",
      links_title: "Khoa Phan — Hệ sinh thái Liên kết Chính thức",
      links_sub: "Kiến trúc sư Hệ thống, Web3 & Custom MCP • 18 PR Merged & 6 Kho MIT",
      brand_kicker: "HỆ THỐNG NHẬN DIỆN & BỘ BÁO CHÍ",
      brand_h1: "Brand Kit Chính thức & Banner Đa Nền tảng",
      brand_desc:
        "Tải trực tiếp Logo KP SVG/PNG, trọn bộ Banner đúng chuẩn từng pixel cho LinkedIn, X, YouTube, Facebook, GitHub, OpenGraph hoặc sao chép mã màu và Bio chuẩn chỉ với 1 cú click.",
      now_kicker: "CẬP NHẬT TRẠNG THÁI • 21/11/2026",
      now_h1: "Những gì tôi đang xây dựng & kiểm toán hiện tại",
      now_lead:
        "Trang /now ghi lại trọng tâm kỹ thuật hiện tại, các nhánh mã nguồn mở đang theo đuổi và lịch nhận dự án từ Việt Nam (UTC+7).",
      writing_kicker: "CHUỖI BÀI & PHÂN TÍCH KỸ THUẬT",
      writing_h1: "Bài viết Kỹ thuật & Kiến trúc Hệ thống",
      writing_lead:
        "Các bài phân tích chuyên sâu đúc kết trực tiếp từ PR đã merge, bộ test đối kháng và hệ thống thực tế — hỗ trợ chuyển đổi song ngữ Anh/Việt toàn bài và nguồn /rss.xml.",
      journal_kicker: "NHẬT KÝ KỸ SƯ (ĐỒNG BỘ HẰNG NGÀY TỪ GITHUB)",
      journal_h1: "Nhật ký & Biểu đồ Đóng góp 52 Tuần",
      journal_lead:
        "Nhật ký theo trình tự thời gian các PR đã merge, đợt phát hành thư viện MIT và cột mốc kỹ thuật đồng bộ từ lịch sử GitHub thật của @khoap1220-hue (7,528 đóng góp trên 42 ngày hoạt động)."
    }
  };

  const ATS_RESUME_TEXT = `KHOA PHAN (Phan Dang Khoa)
Polyglot Systems, Web3 & Custom MCP Architect (Rust • Go • TypeScript • Python)
Website: https://khoaphan.dev | Email: khoap1220@gmail.com | GitHub: https://github.com/khoap1220-hue
Location: Vietnam (UTC+7 • Global Remote)

VERIFIED OPEN-SOURCE & PRODUCTION HIGHLIGHTS:
- 18 live merged upstream PRs across Externalize-Labs/externalize#39 (Rust/Wasm Stellar XDR verifier), anza-xyz/cargo-build-sbf#116 (Solana SBF toolchain), solana-foundation/program-examples#760 (PDA authority security docs), Altacon-Labs/RevMarket#42,#56,#57 (SQLite checkpoint event indexer, verified wallet activity & proxy rate limits), sorotrail/SoroBeacon#680, tldr-pages/tldr#24925 (64k+ stars), Wayfare-labs/wayfare#860, ritik4ever/stellar-stream#1436, Farm-credit/stellar-app-os#1797..1799, ritik4ever/stellar-goal-vault#1377..1379, and MMM-pay/payflow-docs#107.
- Boundary-test credit on BasedHardware/omi#23591 (8k+ stars — JPY multi-currency Stripe plan changes); active open PRs in review at aibtcdev/x402-api#150, wraith-protocol/contracts#285, and Miracle656/veil#1350.
- Author of 6 MIT-licensed open-source repositories (4 GPG-signed core guardkits): soroban-xdr-proof-kit (Rust/Wasm), go-preflight-sql-guard (Go 1.22+), ts-idempotent-webhook-guard (TypeScript), py-stream-and-billing-guard (Python/FastAPI), solana-validator-ordering-post-alpenglow, and Master-Lab.
- Architect of stateful Agent-Native Python CLIs (--json + Undo/Redo) and interactive 60-FPS WebGL 3D browser applications (khoaphan.dev/arcade/).
- Printable CV & PDF: https://khoaphan.dev/resume/`;

  const CMDK_GROUP_VI = {
    "Articles": "Bài viết Kỹ thuật",
    "Pages": "Các trang chính",
    "Contact & PDF": "Liên hệ & Tải CV PDF",
    "Merged Upstream PRs": "PR Đã Merge Quốc tế",
    "Open PRs In Review": "PR Đang mở Chờ duyệt",
    "MIT Repositories": "Kho Mã nguồn Mở MIT",
    "Services": "Gói Dịch vụ Kỹ thuật"
  };

  const CMDK_ITEMS = [
    { group: "Articles", title: "Zero-Zombie MCP Servers & Sub-210ms TCP Recovery", viTitle: "Zero-Zombie MCP Servers & Tự phục hồi TCP RST dưới 210ms", kw: "bài viết mcp windows job object socket tiến trình", sub: "10 MIN • MCP", url: "writing/zero-zombie-mcp-servers/" },
    { group: "Articles", title: "Stopping 20x Concurrent Payment Webhook Storms with WAL Locks", viTitle: "Chặn Bão 20x Webhook Thanh toán Đồng thời bằng Khóa In-Flight & WAL", kw: "bài viết thanh toán fintech webhook idempotency wal", sub: "9 MIN • FINTECH", url: "writing/idempotent-webhook-wal/" },
    { group: "Articles", title: "RFC 4506 Binary Stellar XDR Verification & Cross-Chunk SSE DLP", viTitle: "Xác thực Mật mã Stellar XDR (RFC 4506) & Chống Rò rỉ Bí mật SSE", kw: "bài viết mật mã học bảo mật xdr sse dlp jpy", sub: "11 MIN • CRYPTO", url: "writing/soroban-xdr-and-sse-dlp/" },
    { group: "Pages", title: "Index — Flagship Engineering Hub", viTitle: "Trang chủ — Trung tâm Bằng chứng & Kiến trúc", kw: "trang chủ home index bằng chứng", sub: "/", url: "" },
    { group: "Pages", title: "Resume / CV — Printable Senior Engineer Sheet & PDF", viTitle: "Hồ sơ CV — Bản in A4 & Tải PDF Kỹ sư Senior", kw: "hồ sơ cv resume tuyển dụng pdf a4", sub: "/resume/", url: "resume/" },
    { group: "Pages", title: "Now — Current Focus & Availability", viTitle: "Hiện tại (/now) — Trọng tâm & Lịch nhận dự án", kw: "hiện tại đang làm gì trạng thái lịch", sub: "/now/", url: "now/" },
    { group: "Pages", title: "Writing — Series, Articles & RSS", viTitle: "Kho Bài viết — Chuỗi bài Kỹ thuật & RSS", kw: "bài viết blog rss series kiến trúc", sub: "/writing/", url: "writing/" },
    { group: "Pages", title: "Journal — Daily Log & Real 52-Week Heatmap (7,528)", viTitle: "Nhật ký — Biểu đồ Đóng góp 52 Tuần (7,528)", kw: "nhật ký đóng góp heatmap lịch sử github", sub: "/journal/", url: "journal/" },
    { group: "Pages", title: "Brand & Press Kit — Official KP Logos & Banners", viTitle: "Brand Kit — Hệ thống Logo KP & Banner Đa nền tảng", kw: "thương hiệu nhận diện logo banner màu sắc bio", sub: "/brand/", url: "brand/" },
    { group: "Pages", title: "Links — All-Platform Link-in-Bio Hub", viTitle: "Liên kết (/links) — Cổng Kết nối Đa nền tảng", kw: "liên kết mạng xã hội fiverr freelancer email", sub: "/links/", url: "links/" },
    { group: "Pages", title: "3D Arcade — Polyglot Core Defender 60-FPS", viTitle: "Game 3D — Polyglot Core Defender 60-FPS", kw: "game trò chơi 3d webgl arcade", sub: "/arcade/", url: "arcade/" },
    { group: "Contact & PDF", title: "Download Senior Engineer Resume (PDF)", viTitle: "Tải xuống Hồ sơ CV Kỹ sư Senior (PDF)", kw: "tải cv download pdf hồ sơ", sub: "PDF • A4", url: "assets/Khoa_Phan_Senior_Engineer_Resume.pdf" },
    { group: "Contact & PDF", title: "Email Khoa Phan Directly (khoap1220@gmail.com)", viTitle: "Gửi Email trực tiếp (khoap1220@gmail.com)", kw: "liên hệ email gửi thư hợp tác", sub: "MAILTO", url: "mailto:khoap1220@gmail.com", ext: true },
    { group: "Merged Upstream PRs", title: "Externalize-Labs/externalize #39 (Rust / Wasm / XDR)", viTitle: "Externalize-Labs/externalize #39 (Rust / Wasm / XDR — Đã Merge)", kw: "merged bằng chứng rust wasm stellar", sub: "MERGED", url: "https://github.com/Externalize-Labs/externalize/pull/39", ext: true },
    { group: "Merged Upstream PRs", title: "anza-xyz/cargo-build-sbf #116 (Rust Solana SBF Syscalls)", viTitle: "anza-xyz/cargo-build-sbf #116 (Trình biên dịch Solana SBF — Đã Merge)", kw: "merged bằng chứng solana rust compiler", sub: "MERGED", url: "https://github.com/anza-xyz/cargo-build-sbf/pull/116", ext: true },
    { group: "Merged Upstream PRs", title: "solana-foundation/program-examples #760 (PDA Authority Docs)", viTitle: "solana-foundation/program-examples #760 (Bảo mật PDA Rent-Payer — Đã Merge)", kw: "merged bằng chứng solana anchor bảo mật pda", sub: "MERGED", url: "https://github.com/solana-foundation/program-examples/pull/760", ext: true },
    { group: "Merged Upstream PRs", title: "Altacon-Labs/RevMarket #42, #56 & #57 (SQLite Checkpoints & Rate Limits)", viTitle: "Altacon-Labs/RevMarket #42, #56 & #57 (3 PR Backend & SQLite — Đã Merge)", kw: "merged bằng chứng revmarket sqlite rate limit wallet", sub: "3× MERGED", url: "https://github.com/Altacon-Labs/RevMarket/pull/42", ext: true },
    { group: "Merged Upstream PRs", title: "sorotrail/SoroBeacon #680 (Python OpenAPI Client)", viTitle: "sorotrail/SoroBeacon #680 (Python OpenAPI SDK — Đã Merge)", kw: "merged bằng chứng python openapi stellar", sub: "MERGED", url: "https://github.com/sorotrail/SoroBeacon/pull/680", ext: true },
    { group: "Merged Upstream PRs", title: "tldr-pages/tldr #24925 (64k+ Stars stellar-cli Spec)", viTitle: "tldr-pages/tldr #24925 (Đặc tả stellar-cli kho 64k+ sao — Đã Merge)", kw: "merged bằng chứng tldr cli stellar", sub: "MERGED", url: "https://github.com/tldr-pages/tldr/pull/24925", ext: true },
    { group: "Merged Upstream PRs", title: "stellar-stream #1436, stellar-app-os & Wayfare #860 (9× Merged)", viTitle: "stellar-stream #1436, stellar-app-os & Wayfare #860 (9 PR Đã Merge)", kw: "merged bằng chứng a11y typescript runbook", sub: "9× MERGED", url: "https://github.com/ritik4ever/stellar-stream/pull/1436", ext: true },
    { group: "Open PRs In Review", title: "aibtcdev/x402-api #150 (Cloudflare DO X402_RELAY RPC)", viTitle: "aibtcdev/x402-api #150 (Cloudflare DO X402_RELAY RPC)", kw: "open review cloudflare durable object sbtc", sub: "OPEN PR", url: "https://github.com/aibtcdev/x402-api/pull/150", ext: true },
    { group: "Open PRs In Review", title: "wraith-protocol/contracts #285 (Rust Nervos CKB Fuzz Corpus)", viTitle: "wraith-protocol/contracts #285 (Kiểm thử mờ đối kháng Nervos CKB)", kw: "open review rust ckb fuzzing contracts", sub: "OPEN PR", url: "https://github.com/wraith-protocol/contracts/pull/285", ext: true },
    { group: "MIT Repositories", title: "soroban-xdr-proof-kit (Rust / Wasm XDR + SHA-256)", viTitle: "soroban-xdr-proof-kit (Rust / Wasm XDR + SHA-256)", kw: "mit thư viện mật mã rust wasm", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/soroban-xdr-proof-kit", ext: true },
    { group: "MIT Repositories", title: "go-preflight-sql-guard (Go SQLite WAL & Circuit Breaker)", viTitle: "go-preflight-sql-guard (Go SQLite WAL & Ngắt mạch)", kw: "mit thư viện cơ sở dữ liệu golang sql", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/go-preflight-sql-guard", ext: true },
    { group: "MIT Repositories", title: "ts-idempotent-webhook-guard (TS WAL Lock & HMAC)", viTitle: "ts-idempotent-webhook-guard (Khóa Webhook WAL & HMAC)", kw: "mit thư viện thanh toán typescript node", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/ts-idempotent-webhook-guard", ext: true },
    { group: "MIT Repositories", title: "py-stream-and-billing-guard (Python SSE DLP & ISO-4217)", viTitle: "py-stream-and-billing-guard (Python SSE DLP & Tiền tệ ISO-4217)", kw: "mit thư viện python fastapi bảo mật", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/py-stream-and-billing-guard", ext: true },
    { group: "Articles", title: "Compliant Marketplace & CRM MCP Servers (2-Zone Airlock)", viTitle: "Kiến trúc MCP Sàn Giao dịch & CRM Tuân thủ (2-Zone Airlock)", kw: "bài viết mcp crm dlp ja4 oauth", sub: "8 MIN • MCP", url: "writing/compliant-marketplace-crm-mcp-architecture/" },
    { group: "Pages", title: "Services — Custom MCP, Python CLI Harnesses & Audits", viTitle: "Dịch vụ (/services) — Custom MCP, Python CLI & Kiểm toán", kw: "dịch vụ thuê bảng giá mcp cli audit", sub: "/services/", url: "services/" },
    { group: "Pages", title: "Privacy & Terms — Zero-Tracking Static & First-Party APIs", viTitle: "Quyền riêng tư (/privacy) — Lưu trữ Tĩnh & API Chính chủ", kw: "quyền riêng tư điều khoản privacy terms", sub: "/privacy/", url: "privacy/" }
  ];

  // Fallback snapshot of the public GitHub contribution calendar (data/stats.json is fresher) for @khoap1220-hue (queried 2026-11-23: 7,528 total across 42 active days)
  const REAL_GH_CONTRIBUTIONS = {
    "2026-02-23": 3, "2026-04-02": 2, "2026-06-15": 1, "2026-09-26": 10,
    "2026-10-12": 6, "2026-10-13": 2, "2026-10-14": 58, "2026-10-15": 1,
    "2026-10-16": 288, "2026-10-17": 52, "2026-10-21": 1, "2026-10-22": 1,
    "2026-10-25": 144, "2026-10-26": 408, "2026-10-27": 142, "2026-10-28": 90,
    "2026-10-29": 179, "2026-10-30": 62, "2026-10-31": 128, "2026-11-01": 270,
    "2026-11-02": 66, "2026-11-03": 32, "2026-11-04": 63, "2026-11-05": 144,
    "2026-11-06": 11, "2026-11-07": 10, "2026-11-08": 11, "2026-11-09": 10,
    "2026-11-10": 5, "2026-11-11": 12, "2026-11-12": 4, "2026-11-13": 4,
    "2026-11-14": 48, "2026-11-15": 167, "2026-11-16": 79, "2026-11-17": 84,
    "2026-11-18": 75, "2026-11-19": 293, "2026-11-20": 1014, "2026-11-21": 1894,
    "2026-11-22": 1558, "2026-11-23": 96
  };

  let currentLang = localStorage.getItem("kp_lang") || "en";
  let currentTheme = localStorage.getItem("kp_theme") || "dark";
  let refreshCmdkView = null;
  let liveStats = null;
  let liveStatsState = "loading";
  let terminalCtl = null;
  let heroFieldCtl = null;
  const rootEl = document.documentElement;
  const reduceMotionMQ = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

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
    el._timer = setTimeout(() => el.classList.remove("show"), 2300);
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
    try { localStorage.setItem("kp_theme", currentTheme); } catch (_) {}
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", currentTheme === "light" ? "#FCFBF7" : "#0B1014");
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", currentTheme === "dark" ? "Switch to warm editorial light mode" : "Switch to KP obsidian dark mode");
      const label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = currentTheme === "dark" ? "PAPER" : "DARK";
    });
  }

  function applyLang(lang) {
    currentLang = lang === "vi" ? "vi" : "en";
    document.documentElement.lang = currentLang;
    try { localStorage.setItem("kp_lang", currentLang); } catch (_) {}
    const dict = I18N[currentLang];
    document.querySelectorAll("[data-counting]").forEach((el) => { delete el.dataset.counting; });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-vi]").forEach((el) => {
      if (typeof el._origText !== "string") el._origText = el.textContent;
      el.textContent = currentLang === "vi" ? el.getAttribute("data-vi") : el._origText;
    });
    document.querySelectorAll("[data-vi-html]").forEach((el) => {
      if (typeof el._origHtml !== "string") el._origHtml = el.innerHTML;
      el.innerHTML = currentLang === "vi" ? el.getAttribute("data-vi-html") : el._origHtml;
    });
    document.querySelectorAll("[data-vi-placeholder]").forEach((el) => {
      if (typeof el._origPlaceholder !== "string") el._origPlaceholder = el.getAttribute("placeholder") || "";
      el.setAttribute("placeholder", currentLang === "vi" ? el.getAttribute("data-vi-placeholder") : el._origPlaceholder);
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = currentLang === "en" ? "VI" : "EN";
      btn.setAttribute("aria-label", currentLang === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English");
    });
    if (typeof refreshCmdkView === "function") refreshCmdkView();
    refreshLiveLabels();
    refreshProofCounts();
    if (terminalCtl) terminalCtl.renderStatic();
  }

  function syncBodyScrollLock() {
    const anyOpen = Boolean(document.querySelector(".modal-backdrop.open"));
    document.body.style.overflow = anyOpen ? "hidden" : "";
  }

  function trapModalTabKey(e, containerEl) {
    if (e.key !== "Tab" || !containerEl) return;
    const focusables = Array.from(
      containerEl.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => el.offsetParent !== null || el === document.activeElement);
    if (!focusables.length) {
      e.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first || !containerEl.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last || !containerEl.contains(active)) {
      e.preventDefault();
      first.focus();
    }
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
          <input id="kp-cmdk-input" class="cmdk-input" type="search" aria-label="Search articles, merged PRs, MIT guardkits, and pages" placeholder="Search articles, merged PRs, MIT guardkits, CV, pages..." data-vi-placeholder="Tìm bài viết, PR đã merge, kho MIT, hồ sơ CV, các trang..." autocomplete="off" />
          <button type="button" id="kp-cmdk-close" class="icon-btn" style="min-height:44px; min-width:44px; font-size:0.78rem;" aria-label="Close search">ESC</button>
        </div>
        <div id="kp-cmdk-results" class="cmdk-results" role="listbox"></div>
        <div class="cmdk-foot">
          <span data-vi="↑↓ Di chuyển  •  Enter Mở">↑↓ Navigate &nbsp;•&nbsp; Enter Open</span>
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
    let lastTriggerEl = null;

    function resolveUrl(item) {
      if (item.url.startsWith("mailto:") || item.ext) return item.url;
      return ROOT_PREFIX + item.url;
    }

    function render(query) {
      const q = (query || "").trim().toLowerCase();
      flatFiltered = CMDK_ITEMS.filter((it) => {
        if (!q) return true;
        const hay = [
          it.title,
          it.viTitle || "",
          it.group,
          CMDK_GROUP_VI[it.group] || "",
          it.sub,
          it.kw || ""
        ].join(" ").toLowerCase();
        return hay.includes(q);
      });
      activeIdx = 0;
      resultsEl.innerHTML = "";
      if (!flatFiltered.length) {
        const emptyEl = document.createElement("div");
        emptyEl.style.cssText = "padding:20px; text-align:center; color:var(--text-muted); font-family:var(--font-mono); font-size:0.84rem;";
        const safeQ = q.slice(0, 64);
        emptyEl.textContent = currentLang === "vi"
          ? `Không tìm thấy mục nào khớp với "${safeQ}"`
          : `No matching entries for "${safeQ}"`;
        resultsEl.appendChild(emptyEl);
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
        gHead.textContent = currentLang === "vi" ? (CMDK_GROUP_VI[gName] || gName) : gName;
        resultsEl.appendChild(gHead);
        groups[gName].forEach(({ item, idx }) => {
          const a = document.createElement("a");
          a.className = "cmdk-item" + (idx === activeIdx ? " selected" : "");
          a.href = resolveUrl(item);
          a.setAttribute("role", "option");
          a.setAttribute("aria-selected", String(idx === activeIdx));
          a.setAttribute("data-cmdk-idx", String(idx));
          if (item.ext && !item.url.startsWith("mailto:")) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }
          const tSpan = document.createElement("span");
          tSpan.className = "cmdk-item-title";
          tSpan.textContent = currentLang === "vi" && item.viTitle ? item.viTitle : item.title;
          const sSpan = document.createElement("span");
          sSpan.className = "cmdk-item-sub";
          sSpan.textContent = item.sub;
          a.appendChild(tSpan);
          a.appendChild(sSpan);
          a.addEventListener("click", () => close(false));
          resultsEl.appendChild(a);
        });
      });
    }

    refreshCmdkView = () => {
      if (modal.classList.contains("open")) render(input.value);
    };

    function highlight(newIdx) {
      activeIdx = newIdx;
      resultsEl.querySelectorAll(".cmdk-item").forEach((el) => {
        const match = Number(el.getAttribute("data-cmdk-idx")) === activeIdx;
        el.classList.toggle("selected", match);
        el.setAttribute("aria-selected", String(match));
        if (match) el.scrollIntoView({ block: "nearest" });
      });
    }

    function open() {
      const briefEl = document.getElementById("brief-modal");
      if (briefEl && briefEl.classList.contains("open")) {
        briefEl.classList.remove("open");
        briefEl.setAttribute("aria-hidden", "true");
      }
      lastTriggerEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      syncBodyScrollLock();
      input.value = "";
      render("");
      setTimeout(() => input.focus(), 20);
    }

    function close(restoreFocus = true) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      syncBodyScrollLock();
      if (restoreFocus && lastTriggerEl && typeof lastTriggerEl.focus === "function") {
        lastTriggerEl.focus();
      }
    }

    document.querySelectorAll("[data-open-cmdk]").forEach((btn) => btn.addEventListener("click", open));
    closeBtn.addEventListener("click", () => close(true));
    modal.addEventListener("click", (e) => { if (e.target === modal) close(true); });
    input.addEventListener("input", () => render(input.value));

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        modal.classList.contains("open") ? close(true) : open();
        return;
      }
      if (!modal.classList.contains("open")) return;
      if (e.key === "Tab") {
        trapModalTabKey(e, modal);
        return;
      }
      if (e.key === "Escape") { close(true); return; }
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
        close(false);
        if (target.ext && !href.startsWith("mailto:")) window.open(href, "_blank", "noopener,noreferrer");
        else window.location.href = href;
      }
    });
  }

  function heatLevel(count) {
    return count === 0 ? 0 : count < 15 ? 1 : count < 80 ? 2 : 3;
  }

  function renderHeatmap(days, endIso, animate) {
    const grid = document.getElementById("kp-heatmap-grid");
    if (!grid) return;
    const keys = Object.keys(days).sort();
    const endKey = endIso || keys[keys.length - 1] || new Date().toISOString().slice(0, 10);
    const endDate = new Date(endKey + "T00:00:00Z");
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 364; i++) {
      const cell = document.createElement("span");
      const d = new Date(endDate.getTime() - (363 - i) * 86400000);
      const iso = d.toISOString().slice(0, 10);
      const count = days[iso] || 0;
      cell.className = "heat-cell";
      cell.setAttribute("data-level", String(heatLevel(count)));
      cell.setAttribute("title", `${iso}: ${count} GitHub contribution${count === 1 ? "" : "s"}`);
      cell.style.setProperty("--col", String(Math.floor(i / 7)));
      frag.appendChild(cell);
    }
    grid.textContent = "";
    grid.appendChild(frag);
    if (animate && motionAllowed()) {
      grid.classList.add("is-animating");
      setTimeout(() => grid.classList.remove("is-animating"), 1200);
    }
  }

  function initHeatmap() {
    renderHeatmap(REAL_GH_CONTRIBUTIONS, null, false);
  }

  function initReadingProgress() {
    const article = document.querySelector("article.prose, [data-reading-progress]");
    if (!article) return;
    let bar = document.getElementById("kp-read-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "kp-read-progress";
      bar.className = "read-progress-bar";
      bar.setAttribute("aria-hidden", "true");
      document.body.prepend(bar);
    }
    const update = () => {
      const docEl = document.documentElement;
      const max = Math.max(1, docEl.scrollHeight - docEl.clientHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      bar.style.width = pct.toFixed(1) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  function initCodeCopyButtons() {
    document.querySelectorAll("[data-copy-code]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const block = btn.closest(".code-block");
        const pre = block ? block.querySelector("pre") : null;
        if (pre) copyText(pre.textContent || "", currentLang === "vi" ? "Đã sao chép đoạn mã!" : "Code snippet copied!");
      });
    });
    document.querySelectorAll("[data-copy-url]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const canonical = document.querySelector("link[rel='canonical']");
        const url = canonical ? canonical.href : window.location.href;
        copyText(url, currentLang === "vi" ? "Đã sao chép liên kết bài viết!" : "Article link copied!");
      });
    });
    document.querySelectorAll("[data-print-resume]").forEach((btn) => {
      btn.addEventListener("click", () => window.print());
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

  function ensureBriefModalExists() {
    let backdrop = document.getElementById("brief-modal");
    if (backdrop) return backdrop;
    backdrop = document.createElement("div");
    backdrop.id = "brief-modal";
    backdrop.className = "modal-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("aria-labelledby", "brief-modal-title");
    backdrop.setAttribute("aria-hidden", "true");
    backdrop.innerHTML = `
      <div class="modal-panel">
        <div class="modal-head">
          <div>
            <h3 id="brief-modal-title" class="card-title" style="font-size:1.3rem;" data-i18n="modal_title">Build &amp; Send a Project Brief</h3>
            <p style="font-size:0.86rem; color:var(--text-muted); margin-top:4px;" data-i18n="modal_sub">Configure your scope below, then send directly via Email or copy in one click.</p>
          </div>
          <button type="button" id="brief-close" class="icon-btn" aria-label="Close modal">✕</button>
        </div>
        <div class="form-field">
          <label for="brief-track" data-i18n="lbl_track">Engagement Track</label>
          <select id="brief-track" class="form-select">
            <option value="Custom MCP & AI Agent Suite ($5k-$15k)" data-vi="Kiến trúc Custom MCP & AI Agent ($5k–$15k / Sprint 14 ngày)">Custom MCP &amp; AI Agent Suite ($5k–$15k / 14-Day Sprint)</option>
            <option value="Protocol Grant / Open-Source Delivery" data-vi="Protocol Grant / Hệ sinh thái Web3 (Rust, Go, TS, Python)">Protocol Grant / Ecosystem Wave (Rust, Go, TS, Python)</option>
            <option value="Defensive Security & FinTech Audit" data-vi="Kiểm toán Bảo mật Phòng vệ & Giao dịch FinTech">Defensive Security &amp; FinTech Idempotency Audit</option>
            <option value="3D Web / Automation / Brand Kit" data-vi="Web 3D Tương tác (Three.js/VRM), Tự động hóa hoặc Brand Kit">Interactive 3D Web (Three.js/VRM), Automation or Brand Kit</option>
            <option value="Senior Systems / Full-Stack Contract" data-vi="Hợp đồng Kỹ sư Hệ thống / Full-Stack Quốc tế">Senior Systems / Full-Stack Remote Contract</option>
          </select>
        </div>
        <div class="form-field">
          <label for="brief-stack" data-i18n="lbl_stack">Primary Stack / Domain</label>
          <input id="brief-stack" class="form-input" type="text" placeholder="e.g., Rust / Soroban, Custom MCP for Claude & Cursor, Stripe Webhook..." data-vi-placeholder="VD: Rust / Soroban, Custom MCP Server, Chống trùng lặp Webhook..." />
        </div>
        <div class="form-field">
          <label for="brief-notes" data-i18n="lbl_notes">Scope &amp; Goals</label>
          <textarea id="brief-notes" class="form-textarea" placeholder="Target timeline, repository or architecture constraints, key deliverables..." data-vi-placeholder="Tiến độ mong muốn, kho mã nguồn hoặc ràng buộc kỹ thuật, đầu mục bàn giao..."></textarea>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:space-between; align-items:center; margin-top:16px;">
          <span style="font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted);">${CONTACT_EMAIL}</span>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <a class="btn btn-secondary btn-sm" href="https://www.fiverr.com/khoaphan95" target="_blank" rel="noopener noreferrer">Fiverr ↗</a>
            <button type="button" id="brief-copy" class="btn btn-secondary btn-sm" data-i18n="btn_copy_brief">Copy Brief</button>
            <button type="button" id="brief-email" class="btn btn-primary btn-sm" data-i18n="btn_send_email">Send via Email ↗</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    return backdrop;
  }

  function initModal() {
    const backdrop = ensureBriefModalExists();
    const closeBtn = document.getElementById("brief-close");
    const copyBtn = document.getElementById("brief-copy");
    const emailBtn = document.getElementById("brief-email");
    const trackEl = document.getElementById("brief-track");
    const stackEl = document.getElementById("brief-stack");
    const notesEl = document.getElementById("brief-notes");
    let lastBriefTrigger = null;

    const buildBriefPayload = () => {
      const track = trackEl ? trackEl.value : "Custom MCP & AI Agent Suite ($5k-$15k)";
      const stack = stackEl && stackEl.value.trim() ? stackEl.value.trim() : "Rust / Go / TypeScript / Python";
      const notes =
        notesEl && notesEl.value.trim()
          ? notesEl.value.trim()
          : "(Please outline core goals, target deadline, and repository/platform context.)";
      const text = [
        `PROJECT BRIEF FOR KHOA PHAN (https://khoaphan.dev)`,
        `Track: ${track}`,
        `Stack / Domain: ${stack}`,
        `Scope & Goals:`,
        notes
      ].join("\n");
      return { track, stack, notes, text };
    };

    const openModal = (presetTrack, triggerEl) => {
      const cmdkEl = document.getElementById("kp-cmdk-modal");
      if (cmdkEl && cmdkEl.classList.contains("open")) {
        cmdkEl.classList.remove("open");
        cmdkEl.setAttribute("aria-hidden", "true");
      }
      lastBriefTrigger = triggerEl instanceof HTMLElement ? triggerEl : null;
      if (presetTrack && trackEl) {
        Array.from(trackEl.options).forEach((opt) => {
          if (opt.value === presetTrack) trackEl.value = presetTrack;
        });
      }
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden", "false");
      syncBodyScrollLock();
      if (stackEl) setTimeout(() => stackEl.focus(), 20);
    };
    const closeModal = () => {
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden", "true");
      syncBodyScrollLock();
      if (lastBriefTrigger && typeof lastBriefTrigger.focus === "function") {
        lastBriefTrigger.focus();
      }
    };

    document.querySelectorAll("[data-open-brief]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.getAttribute("data-open-brief"), btn));
    });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (!backdrop.classList.contains("open")) return;
      if (e.key === "Tab") {
        trapModalTabKey(e, backdrop);
        return;
      }
      if (e.key === "Escape") closeModal();
    });

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const { text } = buildBriefPayload();
        copyText(text, currentLang === "vi" ? "Đã sao chép bản Brief dự án!" : "Project brief copied to clipboard!");
      });
    }
    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        const { track, text } = buildBriefPayload();
        const subject = encodeURIComponent(`[khoaphan.dev] ${track}`);
        const body = encodeURIComponent(text);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
    drawer.querySelectorAll("a, button").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------
     v2.5 Motion layer. Every effect checks motionAllowed(): the OS
     "reduce motion" preference or the footer toggle turns it all off.
     ------------------------------------------------------------------ */
  function motionAllowed() {
    let pref = null;
    try { pref = localStorage.getItem("kp_motion"); } catch (_) {}
    return pref !== "off" && !(reduceMotionMQ && reduceMotionMQ.matches);
  }

  function applyMotionClass() {
    const ok = motionAllowed();
    rootEl.classList.toggle("motion-ok", ok);
    rootEl.classList.toggle("motion-reduced", !ok);
  }

  function initReveal() {
    if (!motionAllowed() || !("IntersectionObserver" in window)) return;
    const selector = [
      ".section-header", ".eyebrow-bar", ".card", ".series-card", ".lead-article", ".article-row",
      ".journal-row", ".platform-card", ".spotlight-card", ".terminal", ".live-copy", ".author-card",
      ".article-nav-card", ".heatmap-panel", ".resume-sheet", ".link-item", ".swatch"
    ].join(", ");
    const viewportH = window.innerHeight || 800;
    const finish = (el) => {
      el.classList.remove("reveal", "is-in");
      el.style.removeProperty("--reveal-delay");
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        el.classList.add("is-in");
        el.addEventListener("transitionend", function onEnd(ev) {
          if (ev.target !== el) return;
          el.removeEventListener("transitionend", onEnd);
          finish(el);
        });
        setTimeout(() => finish(el), 1600);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    document.querySelectorAll(selector).forEach((el) => {
      if (el.closest(".modal-backdrop") || el.closest(".site-header")) return;
      const rect = el.getBoundingClientRect();
      // Content already on screen at load is never hidden (no flash, no LCP penalty).
      if (rect.top < viewportH * 0.92 && rect.bottom > 0) return;
      const siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty("--reveal-delay", `${(siblings % 4) * 70}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  function runCountUp(el) {
    const parse = (txt) => /^(\d[\d,]*)([\s\S]*)$/.exec(txt.trim());
    const first = parse(el.textContent || "");
    if (!first) return;
    const target = parseInt(first[1].replace(/,/g, ""), 10);
    if (!(target > 2)) return;
    const startedAt = performance.now();
    const duration = 1100;
    el.dataset.counting = "1";
    const step = (now) => {
      if (el.dataset.counting !== "1") return;
      const p = Math.min(1, (now - startedAt) / duration);
      const value = Math.round(target * (1 - Math.pow(1 - p, 3)));
      const current = parse(el.textContent || "");
      const tail = current ? current[2] : first[2];
      el.textContent = value.toLocaleString("en-US") + tail;
      if (p < 1) requestAnimationFrame(step);
      else delete el.dataset.counting;
    };
    requestAnimationFrame(step);
  }

  function initCountUp() {
    if (!motionAllowed() || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        runCountUp(entry.target);
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".metric-val").forEach((el) => io.observe(el));
  }

  function initSpotlight() {
    if (!motionAllowed() || !window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const selector = ".card, .series-card, .platform-card, .metric-card, .link-item, .article-nav-card";
    document.addEventListener("pointermove", (e) => {
      const el = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (!el || !rootEl.classList.contains("motion-ok")) return;
      el.classList.add("spot-ready");
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
    document.addEventListener("pointerout", (e) => {
      const el = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (el && !el.contains(e.relatedTarget)) {
        el.style.setProperty("--mx", "-999px");
        el.style.setProperty("--my", "-999px");
      }
    }, { passive: true });
  }

  function initHeroField() {
    const canvas = document.querySelector("[data-hero-field]");
    if (!canvas || !canvas.getContext) return;
    const hero = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = 1;
    let height = 1;
    let points = [];
    let raf = 0;
    let inView = true;
    let rgb = [51, 246, 246];
    let light = false;
    const pointer = { x: -9999, y: -9999, active: false };
    const LINK = 128;
    const LINK2 = LINK * LINK;
    const PULL = 170;

    const readColor = () => {
      const hex = getComputedStyle(rootEl).getPropertyValue("--accent").trim();
      const m = /^#([0-9a-f]{6})$/i.exec(hex);
      if (m) {
        const n = parseInt(m[1], 16);
        rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      }
      light = rootEl.getAttribute("data-theme") === "light";
    };
    const spawn = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24
    });
    const resize = () => {
      const rect = hero.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(Math.min(90, Math.max(26, (width * height) / 16000)));
      while (points.length < target) points.push(spawn());
      points.length = target;
    };
    const frame = () => {
      raf = 0;
      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = rgb;
      const lineAlpha = light ? 0.18 : 0.14;
      const dotAlpha = light ? 0.42 : 0.46;
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20; else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20; else if (p.y > height + 20) p.y = -20;
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < PULL * PULL && d2 > 1) {
            p.x += dx * 0.0009;
            p.y += dy * 0.0009;
          }
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const c = points[j];
          const dx = a.x - c.x;
          const dy = a.y - c.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK2) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${(lineAlpha * (1 - d2 / LINK2)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
        if (pointer.active) {
          const dx = a.x - pointer.x;
          const dy = a.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < PULL * PULL) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${(0.34 * (1 - d2 / (PULL * PULL))).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = `rgba(${r},${g},${b},${dotAlpha})`;
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      schedule();
    };
    const canRun = () => inView && !document.hidden && motionAllowed();
    function schedule() {
      if (!raf && canRun()) raf = requestAnimationFrame(frame);
    }
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      ctx.clearRect(0, 0, width, height);
    };

    readColor();
    resize();
    canvas.classList.add("is-ready");
    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(hero);
    else window.addEventListener("resize", resize, { passive: true });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView) schedule(); else stop();
      }).observe(hero);
    }
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : schedule()));
    new MutationObserver(readColor).observe(rootEl, { attributes: true, attributeFilter: ["data-theme"] });
    hero.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const rect = hero.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }, { passive: true });
    hero.addEventListener("pointerleave", () => { pointer.active = false; }, { passive: true });
    schedule();
    heroFieldCtl = { start: schedule, stop };
  }

  /* ------------------------------------------------------------------
     v2.5 Live data layer: data/stats.json is regenerated daily by the
     sync-stats GitHub Action (tools/sync_stats.py).
     ------------------------------------------------------------------ */
  function loadLiveStats() {
    if (!window.fetch) return Promise.resolve(null);
    return fetch(`${ROOT_PREFIX}data/stats.json`, { cache: "no-cache" })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
  }

  function relativeTime(iso) {
    const diffSec = (Date.parse(iso) - Date.now()) / 1000;
    if (!isFinite(diffSec)) return "";
    const lang = currentLang === "vi" ? "vi" : "en";
    const abs = Math.abs(diffSec);
    const units = [["day", 86400], ["hour", 3600], ["minute", 60]];
    if (window.Intl && Intl.RelativeTimeFormat) {
      const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
      for (const [unit, secs] of units) {
        if (abs >= secs) return rtf.format(Math.round(diffSec / secs), unit);
      }
      return rtf.format(0, "minute");
    }
    return new Date(iso).toISOString().slice(0, 16).replace("T", " ") + " UTC";
  }

  function liveSummary() {
    const vi = currentLang === "vi";
    if (liveStatsState === "loading") return vi ? "Đang tải dữ liệu đồng bộ…" : "Loading sync data…";
    if (!liveStats) {
      return vi ? "Không tải được dữ liệu trực tiếp — đang hiển thị số liệu lần đồng bộ gần nhất" : "Live data unavailable — showing the last synced numbers";
    }
    const when = relativeTime(liveStats.generated_at);
    return vi
      ? `Đồng bộ từ GitHub ${when} · ${liveStats.merged_count} PR đã merge`
      : `Synced from GitHub ${when} · ${liveStats.merged_count} merged PRs`;
  }

  function refreshLiveLabels() {
    const text = liveSummary();
    document.querySelectorAll("[data-live-synced]").forEach((el) => {
      el.textContent = text;
      if (liveStats) el.setAttribute("title", liveStats.generated_at);
    });
    const vi = currentLang === "vi";
    document.querySelectorAll("[data-live-footer]").forEach((el) => {
      el.textContent = liveStats ? (vi ? `Đồng bộ ${relativeTime(liveStats.generated_at)}` : `Synced ${relativeTime(liveStats.generated_at)}`) : (vi ? "GitHub sync" : "GitHub sync");
    });
    document.querySelectorAll("[data-motion-toggle]").forEach((btn) => {
      const on = motionAllowed();
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = vi ? `Chuyển động: ${on ? "Bật" : "Tắt"}` : `Motion: ${on ? "On" : "Off"}`;
    });
  }

  function setBilingualText(el, en, vi) {
    el._origText = en;
    el.setAttribute("data-vi", vi);
    el.textContent = currentLang === "vi" ? vi : en;
  }

  function refreshProofCounts() {
    const btn = document.querySelector('[data-filter="all"]');
    if (!btn) return;
    const n = document.querySelectorAll("[data-proof-card]:not([data-retired='true'])").length;
    btn.textContent = btn.textContent.replace(/\(\d+\)/, `(${n})`);
  }

  function hydrateTrackedCards(stats) {
    const tracked = (stats && stats.tracked) || {};
    document.querySelectorAll("[data-pr]").forEach((card) => {
      const ref = card.getAttribute("data-pr");
      const st = tracked[ref];
      if (!st) return;
      const cats = (card.getAttribute("data-category") || "").split(" ").filter(Boolean);
      if (st.state === "merged" && cats.includes("open")) {
        card.setAttribute("data-category", cats.filter((c) => c !== "open").join(" "));
        const date = (st.merged_at || "").slice(0, 10);
        const [y, m, d] = date.split("-");
        const num = ref.split("#")[1];
        const badge = card.querySelector(".tag-progress");
        if (badge) {
          badge.classList.remove("tag-progress");
          badge.classList.add("tag-verified");
          setBilingualText(badge, "MERGED", "ĐÃ MERGE");
        }
        const sub = card.querySelector(".card-subtitle");
        if (sub) setBilingualText(sub, `PR #${num} • Merged ${date}`, `PR #${num} • Đã Merge ${d}/${m}/${y}`);
        const footLabel = card.querySelector(".card-footer > span");
        if (footLabel) setBilingualText(footLabel, "Upstream Merge", "PR Đã Merge");
      } else if (st.state === "closed") {
        card.setAttribute("data-retired", "true");
      }
    });
    refreshProofCounts();
  }

  function buildTerminalLines(stats) {
    const vi = currentLang === "vi";
    const lines = [];
    const cmd = (text) => lines.push({ cmd: true, parts: [["t-prompt", "$ "], ["", text]] });
    const out = (...parts) => lines.push({ cmd: false, parts });
    if (liveStatsState === "loading") {
      cmd("fetch /data/stats.json");
      out(["t-muted", vi ? "  … đang tải" : "  … loading"]);
      return lines;
    }
    if (!stats) {
      cmd("fetch /data/stats.json");
      out(["t-muted", vi ? "  ✕ không tải được dữ liệu trực tiếp — xem các con số đã đồng bộ trên trang" : "  ✕ live data unavailable — the page shows the last synced numbers"]);
      return lines;
    }
    const merged = stats.merged_prs || [];
    const orgs = new Set(merged.map((p) => p.repo.split("/")[0].toLowerCase())).size;
    cmd("gh search prs --author=khoap1220-hue --merged");
    out(["t-muted", vi ? "  # đã loại repo của chính mình & danh sách onboarding" : "  # self-owned repos & onboarding lists excluded"]);
    out(["t-ok", "  ✓ "], ["t-strong", String(stats.merged_count)], ["", vi ? " PR upstream đã merge · " : " merged upstream PRs · "], ["t-strong", String(orgs)], ["", vi ? " tổ chức" : " orgs"]);
    merged.slice(0, 3).forEach((p) => {
      out(["t-muted", "    ↳ "], ["", `${p.repo}#${p.number}`], ["t-muted", `  ${(p.merged_at || "").slice(0, 10)}`]);
    });
    Object.entries(stats.tracked || {}).forEach(([ref, st]) => {
      cmd(`gh pr view ${ref} --json state`);
      if (st.state === "merged") out(["t-ok", `  ✓ MERGED · ${(st.merged_at || "").slice(0, 10)}`]);
      else if (st.state === "open") out(["t-open", vi ? "  ● OPEN · đang chờ review" : "  ● OPEN · in review"]);
      else out(["t-muted", `  ✕ ${String(st.state).toUpperCase()}`]);
    });
    const c = stats.contributions || {};
    cmd("curl -s github.com/users/khoap1220-hue/contributions");
    out(
      ["t-ok", "  ✓ "], ["t-strong", Number(c.total || 0).toLocaleString("en-US")],
      ["", vi ? " đóng góp · " : " contributions · "], ["t-strong", String(c.active_days || 0)],
      ["", vi ? " ngày hoạt động · 52 tuần" : " active days · last 52 weeks"]
    );
    cmd("jq -r .generated_at data/stats.json");
    out(["", `  ${stats.generated_at}`], ["t-muted", `  # ${relativeTime(stats.generated_at)}`]);
    return lines;
  }

  function initTerminal() {
    const body = document.querySelector("[data-terminal]");
    if (!body) return;
    const replayBtn = document.querySelector("[data-terminal-replay]");
    let runId = 0;

    const appendParts = (lineEl, parts) => {
      parts.forEach(([cls, text]) => {
        const span = document.createElement("span");
        if (cls) span.className = cls;
        span.textContent = text;
        lineEl.appendChild(span);
      });
    };
    const caret = () => {
      const c = document.createElement("span");
      c.className = "t-caret";
      c.setAttribute("aria-hidden", "true");
      return c;
    };
    const renderStatic = () => {
      runId++;
      body.textContent = "";
      buildTerminalLines(liveStats).forEach((line) => {
        const lineEl = document.createElement("div");
        appendParts(lineEl, line.parts);
        body.appendChild(lineEl);
      });
      const tail = document.createElement("div");
      appendParts(tail, [["t-prompt", "$ "]]);
      tail.appendChild(caret());
      body.appendChild(tail);
    };
    const play = () => {
      if (!motionAllowed()) { renderStatic(); return; }
      const myRun = ++runId;
      const lines = buildTerminalLines(liveStats);
      body.textContent = "";
      const cursor = caret();
      let li = 0;
      const nextLine = () => {
        if (myRun !== runId) return;
        if (li >= lines.length) {
          const tail = document.createElement("div");
          appendParts(tail, [["t-prompt", "$ "]]);
          tail.appendChild(cursor);
          body.appendChild(tail);
          return;
        }
        const line = lines[li++];
        const lineEl = document.createElement("div");
        body.appendChild(lineEl);
        if (!line.cmd) {
          appendParts(lineEl, line.parts);
          setTimeout(nextLine, 90);
          return;
        }
        appendParts(lineEl, [line.parts[0]]);
        const textSpan = document.createElement("span");
        lineEl.appendChild(textSpan);
        lineEl.appendChild(cursor);
        const full = line.parts[1][1];
        let ci = 0;
        const typeChar = () => {
          if (myRun !== runId) return;
          ci = Math.min(full.length, ci + 2);
          textSpan.textContent = full.slice(0, ci);
          if (ci < full.length) setTimeout(typeChar, 22);
          else setTimeout(nextLine, 260);
        };
        typeChar();
      };
      nextLine();
    };

    terminalCtl = { renderStatic, play, onData: () => {} };
    if (replayBtn) replayBtn.addEventListener("click", play);
    renderStatic();
    if (motionAllowed() && "IntersectionObserver" in window) {
      let wantPlay = false;
      let played = false;
      const tryPlay = () => {
        if (!wantPlay || played || liveStatsState === "loading") return false;
        played = true;
        play();
        return true;
      };
      terminalCtl.onData = () => { if (!tryPlay()) renderStatic(); };
      const io = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        wantPlay = true;
        tryPlay();
      }, { threshold: 0.35 });
      io.observe(body);
    } else {
      terminalCtl.onData = renderStatic;
    }
  }

  function initFooterLive() {
    const host = document.querySelector(".footer-pills") || document.querySelector(".footer-links");
    if (!host || host.querySelector("[data-motion-toggle]")) return;
    const pill = document.createElement("span");
    pill.className = "footer-pill live-pill";
    const dot = document.createElement("span");
    dot.className = "live-dot";
    dot.setAttribute("aria-hidden", "true");
    const label = document.createElement("span");
    label.setAttribute("data-live-footer", "");
    pill.append(dot, label);
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "footer-pill motion-toggle";
    toggle.setAttribute("data-motion-toggle", "");
    toggle.addEventListener("click", () => {
      try { localStorage.setItem("kp_motion", motionAllowed() ? "off" : "on"); } catch (_) {}
      applyMotionClass();
      if (motionAllowed()) {
        if (heroFieldCtl) heroFieldCtl.start();
      } else {
        if (heroFieldCtl) heroFieldCtl.stop();
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
        if (terminalCtl) terminalCtl.renderStatic();
      }
      refreshLiveLabels();
    });
    host.append(pill, toggle);
  }

  function bootFlagshipRuntime() {
    applyMotionClass();
    if (reduceMotionMQ && reduceMotionMQ.addEventListener) {
      reduceMotionMQ.addEventListener("change", () => { applyMotionClass(); refreshLiveLabels(); });
    }
    initCommandPalette();
    initModal();
    applyTheme(currentTheme);
    initFooterLive();
    applyLang(currentLang);
    initHeatmap();
    initReadingProgress();
    initCodeCopyButtons();
    initFilters();
    initMobileMenu();
    initReveal();
    initCountUp();
    initSpotlight();
    initHeroField();
    initTerminal();
    loadLiveStats().then((stats) => {
      liveStats = stats && typeof stats.merged_count === "number" ? stats : null;
      liveStatsState = "done";
      if (liveStats) {
        hydrateTrackedCards(liveStats);
        const contrib = liveStats.contributions;
        if (contrib && contrib.days) renderHeatmap(contrib.days, contrib.end, true);
      }
      refreshLiveLabels();
      if (terminalCtl) terminalCtl.onData();
    });

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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootFlagshipRuntime);
  } else {
    bootFlagshipRuntime();
  }
})();

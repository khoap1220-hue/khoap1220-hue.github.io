/* Khoa Phan (khoaphan.dev) — v2.1 Truth-Hardened Runtime: Full EN/VI, Theme, Cmd+K Search, Real GitHub Heatmap & Code Copy */
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
      hero_status: "GPG-SIGNED GUARDKITS • VERIFIED PROOF",
      hero_h1_html:
        "Building on <em>distributed systems</em>, <em>cryptography</em>, and <em>custom MCP</em> — verified in public code.",
      hero_lead:
        "Articles, engineering logs, and public proof-of-work across Rust, Go, TypeScript, and Python — backed by 13 merged upstream pull requests, 6 MIT guardkits, 2 live web platforms, and resilient Custom MCP infrastructure.",
      cta_proof: "Inspect Verified Proof",
      cta_writing: "Read Engineering Notes",
      cta_arcade: "3D Arcade",
      cta_copy_cv: "Copy ATS Resume",
      portrait_role: "Systems & AI Architect",
      portrait_loc: "Vietnam (UTC+7 • Global Remote)",
      m1_val: "13 Merged",
      m1_lbl: "Upstream Pull Requests",
      m2_val: "6 MIT",
      m2_lbl: "Open-Source Guardkits",
      m3_val: "2 Live",
      m3_lbl: "Platforms (VRM3D & UploadHTML)",
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
      j1_note:
        "Shipped khoaphan.dev Hybrid Flagship v2.1 with official KP vector system, warm editorial paper mode, ⌘K command palette, RSS feed, and live-verified GitHub contribution heatmap.",
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
      f_go: "Go & Python",
      f_ts: "TypeScript",
      f_open: "Open In Review",
      sec_kits_kicker: "02 // OPEN-SOURCE INFRASTRUCTURE",
      sec_kits_h2: "6 Free MIT Open-Source Repositories",
      sec_kits_desc:
        "Zero-bloat engineering guardkits and research benchmarks — all 6 carrying verified MIT licenses on GitHub, with GPG-signed commits on all 4 core guardkits.",
      sec_prod_kicker: "03 // PROPRIETARY PLATFORMS & INTERACTIVE CRAFT",
      sec_prod_h2: "Live Platforms, MCP Suites & 3D Web",
      sec_prod_desc:
        "Beyond upstream protocol contributions, I operate two live web platforms (vrm3d.com and uploadhtml.com) and architect kernel-hardened Custom MCP suites.",
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
      links_sub: "Polyglot Systems, Web3 & Custom MCP Architect • GPG-Signed Guardkits",
      brand_kicker: "PRESS & VISUAL IDENTITY SYSTEM",
      brand_h1: "Official Brand Kit & Multi-Platform Banners",
      brand_desc:
        "Download official KP SVG/PNG logos, exact-pixel social banners for LinkedIn, X, YouTube, Facebook, GitHub, and OpenGraph, or copy design tokens and verified bios in one click.",
      now_kicker: "STATUS SNAPSHOT • UPDATED NOV 19, 2026",
      now_h1: "What I'm building & auditing now",
      now_lead:
        "A living /now page summarizing my current engineering priorities, active open-source tracks, and remote availability from Vietnam (UTC+7).",
      writing_kicker: "SERIES & TECHNICAL WRITING",
      writing_h1: "Engineering Notes & Architecture Series",
      writing_lead:
        "First-principles technical articles written in English from merged PRs, adversarial test suites, and production systems. Subscribe via /rss.xml.",
      journal_kicker: "DAILY ENGINEERING LOG (GITHUB GRAPHQL VERIFIED)",
      journal_h1: "Journal & 52-Week Contribution Heatmap",
      journal_lead:
        "Chronological log of upstream merges, guardkit releases, and active engineering milestones synced from @khoap1220-hue's real GitHub contribution calendar (2,790 contributions across 37 active days)."
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
      hero_status: "GUARDKITS KÝ SỐ GPG • BẰNG CHỨNG MỞ",
      hero_h1_html:
        "Xây dựng <em>hệ thống phân tán</em>, <em>mật mã học</em> và <em>Custom MCP</em> — kiểm chứng trên mã nguồn mở.",
      hero_lead:
        "Bài viết chuyên sâu, nhật ký kỹ sư và bằng chứng mã nguồn công khai trên Rust, Go, TypeScript và Python — gồm 13 PR đã merge tại các dự án quốc tế, 6 kho mã nguồn MIT, 2 nền tảng web đang vận hành và hạ tầng Custom MCP tự phục hồi dưới 210ms.",
      cta_proof: "Xem Bằng chứng Thực chiến",
      cta_writing: "Đọc Bài Kỹ thuật",
      cta_arcade: "Game 3D",
      cta_copy_cv: "Chép CV Chuẩn ATS",
      portrait_role: "Kiến trúc sư Hệ thống & AI",
      portrait_loc: "Việt Nam (UTC+7 • Làm việc Toàn cầu)",
      m1_val: "13 Merged",
      m1_lbl: "PR Đã Merge Quốc tế",
      m2_val: "6 MIT",
      m2_lbl: "Kho Mã nguồn Mở MIT",
      m3_val: "2 Live",
      m3_lbl: "Nền tảng (VRM3D & UploadHTML)",
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
      j1_note:
        "Phát hành khoaphan.dev Hybrid Flagship v2.1 đồng bộ hệ vector Logo KP, chế độ giấy ấm Editorial, thanh tìm kiếm ⌘K, nguồn RSS và Heatmap đóng góp GitHub thực tế.",
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
      f_go: "Go & Python",
      f_ts: "TypeScript",
      f_open: "Đang chờ Review",
      sec_kits_kicker: "02 // HẠ TẦNG MÃ NGUỒN MỞ MIỄN PHÍ",
      sec_kits_h2: "6 Kho Mã nguồn Mở Chuẩn Giấy phép MIT",
      sec_kits_desc:
        "Các thư viện phòng vệ kỹ thuật và bộ đo kiểm thực nghiệm — cả 6 kho đều có tệp LICENSE MIT hợp lệ trên GitHub, trong đó 4 guardkits cốt lõi được ký số GPG 100%.",
      sec_prod_kicker: "03 // NỀN TẢNG VẬN HÀNH & TRẢI NGHIỆM TƯƠNG TÁC",
      sec_prod_h2: "Nền tảng Web Thực tế, Bộ MCP & 3D Web",
      sec_prod_desc:
        "Bên cạnh đóng góp mã nguồn mở, tôi trực tiếp xây dựng và vận hành 2 nền tảng web đang hoạt động (vrm3d.com, uploadhtml.com) cùng kiến trúc Custom MCP doanh nghiệp.",
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
      links_sub: "Kiến trúc sư Hệ thống, Web3 & Custom MCP • Guardkits Ký số GPG",
      brand_kicker: "HỆ THỐNG NHẬN DIỆN & BỘ BÁO CHÍ",
      brand_h1: "Brand Kit Chính thức & Banner Đa Nền tảng",
      brand_desc:
        "Tải trực tiếp Logo KP SVG/PNG, trọn bộ Banner đúng chuẩn từng pixel cho LinkedIn, X, YouTube, Facebook, GitHub, OpenGraph hoặc sao chép mã màu và Bio chuẩn chỉ với 1 cú click.",
      now_kicker: "CẬP NHẬT TRẠNG THÁI • 19/11/2026",
      now_h1: "Những gì tôi đang xây dựng & kiểm toán hiện tại",
      now_lead:
        "Trang /now ghi lại trọng tâm kỹ thuật hiện tại, các nhánh mã nguồn mở đang theo đuổi và lịch nhận dự án từ Việt Nam (UTC+7).",
      writing_kicker: "CHUỖI BÀI & PHÂN TÍCH KỸ THUẬT",
      writing_h1: "Bài viết Kỹ thuật & Kiến trúc Hệ thống",
      writing_lead:
        "Các bài phân tích chuyên sâu viết bằng Tiếng Anh đúc kết trực tiếp từ PR đã merge, bộ test đối kháng và hệ thống thực tế. Theo dõi qua /rss.xml.",
      journal_kicker: "NHẬT KÝ KỸ SƯ (ĐỒNG BỘ TỪ GITHUB GRAPHQL)",
      journal_h1: "Nhật ký & Biểu đồ Đóng góp 52 Tuần",
      journal_lead:
        "Nhật ký theo trình tự thời gian các PR đã merge, đợt phát hành thư viện MIT và cột mốc kỹ thuật đồng bộ từ lịch sử GitHub thật của @khoap1220-hue (2,790 đóng góp trên 37 ngày hoạt động)."
    }
  };

  const ATS_RESUME_TEXT = `KHOA PHAN (Phan Dang Khoa) — https://khoaphan.dev
Polyglot Systems, Web3 & Custom MCP Architect (Rust • Go • TypeScript • Python)
GitHub: https://github.com/khoap1220-hue | Location: Vietnam (UTC+7 • Global Remote)

VERIFIED HIGHLIGHTS:
- 13 live merged upstream PRs across Externalize-Labs/externalize#39 (Rust/Wasm Stellar XDR verifier), anza-xyz/cargo-build-sbf#116 (Solana SBF toolchain), sorotrail/SoroBeacon#680, tldr-pages/tldr#24925, Wayfare-labs/wayfare#860, ritik4ever/stellar-stream#1436, Farm-credit/stellar-app-os#1797, and MMM-pay/payflow-docs#107.
- Boundary-test credit on BasedHardware/omi#23591 (8k+ stars — JPY multi-currency Stripe plan changes); active open PRs in review at aibtcdev/x402-api#150 and solana-foundation/program-examples#760.
- Author of 6 MIT-licensed open-source repositories: soroban-xdr-proof-kit, go-preflight-sql-guard, ts-idempotent-webhook-guard, py-stream-and-billing-guard, solana-validator-ordering-post-alpenglow, Master-Lab.
- Creator of live web platforms vrm3d.com (3D Character & VRM Marketplace) and uploadhtml.com (instant HTML hosting).`;

  const CMDK_ITEMS = [
    { group: "Articles", title: "Zero-Zombie MCP Servers & Sub-210ms TCP Recovery", sub: "10 MIN • MCP", url: "writing/zero-zombie-mcp-servers/" },
    { group: "Articles", title: "Stopping 20x Concurrent Payment Webhook Storms with WAL Locks", sub: "9 MIN • FINTECH", url: "writing/idempotent-webhook-wal/" },
    { group: "Articles", title: "RFC 4506 Binary Stellar XDR Verification & Cross-Chunk SSE DLP", sub: "11 MIN • CRYPTO", url: "writing/soroban-xdr-and-sse-dlp/" },
    { group: "Pages", title: "Index — Flagship Engineering Hub", sub: "/", url: "" },
    { group: "Pages", title: "Now — Current Focus & Availability", sub: "/now/", url: "now/" },
    { group: "Pages", title: "Writing — Series, Articles & RSS", sub: "/writing/", url: "writing/" },
    { group: "Pages", title: "Journal — Daily Log & Real 52-Week Heatmap", sub: "/journal/", url: "journal/" },
    { group: "Pages", title: "Brand & Press Kit — Official KP Logos & Banners", sub: "/brand/", url: "brand/" },
    { group: "Pages", title: "Links — All-Platform Link-in-Bio Hub", sub: "/links/", url: "links/" },
    { group: "Pages", title: "3D Arcade — Polyglot Core Defender 60-FPS", sub: "/arcade/", url: "arcade/" },
    { group: "Merged Upstream PRs", title: "Externalize-Labs/externalize #39 (Rust / Wasm / XDR)", sub: "MERGED", url: "https://github.com/Externalize-Labs/externalize/pull/39", ext: true },
    { group: "Merged Upstream PRs", title: "anza-xyz/cargo-build-sbf #116 (Rust Solana SBF Syscalls)", sub: "MERGED", url: "https://github.com/anza-xyz/cargo-build-sbf/pull/116", ext: true },
    { group: "Merged Upstream PRs", title: "sorotrail/SoroBeacon #680 (Python OpenAPI Client)", sub: "MERGED", url: "https://github.com/sorotrail/SoroBeacon/pull/680", ext: true },
    { group: "Merged Upstream PRs", title: "tldr-pages/tldr #24925 (64k+ Stars stellar-cli Spec)", sub: "MERGED", url: "https://github.com/tldr-pages/tldr/pull/24925", ext: true },
    { group: "Merged Upstream PRs", title: "Wayfare-labs/wayfare #860 & stellar-stream #1436", sub: "MERGED", url: "https://github.com/Wayfare-labs/wayfare/pull/860", ext: true },
    { group: "Open PRs In Review", title: "aibtcdev/x402-api #150 (Cloudflare DO X402_RELAY RPC)", sub: "OPEN PR", url: "https://github.com/aibtcdev/x402-api/pull/150", ext: true },
    { group: "Open PRs In Review", title: "solana-foundation/program-examples #760 (PDA Authority Note)", sub: "OPEN PR", url: "https://github.com/solana-foundation/program-examples/pull/760", ext: true },
    { group: "MIT Repositories", title: "soroban-xdr-proof-kit (Rust / Wasm XDR + SHA-256)", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/soroban-xdr-proof-kit", ext: true },
    { group: "MIT Repositories", title: "go-preflight-sql-guard (Go SQLite WAL & Circuit Breaker)", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/go-preflight-sql-guard", ext: true },
    { group: "MIT Repositories", title: "ts-idempotent-webhook-guard (TS WAL Lock & HMAC)", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/ts-idempotent-webhook-guard", ext: true },
    { group: "MIT Repositories", title: "py-stream-and-billing-guard (Python SSE DLP & ISO-4217)", sub: "MIT • GPG", url: "https://github.com/khoap1220-hue/py-stream-and-billing-guard", ext: true },
    { group: "Live Platforms", title: "vrm3d.com — 3D Character & VRM Marketplace", sub: "HTTP 200", url: "https://vrm3d.com", ext: true },
    { group: "Live Platforms", title: "uploadhtml.com — Instant HTML Prototype Hosting", sub: "HTTP 200", url: "https://uploadhtml.com", ext: true }
  ];

  // Exact live GitHub GraphQL contribution counts for @khoap1220-hue (queried 2026-11-19: 2,790 total across 37 active days)
  const REAL_GH_CONTRIBUTIONS = {
    "2026-02-23": 3, "2026-04-02": 2, "2026-06-15": 1, "2026-09-26": 13,
    "2026-10-12": 6, "2026-10-13": 2, "2026-10-14": 58, "2026-10-15": 1,
    "2026-10-16": 288, "2026-10-17": 52, "2026-10-22": 2, "2026-10-25": 143,
    "2026-10-26": 408, "2026-10-27": 142, "2026-10-28": 90, "2026-10-29": 178,
    "2026-10-30": 63, "2026-10-31": 128, "2026-11-01": 270, "2026-11-02": 60,
    "2026-11-03": 36, "2026-11-04": 65, "2026-11-05": 144, "2026-11-06": 11,
    "2026-11-07": 10, "2026-11-08": 11, "2026-11-09": 9, "2026-11-10": 6,
    "2026-11-11": 12, "2026-11-12": 3, "2026-11-13": 3, "2026-11-14": 49,
    "2026-11-15": 167, "2026-11-16": 79, "2026-11-17": 84, "2026-11-18": 74,
    "2026-11-19": 117
  };

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
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
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
          <input id="kp-cmdk-input" class="cmdk-input" type="search" aria-label="Search articles, merged PRs, MIT guardkits, and pages" placeholder="Search articles, merged PRs, MIT guardkits, pages..." autocomplete="off" />
          <button type="button" id="kp-cmdk-close" class="icon-btn" style="min-height:44px; min-width:44px; font-size:0.78rem;" aria-label="Close search">ESC</button>
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
      return item.ext ? item.url : ROOT_PREFIX + item.url;
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
    const endDate = new Date("2026-11-19T00:00:00Z");
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 364; i++) {
      const cell = document.createElement("span");
      const d = new Date(endDate.getTime() - (363 - i) * 86400000);
      const iso = d.toISOString().slice(0, 10);
      const count = REAL_GH_CONTRIBUTIONS[iso] || 0;
      const lvl = count === 0 ? 0 : count < 15 ? 1 : count < 80 ? 2 : 3;
      cell.className = "heat-cell";
      cell.setAttribute("data-level", String(lvl));
      cell.setAttribute("title", `${iso}: ${count} GitHub contribution${count === 1 ? "" : "s"}`);
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

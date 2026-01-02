export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Rocky",
      title: "IT Support Specialist | Fullstack Developer | AI-Assisted Development Specialist",
    },
    about: {
      title: "About Me",
      description1: "IT Professional with experience managing critical infrastructure in the banking sector. I specialize in developing efficient web applications through AI-Assisted Development methodology, enabling project delivery cycle acceleration of up to 40% without compromising code quality and security standards.",
      description2: "My expertise covers modern fullstack architecture with a focus on data-driven solutions and robust system integration. My work approach combines technical expertise with AI-assisted workflow to produce measurable, scalable, and production-ready output in competitive timelines.",
      requestCV: "Request CV",
      contact: "Professional Contact",
    },
    skills: {
      title: "Skills & Technology",
      frontend: "Frontend",
      backend: "Backend",
      aiWorkflow: "AI Workflow",
    },
    projects: {
      title: "My Projects",
      bpr: {
        title: "BPR Dumai Kapital Lestari",
        subtitle: "Enterprise Banking Platform",
        confidential: "CONFIDENTIAL",
        description: "Architected and deployed a mission-critical OJK-compliant banking website as Solo Developer. Built with zero-trust security principles, delivering customer-facing financial services with institutional-grade infrastructure, LPS compliance features, and responsive UI/UX optimized for trust and accessibility.",
        securityNote: "Source code confidential - Banking institution security protocols",
      },
      todoFree: {
        title: "Todo Free",
        live: "LIVE",
        description: "Task management application with responsive architecture and intuitive interface. Designed with focus on operational efficiency and cross-device accessibility for maximum productivity.",
        github: "GitHub →",
        liveDemo: "Live Demo →",
      },
      rockBlog: {
        title: "RockBlog",
        description: "Content Management System platform with structured data architecture and multi-level authorization system. Implements best practices in digital content management and administrative access security.",
        github: "GitHub →",
        repoOnly: "Repository Only",
      },
      expenseTracker: {
        title: "Expense Tracker",
        description: "Comprehensive financial analysis solution with real-time data visualization dashboard. Adopts reporting accuracy standards from banking systems to ensure data integrity and precision in financial transaction tracking.",
        github: "GitHub →",
        repoOnly: "Repository Only",
      },
    },
    contact: {
      title: "Let's Connect!",
      description: "I'm open to discussing collaboration opportunities or technology development needs for your organization. Let's talk about how I can provide strategic contributions to your team and projects.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      linkedinText: "Connect with me",
      whatsapp: "WhatsApp",
      whatsappText: "Quick Communication",
      cta: "Discuss Collaboration",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, Saya Rocky",
      title: "IT Support Specialist | Fullstack Developer | AI-Assisted Development Specialist",
    },
    about: {
      title: "Tentang Saya",
      description1: "Profesional IT dengan pengalaman mengelola infrastruktur kritis di sektor perbankan. Saya mengkhususkan diri dalam pengembangan aplikasi web yang efisien melalui metodologi AI-Assisted Development, yang memungkinkan percepatan siklus delivery proyek hingga 40% tanpa mengorbankan kualitas kode dan standar keamanan.",
      description2: "Keahlian saya mencakup arsitektur fullstack modern dengan fokus pada solusi berbasis data dan integrasi sistem yang robust. Pendekatan kerja saya menggabungkan technical expertise dengan workflow AI-assisted untuk menghasilkan output yang terukur, scalable, dan siap produksi dalam timeline yang kompetitif.",
      requestCV: "Minta CV",
      contact: "Kontak Profesional",
    },
    skills: {
      title: "Keahlian & Teknologi",
      frontend: "Frontend",
      backend: "Backend",
      aiWorkflow: "AI Workflow",
    },
    projects: {
      title: "Proyek Saya",
      bpr: {
        title: "BPR Dumai Kapital Lestari",
        subtitle: "Platform Perbankan Enterprise",
        confidential: "RAHASIA",
        description: "Merancang dan mengimplementasikan website perbankan kritis yang sesuai dengan OJK sebagai Solo Developer. Dibangun dengan prinsip keamanan zero-trust, menyediakan layanan keuangan untuk nasabah dengan infrastruktur tingkat institusi, fitur kepatuhan LPS, dan UI/UX responsif yang dioptimalkan untuk kepercayaan dan aksesibilitas.",
        securityNote: "Kode sumber rahasia - Protokol keamanan institusi perbankan",
      },
      todoFree: {
        title: "Todo Free",
        live: "AKTIF",
        description: "Aplikasi manajemen tugas dengan arsitektur responsif dan antarmuka yang intuitif. Dirancang dengan fokus pada efisiensi operasional dan kemudahan akses lintas perangkat untuk produktivitas maksimal.",
        github: "GitHub →",
        liveDemo: "Demo Langsung →",
      },
      rockBlog: {
        title: "RockBlog",
        description: "Platform Content Management System dengan arsitektur data terstruktur dan sistem otorisasi multi-level. Mengimplementasikan best practices dalam pengelolaan konten digital dan keamanan akses administratif.",
        github: "GitHub →",
        repoOnly: "Repositori Saja",
      },
      expenseTracker: {
        title: "Expense Tracker",
        description: "Solusi analisis keuangan komprehensif dengan dashboard visualisasi data real-time. Mengadopsi standar akurasi pelaporan dari sistem perbankan untuk memastikan integritas data dan presisi dalam tracking transaksi finansial.",
        github: "GitHub →",
        repoOnly: "Repositori Saja",
      },
    },
    contact: {
      title: "Mari Terhubung!",
      description: "Saya terbuka untuk mendiskusikan peluang kolaborasi atau kebutuhan pengembangan teknologi untuk organisasi Anda. Mari kita bicarakan bagaimana saya dapat memberikan kontribusi strategis bagi tim dan proyek Anda.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      linkedinText: "Terhubung dengan saya",
      whatsapp: "WhatsApp",
      whatsappText: "Komunikasi Cepat",
      cta: "Diskusi Kolaborasi",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

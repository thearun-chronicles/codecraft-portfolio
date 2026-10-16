import smartHrmsMobileImage from "../assets/images/smart_hrms_mockup_1790272686242.png";
import smartHrmsWebImage from "../assets/images/smart_hrms_web_mockup_1790272686242.png";
import collmanHrmsImage from "../assets/images/collman_hrms_mockup_1790272713206.png";
import enterpriseCrmImage from "../assets/images/enterprise_crm_mockup_1790272700305.png";
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'hrms-mobile' | 'hrms-web' | 'crm';
  categoryLabel: string;
  clientBadge?: string;
  featured: boolean;
  image: string;
  playStoreUrl?: string;         
  versions?: string;
  overview: string;
  challenge: string;
  solution: string;
  companiesHandled: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  techStack: string[];
  architectureHighlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: string;
    tags: string[];
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  employmentType: string;
  summary: string;
  award?: string;
  highlights: string[];
  technologies: string[];
  clientsServed: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  focus: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Arun Raj",
    fullName: "Arun Raj R",
    title: "Associate Software Engineer",
    subtitles: [
      "Associate Software Engineer at CAFS",
      "Full Stack Developer / PHP Developer",
      "REST API & Mobile Backend Engineer",
      "Discovery of the Year Awardee 2024-2025"
    ],
    experienceYears: "2+",
    currentCompany: "CAFS Infotech",
    currentRole: "Associate Software Engineer",
    email: "arunrajraj0022@gmail.com",
    phone: "9345802289",
    formattedPhone: "+91 9345802289",
    location: "Chennai, Tamil Nadu, India",
    github: "https://github.com/thearun-chronicles",
    linkedin: "https://www.linkedin.com/in/arun-raj-b76106285",
    instagram: "https://www.instagram.com/thearun.chronicles",
    award: "Discovery of the Year Award – 2024–2025 (CAFS Infotech)",
    summary:
      "2+ years of experience as a Full Stack Developer / PHP Developer at CAFS Infotech with hands-on expertise in developing, maintaining, and enhancing web applications, backend systems, REST APIs, and mobile application backends. Strong hands-on experience with CodeIgniter (MVC, CRUD, server-side validation), end-to-end involvement from requirement understanding to deployment, and production support across 10+ enterprise client implementations.",
    education: {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Annai College Of Arts & Science, Kumbakonam",
      graduation: "2021 July - 2024 May",
      focus: "Computer Applications, Software Development, Database Management & Web Technologies"
    }
  },

  clients: [
    { name: "Deanta", role: "Publishing & Media Workforce" },
    { name: "UDS", role: "Integrated Facilities & HRMS" },
    { name: "National Travels", role: "Travel Booking CRM & HRMS" },
    { name: "Denave", role: "Sales Enablement Enterprise" },
    { name: "Collman", role: "Mobile Workforce HRMS" },
    { name: "IMOP", role: "Enterprise Operations" },
    { name: "Turbo", role: "Industrial Workforce Management" },
    { name: "Radiance", role: "Corporate HRMS Suite" },
    { name: "ABI", role: "Enterprise Implementation" },
    { name: "Pothys", role: "Retail Enterprise HRMS" },
    { name: "RTE", role: "Institutional HRMS" }
  ],

  experience: [
    {
      company: "CAFS Infotech",
      role: "Associate Software Engineer",
      location: "Chennai, India",
      period: "2024 - Present (2+ Years)",
      employmentType: "Full-Time",
      award: "Discovery of the Year Award – 2024–2025",
      summary:
        "Full-stack and backend engineer in a product-based environment developing HRMS and CRM web applications and HRMS mobile backends. Contributing to core product features, customization, migration, version upgrades (v7.2, v8.3, v8.5), REST API engineering, and production support for 10+ client organizations.",
      highlights: [
        "Strong hands-on experience with CodeIgniter, including MVC architecture, frontend-to-backend integration, database connectivity, CRUD operations, server-side validation, API development, and end-to-end feature implementation.",
        "Architected and maintained REST APIs for Smart HRMS and Collman HRMS mobile applications (live on Google Play), powering employee check-in/out, GPS attendance tracking, and self-service workflows.",
        "Implemented backend technical concepts: authentication and authorization, session management, API validation, exception handling, error handling, request/response processing, middleware/interceptors, and security controls.",
        "Developed and supported complex payroll business logic and dynamic payroll processing, including rule-based calculations, configurable components, employee-specific processing, and workflow-driven payroll operations.",
        "Engineered Time Office/Attendance business logic, including attendance processing, working hours, shifts, overtime, leave/attendance integration, and related calculations.",
        "Integrated application security and modern onboarding features including reCAPTCHA, Two-Factor Authentication (2FA), Aadhaar-based employee onboarding, and DigiLocker integration.",
        "Managed third-party API integrations, handling API responses, validation failures, exceptions, timeout/error scenarios, and secure request/response pipelines.",
        "Handled 10+ client implementations and migrations across organizations including Deanta, UDS, Denave, National Travels, Collman, IMOP, Turbo, Radiance, ABI, Pothys, and RTE.",
        "Recognized with the prestigious 'Discovery of the Year Award – 2024–2025' at CAFS Infotech for outstanding contributions and performance."
      ],
      technologies: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "REST APIs",
        "JavaScript",
        "Two-Factor Auth (2FA)",
        "DigiLocker API",
        "Aadhaar API",
        "reCAPTCHA",
        "Git/GitHub",
        "Production Deployment"
      ],
      clientsServed: [
        "Deanta",
        "UDS",
        "Denave",
        "National Travels",
        "Collman",
        "IMOP",
        "Turbo",
        "Radiance",
        "ABI",
        "Pothys",
        "RTE"
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "smart-hrms-mobile",
      title: "Smart HRMS – Mobile Application Backend & API",
      subtitle: "Official Mobile Application Backend for Enterprise Employee Self-Service & Attendance",
      category: "hrms-mobile",
      categoryLabel: "HRMS Mobile Backend",
      clientBadge: "Live on Google Play Store",
      featured: true,
      image: smartHrmsMobileImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cafsinfotech.smarthrms&hl=en_IN",
      overview:
        "Developed and maintained high-performance backend REST APIs powering the official Smart HRMS mobile application on Google Play Store, serving thousands of active corporate employees.",
      challenge:
        "Mobile clients required sub-second API response times for geo-tagged attendance check-in/check-out, offline-resilient sync, secure token-based authentication, and instant access to employee self-service records across diverse network conditions.",
      solution:
        "Engineered robust RESTful endpoints with CodeIgniter and MySQL. Implemented database query optimization, session handling, request payload validation, detailed error handling, and secure communication channels between the mobile app and HRMS server.",
      companiesHandled: ["CAFS Infotech Clients", "Enterprise Workforces across India"],
      metrics: [
        { label: "Deployment", value: "Google Play Live" },
        { label: "API Speed", value: "< 150ms" },
        { label: "Core Feature", value: "Attendance & ESS" },
        { label: "Data Sync", value: "Real-Time" }
      ],
      keyFeatures: [
        "Employee mobile check-in and check-out with geo-coordinate tracking and validation",
        "Attendance history logs, real-time working hours calculation, and shift timing display",
        "Employee Self-Service (ESS) modules for leave application, profile verification, and approvals",
        "Secure session authentication and request interceptor validation",
        "Comprehensive exception handling, error logging, and graceful network failure responses"
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "JSON", "Git/GitHub"],
      architectureHighlights: [
        "REST API contract design strictly decoupling client presentation from database transactions",
        "Server-side input sanitization and token-based API request authorization",
        "High-efficiency MySQL queries fetching employee attendance ledgers"
      ]
    },
    {
      id: "smart-hrms-web",
      title: "Smart HRMS – Web Application & Product Customization",
      subtitle: "Versions 7.2, 8.3 & 8.5 — Dynamic Payroll, Tax , Time Office, Attendance & Onboarding",
      category: "hrms-web",
      categoryLabel: "Enterprise Web HRMS",
      clientBadge: "Versions 7.2, 8.3 & 8.5",
      featured: true,
      image: smartHrmsWebImage,
      versions: "Versions: 7.2, 8.3 & 8.5",
      overview:
        "Core product development, client customization, version upgrades, and migration for Smart HRMS across major releases (v7.2, v8.3, and v8.5) powering tier-1 organizations.",
      challenge:
        "Major enterprise clients with distinct statutory rules, thousands of employees, and disparate legacy databases required zero-downtime version migrations, dynamic payroll computation rules, and customized onboarding workflows.",
      solution:
        "Engineered modular architecture supporting client-specific business rules without forking core modules. Implemented dynamic payroll engines, Time Office shift matrices, automated leave-to-attendance reconciliation, graphical dashboard analytics, and secure onboarding via DigiLocker, Aadhaar, and 2FA.",
      companiesHandled: [
        "Radiance",
        "Pothys",
        "Deanta",
        "UDS",
        "National Travels",
        "Turbo",
        "ABI",
        "RTE"
      ],
      metrics: [
        { label: "Versions Supported", value: "v7.2, 8.3, 8.5" },
        { label: "Major Clients", value: "10+ Orgs" },
        { label: "Payroll Engine", value: "Rule-Based" },
        { label: "Security", value: "2FA & DigiLocker" }
      ],
      keyFeatures: [
        "Dynamic rule-based payroll processing: configurable allowances, statutory deductions, and employee-specific rules",
        "Comprehensive Time Office workflows: shift rotations, overtime calculations, grace periods, and late marks",
        "Tax Processing: employee tax declarations, investment proofs, tax regime selection, and income tax calculations",
        "Secure onboarding with DigiLocker document verification, Aadhaar integration, and reCAPTCHA protection",
        "Two-Factor Authentication (2FA) for administrative and high-privilege operations",
        "Executive dashboard analytics with real-time graphical workforce reports",
        "Database migration tools and client deployment automation across versions 7.2, 8.3, and 8.5"
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "REST APIs", "DigiLocker API", "Aadhaar API", "2FA"],
      architectureHighlights: [
        "Configurable business rule engine for enterprise-tailored payroll processing",
        "Automated migration scripts converting legacy client records to modern v8.5 schema",
        "Third-party API validation pipelines with timeout handling and retry logic"
      ]
    },
    {
      id: "collman-hrms-mobile",
      title: "Collman HRMS – Mobile Application Backend & API",
      subtitle: "Official Workforce & Attendance Mobile Application on Google Play Store",
      category: "hrms-mobile",
      categoryLabel: "HRMS Mobile Backend",
      clientBadge: "Live on Google Play Store",
      featured: true,
      image: collmanHrmsImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.cafsinfotech.collman&hl=en_IN",
      overview:
        "Developed and maintained REST APIs supporting mobile HRMS operations for the official Collman HRMS application on Google Play, providing seamless employee attendance synchronization.",
      challenge:
        "Ensuring zero data loss and instantaneous sync between mobile application punches, employee information updates, and the central Collman HRMS platform database.",
      solution:
        "Implemented structured backend processing, database operations, strict payload validation, robust authentication, and error handling for dependable bidirectional data sync between mobile and server.",
      companiesHandled: ["Collman Enterprise Clients", "Workforce Deployments"],
      metrics: [
        { label: "Platform", value: "Google Play Store" },
        { label: "Data Integrity", value: "100% Synced" },
        { label: "Mobile Sync", value: "Bi-Directional" },
        { label: "Validation", value: "Server-Side" }
      ],
      keyFeatures: [
        "REST API endpoints for employee check-in and check-out tracking",
        "Employee master information retrieval and profile status endpoints",
        "Attendance management workflows and leave integration",
        "Database transaction safety ensuring punch integrity",
        "API exception handling and informative status response payloads"
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "JSON", "Git/GitHub"],
      architectureHighlights: [
        "Stateless RESTful communication with session token verification",
        "Database integrity constraints preventing duplicate punches during network retries"
      ]
    },
    {
      id: "crm-national-travels",
      title: "CRM – Web Application Development",
      subtitle: "Enterprise Customer Management, Travel Booking & Lifecycle Tracking for National Travels",
      category: "crm",
      categoryLabel: "Enterprise CRM",
      clientBadge: "Client: National Travels",
      featured: true,
      image: enterpriseCrmImage,
      overview:
        "Developed and maintained a specialized CRM web application for National Travels covering customer management, travel booking lifecycle tracking, and operational workflows.",
      challenge:
        "National Travels required a unified digital system to connect customer bookings, itinerary updates, operational travel logistics, and account management without manual spreadsheet tracking.",
      solution:
        "Built dynamic business logic and database-driven workflows connecting customer booking stages, vehicle and tour scheduling, and account operations into an integrated web application.",
      companiesHandled: ["National Travels", "Travel Operations Division"],
      metrics: [
        { label: "Primary Client", value: "National Travels" },
        { label: "Lifecycle", value: "End-to-End" },
        { label: "Workflow", value: "Database-Driven" },
        { label: "Operations", value: "Automated" }
      ],
      keyFeatures: [
        "Comprehensive customer profiles with historical travel records and preference tracking",
        "End-to-end travel booking lifecycle: inquiry, reservation, confirmation, and fulfillment",
        "Database-driven workflows uniting booking agents, fleet operations, and accounts",
        "Operational status tracking and real-time itinerary status updates",
        "Administrative reporting dashboards for booking volume and client accounts"
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "HTML5/CSS3", "AJAX"],
      architectureHighlights: [
        "Relational schema modeling connecting customers, bookings, itineraries, and billing",
        "Dynamic JavaScript and AJAX frontend integration for interactive booking management"
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      id: "backend",
      title: "PHP & CodeIgniter Development",
      description: "Core specialization with 2+ years of production product development at CAFS Infotech.",
      skills: [
        {
          name: "CodeIgniter & MVC Architecture",
          level: "Primary Production Stack",
          experience: "2+ Years Production",
          description: "Strong hands-on experience building web apps and REST backends with MVC architecture, frontend-to-backend integration, CRUD operations, and server-side validation.",
          tags: ["MVC Pattern", "CRUD Operations", "Server-Side Validation"]
        },
        {
          name: "REST API & Mobile Backend Engineering",
          level: "Daily Core Driver",
          experience: "2+ Years Production",
          description: "Engineered RESTful backends powering Smart HRMS and Collman HRMS on Google Play, handling request/response processing, interceptors, and error handling.",
          tags: ["Mobile APIs", "Request/Response Processing", "Interceptors & Middleware"]
        },
        {
          name: "Backend Security & Authentication",
          level: "Production Security",
          experience: "Enterprise Tested",
          description: "Implemented authentication and authorization, session management, 2FA, reCAPTCHA, Aadhaar-based employee onboarding, and DigiLocker integrations.",
          tags: ["2FA", "DigiLocker Integration", "Aadhaar API", "reCAPTCHA"]
        },
        {
          name: "Third-Party API Integration",
          level: "External Gateways",
          experience: "Production Handled",
          description: "Integrated third-party APIs and authentication services, handling API responses, validation failures, exceptions, timeouts, and error scenarios.",
          tags: ["API Exception Handling", "Timeouts & Retries", "Data Validation"]
        }
      ]
    },
    {
      id: "database",
      title: "MySQL & Database Management",
      description: "Schema design, relational data modeling, query optimization, and transaction safety.",
      skills: [
        {
          name: "MySQL Database Architecture",
          level: "Production Daily Driver",
          experience: "2+ Years Production",
          description: "Designed relational schemas, foreign-key relationships, and indexing for enterprise HRMS and CRM applications managing millions of records.",
          tags: ["Schema Modeling", "Database Connectivity", "Data Integrity"]
        },
        {
          name: "HRMS Migration & Data Setup",
          level: "Migration & Upgrades",
          experience: "10+ Client Deployments",
          description: "Handled data/process migrations across versions (7.2, 8.3, 8.5), client-specific database setup, and zero-downtime updates.",
          tags: ["Data Migration", "Version Upgrades (v7.2 to v8.5)", "Client Configuration"]
        },
        {
          name: "Complex Transaction Processing",
          level: "High Reliability",
          experience: "Continuous Operation",
          description: "Handled transactional integrity for monthly payroll computations, attendance punch ledgers, and travel booking lifecycles.",
          tags: ["ACID Safety", "Payroll Transactions", "Attendance Ledgers"]
        }
      ]
    },
    {
      id: "product",
      title: "HRMS & CRM Product Workflows",
      description: "Deep domain knowledge of enterprise HR processes and business logic.",
      skills: [
        {
          name: "Dynamic Payroll Business Logic",
          level: "Domain Specialization",
          experience: "Production Proven",
          description: "Implemented rule-based payroll calculations, configurable components, employee-specific processing, and workflow-driven payroll operations.",
          tags: ["Rule-Based Payroll", "Statutory Deductions", "Configurable Rules"]
        },
        {
          name: "Time Office & Attendance Logic",
          level: "Domain Specialization",
          experience: "Production Proven",
          description: "Engineered attendance processing, working hours calculations, shifts, overtime, and leave/attendance integration workflows.",
          tags: ["Shift Management", "Overtime Rules", "Leave Integration"]
        },
        {
          name: "Employee Lifecycle & Onboarding",
          level: "Domain Specialization",
          experience: "End-to-End Workflows",
          description: "Developed Employee Onboarding, Administration, Leave Management, and digital verification workflows for 10+ client enterprises.",
          tags: ["Employee Onboarding", "Leave Management", "Administration"]
        }
      ]
    },
    {
      id: "tools",
      title: "Full Stack UI & Production Deployment",
      description: "Frontend integration, version control, troubleshooting, and deployment.",
      skills: [
        {
          name: "Frontend-to-Backend Integration",
          level: "Full Stack",
          experience: "2+ Years Hands-on",
          description: "Integrated responsive web frontends with backend APIs using JavaScript, AJAX, and dynamic DOM manipulation for analytics and dashboards.",
          tags: ["JavaScript", "AJAX", "Dashboard Analytics & Reports"]
        },
        {
          name: "Git / GitHub Source Control",
          level: "Version Control",
          experience: "Daily Workflow",
          description: "Strong experience with Git/GitHub for source-code management, version control, branch management, code updates, and collaborative development.",
          tags: ["Branch Management", "Code Reviews", "Collaborative Flow"]
        },
        {
          name: "Client Deployment & Production Support",
          level: "Operations & Support",
          experience: "10+ Client Implementations",
          description: "Application setup, issue resolution, testing, client coordination, troubleshooting, and production support across multiple client organizations.",
          tags: ["Troubleshooting", "Client Coordination", "Production Issue Resolution"]
        }
      ]
    }
  ] as SkillCategory[],

  accomplishments: [
    {
      number: "Award",
      label: "Discovery of the Year",
      detail: "2024–2025 Awardee at CAFS Infotech for outstanding contributions"
    },
    {
      number: "10+",
      label: "Client Implementations",
      detail: "Deanta, UDS, Denave, National Travels, Collman, IMOP, Turbo, Radiance, ABI, Pothys, RTE"
    },
    {
      number: "2+",
      label: "Years Experience",
      detail: "Full Stack & PHP Developer at CAFS Infotech"
    },
    {
      number: "2",
      label: "Live Play Store Apps",
      detail: "Smart HRMS & Collman HRMS Mobile Backends deployed on Google Play"
    },
    {
      number: "3",
      label: "Major Product Versions",
      detail: "Developed & customized Smart HRMS versions 7.2, 8.3 & 8.5"
    }
  ],

  certifications: [
    {
      title: "Discovery of the Year Award – 2024–2025",
      issuer: "CAFS Infotech",
      date: "2024–2025",
      focus: "Official organizational recognition for exceptional performance and technical contributions during the year."
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      issuer: "Annai College Of Arts & Science, Kumbakonam",
      date: "2021 – 2024",
      focus: "Graduated May 2024 with specialization in Computer Applications, Database Management, and Software Engineering."
    },
    {
      title: "Full Stack & PHP / CodeIgniter Development",
      issuer: "Technical Training & CAFS Product Suite",
      date: "2024",
      focus: "MVC Architecture, RESTful API design, database connectivity, and enterprise application deployment."
    },
    {
      title: "Enterprise Application Security & Identity",
      issuer: "CAFS Engineering Standards",
      date: "2024",
      focus: "Hands-on integration of 2FA, reCAPTCHA, DigiLocker, and Aadhaar identity verification."
    }
  ] as Certification[]
};

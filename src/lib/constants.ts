export interface NavItem {
  title: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Experience', href: '/experience' },
  { title: 'Resume', href: '/resume' },
  { title: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ankitkumarsahu454554-svg', handle: 'ankitkumarsahu454554-svg' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ankit-kumar-sahu-b9117a35b/', handle: 'ankit-kumar-sahu' },
  { label: 'Email', href: 'mailto:ankitkumarsahu488526@gmail.com', handle: 'ankitkumarsahu488526@gmail.com' },
];

export const SITE_CONFIG = {
  name: 'Ankit Kumar Sahu',
  role: 'Computer Science & Engineering Student',
  subRole: 'Data Science | AI & Machine Learning | Software Systems',
  university: 'NIST University',
  degree: 'B-Tech in Computer Science Engineering (Data Science)',
  cgpa: '8.75 / 10',
  duration: '2024 — 2028',
  status: 'Open for Software & ML Opportunities',
  location: 'Berhampur, Odisha, India',
  email: 'ankitkumarsahu488526@gmail.com',
  phone: '+91 7847950588',
  resumePath: '/documents/my-resume.pdf',
  profileImagePath: '/images/profile.png',
  github: 'https://github.com/ankitkumarsahu454554-svg',
  linkedin: 'https://linkedin.com/in/ankit-kumar-sahu-b9117a35b/',
};

export interface EngineeringProject {
  id: string;
  slug: string;
  title: string;
  category: 'AI / Machine Learning' | 'Data Science' | 'Systems & Security';
  summary: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  folderPath: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export type Project = EngineeringProject;

export const PROJECTS: EngineeringProject[] = [
  {
    id: '01',
    slug: 'rare-disease-prediction-ai',
    title: 'Rare Disease Prediction AI',
    category: 'AI / Machine Learning',
    summary:
      'Phenotype-driven candidate disease ranking network utilizing deep learning, genetic evidence integration, and Human Phenotype Ontology (HPO) embeddings.',
    problem:
      'Diagnosing rare genetic diseases is notoriously protracted because symptoms are heterogeneous and overlap across thousands of rare disorders, often leading to years of diagnostic delay.',
    solution:
      'Engineered an end-to-end deep learning architecture utilizing HPO ontological representations to compute semantic similarity between patient symptoms and rare disease profiles, ranking high-probability candidate diagnoses.',
    contribution:
      'Designed neural ranking models in PyTorch, structured HPO hierarchical embeddings, and benchmarked predictive accuracy using Top-K accuracy and Mean Reciprocal Rank (MRR).',
    technologies: ['Python', 'PyTorch', 'HPO Phenotype Ontology', 'Scikit-learn', 'NumPy', 'Pandas'],
    metrics: 'Evaluated with Top-K accuracy & MRR benchmarks [TODO: Candidate to provide published benchmark %]',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
    folderPath: '/projects/rare-disease-prediction-ai/',
    images: [
      {
        src: '/projects/rare-disease-prediction-ai/hero.svg',
        alt: 'Rare Disease Prediction AI System Schematic',
        caption: 'Neural phenotype ranking architecture and HPO ontology embedding pipeline.',
      },
      {
        src: '/projects/rare-disease-prediction-ai/architecture.svg',
        alt: 'Model Pipeline Flowchart',
        caption: 'Hierarchical symptom-to-disease vector distance mapping.',
      },
      {
        src: '/projects/rare-disease-prediction-ai/evaluation.svg',
        alt: 'Top-K & MRR Validation Metrics',
        caption: 'Cross-validation benchmarks across candidate genetic cohorts.',
      },
    ],
  },
  {
    id: '02',
    slug: 'medikiosk-patient-case-taking',
    title: 'MediKiosk — Patient Case Taking Platform',
    category: 'Data Science',
    summary:
      'Autonomous patient case-taking platform integrating voice-based symptom collection, medical document OCR, red-flag detection, and physician triage dashboard.',
    problem:
      'Hospital outpatient departments face severe congestion, long registration queues, and regional language barriers that delay clinical intake and degrade triage efficiency.',
    solution:
      'Developed a full-stack automated kiosk enabling patient symptom intake, automated clinical paperwork extraction via Optical Character Recognition (OCR), and real-time priority scoring for clinical staff.',
    contribution:
      'Engineered multilingual voice/text ingestion pipelines, integrated OCR extraction for medical documents, developed the FastAPI backend, and designed the physician triage dashboard in React.',
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Tesseract OCR', 'Tailwind CSS'],
    metrics: 'End-to-end automated clinical triage with priority case flagging',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
    folderPath: '/projects/medikiosk-patient-case-taking/',
    images: [
      {
        src: '/projects/medikiosk-patient-case-taking/hero.svg',
        alt: 'MediKiosk Intake Dashboard',
        caption: 'Patient symptom collection and voice intake interface.',
      },
      {
        src: '/projects/medikiosk-patient-case-taking/doctor-dashboard.svg',
        alt: 'Physician Triage Dashboard',
        caption: 'Real-time patient history and clinical priority triage queue.',
      },
      {
        src: '/projects/medikiosk-patient-case-taking/ocr-intake.svg',
        alt: 'Medical Document OCR Pipeline',
        caption: 'Automated prescription extraction and entity categorization.',
      },
    ],
  },
  {
    id: '03',
    slug: 'securewipe-enterprise',
    title: 'SecureWipe Enterprise v2.0 | Data Sanitization',
    category: 'Systems & Security',
    summary:
      'High-throughput storage device sanitization platform compliant with NIST SP 800-88 enterprise media sanitization guidelines.',
    problem:
      'Decommissioned enterprise storage media often retain recoverable confidential data when wiped with standard formatting, posing data leakage and non-compliance vulnerabilities.',
    solution:
      'Architected a native disk sanitization utility implementing NIST SP 800-88 Clear and Purge overwrite patterns, with multi-device concurrent wiping, cryptographic verification, and tamper-evident audit logs.',
    contribution:
      'Developed native device discovery and low-level block overwrite routines in Go and Rust, designed the Electron management console, and implemented cryptographic hash verification for audit records.',
    technologies: ['Go', 'Rust', 'Electron', 'TypeScript', 'NIST SP 800-88 Guidelines'],
    metrics: 'Compliant with NIST SP 800-88 sanitization verification standards',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
    folderPath: '/projects/securewipe-enterprise/',
    images: [
      {
        src: '/projects/securewipe-enterprise/hero.svg',
        alt: 'SecureWipe Enterprise Console',
        caption: 'Drive discovery and multi-device sanitization monitor.',
      },
      {
        src: '/projects/securewipe-enterprise/sanitization-engine.svg',
        alt: 'NIST SP 800-88 Overwrite Engine',
        caption: 'Low-level block write patterns with cryptographic hash checks.',
      },
      {
        src: '/projects/securewipe-enterprise/audit-certificate.svg',
        alt: 'Tamper-Evident Audit Certificate',
        caption: 'Cryptographically signed audit certificate log for compliance.',
      },
    ],
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Neural Networks',
      'Supervised Learning',
      'Model Evaluation & Tuning',
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      'Pandas',
      'NumPy',
      'Data Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Statistical Modeling',
      'Matplotlib / Seaborn',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux / Bash', 'Docker (Basics)', 'Postman', 'VS Code', 'Vercel'],
  },
];

export const EDUCATION_DATA = [
  {
    degree: 'B-Tech in Computer Science Engineering (Data Science)',
    institution: 'NIST University',
    location: 'Berhampur, Odisha, India',
    duration: '2024 — 2028',
    grade: 'CGPA: 8.75 / 10',
    description:
      'Rigorous academic curriculum covering Data Structures and Algorithms, Object-Oriented Programming (C++), Database Management Systems, Machine Learning Foundations, Probability and Statistics, and Linear Algebra.',
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Data Science Intern',
    organization: 'Unified Mentor Pvt. Ltd',
    duration: 'Oct 2026 — Dec 2026',
    location: 'Remote, India',
    highlights: [
      'Gained practical experience in end-to-end data analysis, preprocessing, and supervised machine learning.',
      'Applied Python and data science techniques to solve real-world dataset challenges through hands-on projects.',
      'Designed preprocessing pipelines for outlier handling, missing value imputation, and feature scaling.',
    ],
  },
  {
    role: 'Space Technology & Systems Trainee',
    organization: 'India Space Lab',
    duration: 'Jun 2026 — Jul 2026',
    location: 'India',
    highlights: [
      'Completed a Summer Internship & Technical Training Program at India Space Lab.',
      'Hands-on exposure to drone technology, CanSat/CubeSat micro-payload architecture, and atmospheric sensor telemetry.',
      'Studied remote sensing (GIS) satellite datasets, rocketry principles, and recovery systems for aerospace hardware.',
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Prompt Wars: Bengaluru (AI Hackathon) — Finalist',
    organization: 'Google for Developers',
    description:
      'Recognized for advanced prompt engineering, computational problem-solving, and LLM application design.',
  },
  {
    title: 'Academic Excellence (CGPA: 8.75 / 10)',
    organization: 'NIST University',
    description:
      'Consistently maintained top academic ranking in Computer Science & Engineering (Data Science).',
  },
  {
    title: 'Artificial Intelligence & Machine Learning Certification',
    organization: 'Internshala Trainings',
    description:
      'Comprehensive training in machine learning algorithms, deep neural networks, and model evaluation.',
  },
  {
    title: 'Data Science Essentials with Python',
    organization: 'Cisco Networking Academy',
    description:
      'Foundational data science certification in Python programming, statistical analysis, and data manipulation.',
  },
  {
    title: 'Data Analytics using Python with Power BI and Tableau',
    organization: 'NIST University',
    description:
      'Applied business intelligence, data storytelling, and analytical visualization across enterprise datasets.',
  },
  {
    title: 'Object Oriented Programming with C++',
    organization: 'NIST University',
    description:
      'Foundational software engineering training in C++, memory management, algorithms, and design patterns.',
  },
];

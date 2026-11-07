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
  subRole: 'Data Science | AI & Machine Learning | Software Development',
  university: 'NIST University',
  degree: 'B-Tech in Computer Science and Engineering (Data Science)',
  cgpa: '8.75 / 10',
  duration: '2024 — 2028',
  status: 'Open for Technical Collaboration & Projects',
  location: 'Odisha, India',
  email: 'ankitkumarsahu488526@gmail.com',
  phone: '+91 7847950588',
  resumePath: '/documents/my-resume.pdf',
  profileImagePath: '/images/profile.png',
  github: 'https://github.com/ankitkumarsahu454554-svg',
  linkedin: 'https://linkedin.com/in/ankit-kumar-sahu-b9117a35b/',
};

export interface EngineeringProject {
  id: string;
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
}

export const PROJECTS: EngineeringProject[] = [
  {
    id: '01',
    title: 'Rare Disease Prediction AI System',
    category: 'AI / Machine Learning',
    summary: 'Phenotype-driven genetic candidate disease ranking system utilizing deep learning and ontology analysis.',
    problem:
      'Diagnosing rare genetic diseases is notoriously slow and difficult because symptoms are complex, heterogeneous, and overlap across thousands of rare disorders, leading to diagnostic delays of several years.',
    solution:
      'Engineered an end-to-end deep learning pipeline utilizing Human Phenotype Ontology (HPO) representations to compute semantic similarity between patient symptoms and rare disease profiles, ranking high-probability candidate diagnoses.',
    contribution:
      'Designed the neural feature ranking network in PyTorch, structured the HPO hierarchical graph embedding, conducted cross-validation, and benchmarked model performance using Top-K accuracy and Mean Reciprocal Rank (MRR).',
    technologies: ['Python', 'PyTorch', 'HPO Phenotype Ontology', 'Scikit-learn', 'NumPy', 'Pandas'],
    metrics: 'Evaluated with Top-K accuracy & Mean Reciprocal Rank (MRR) benchmarks',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
  },
  {
    id: '02',
    title: 'MediKiosk — Multilingual Clinical Intake & OCR',
    category: 'Data Science',
    summary: 'Autonomous medical document OCR and multilingual symptom intake platform for healthcare environments.',
    problem:
      'Hospital outpatient departments face severe congestion, long registration queues, and language barriers that delay clinical intake and degrade triage efficiency.',
    solution:
      'Developed a full-stack automated kiosk platform enabling voice-based patient symptom capture in regional languages, automated prescription/record extraction via Optical Character Recognition (OCR), and real-time triage scoring for clinical dashboards.',
    contribution:
      'Built the multilingual voice and text ingestion pipeline, integrated OCR extraction for clinical paperwork, developed the FastAPI backend service, and built the physician triage dashboard in React.',
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Tesseract OCR', 'Tailwind CSS'],
    metrics: 'End-to-end multilingual intake with automated priority flagging',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
  },
  {
    id: '03',
    title: 'SecureWipe Enterprise Data Sanitization',
    category: 'Systems & Security',
    summary: 'High-throughput storage device sanitization platform compliant with NIST SP 800-88 enterprise standards.',
    problem:
      'Decommissioned enterprise storage media often retain recoverable confidential data when wiped with standard operating system formatting, posing severe data leak and compliance risks.',
    solution:
      'Architected a native disk sanitization utility implementing NIST SP 800-88 Clear and Purge overwrite patterns, with multi-device concurrent wiping, cryptographic verification, and tamper-evident certificate logs.',
    contribution:
      'Developed native storage device discovery and low-level block overwrite modules in Go and Rust, designed the Electron management console, and implemented cryptographic hash verification for audit records.',
    technologies: ['Go', 'Rust', 'Electron', 'TypeScript', 'NIST SP 800-88 Guidelines'],
    metrics: 'Compliant with NIST SP 800-88 sanitization verification algorithms',
    githubUrl: 'https://github.com/ankitkumarsahu454554-svg',
    featured: true,
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
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Neural Networks', 'Supervised Learning', 'Model Evaluation & Tuning'],
  },
  {
    title: 'Data Science & Analytics',
    skills: ['Pandas', 'NumPy', 'Data Preprocessing', 'Exploratory Data Analysis (EDA)', 'Statistical Modeling', 'Matplotlib / Seaborn'],
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
    degree: 'B-Tech in Computer Science and Engineering (Specialization: Data Science)',
    institution: 'NIST University',
    location: 'Berhampur, Odisha, India',
    duration: '2024 — 2028',
    grade: 'CGPA: 8.75 / 10',
    description:
      'Comprehensive curriculum covering Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, Probability and Statistics, and Linear Algebra.',
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Data Science Intern',
    organization: 'Unified Mentor Pvt. Ltd',
    duration: 'Oct 2026 — Dec 2026',
    location: 'Remote',
    highlights: [
      'Built and evaluated supervised machine learning models on real-world datasets for classification and regression tasks.',
      'Designed end-to-end data preprocessing pipelines including outlier detection, missing value imputation, and feature scaling.',
      'Generated statistical reports and exploratory data visualizations to communicate model findings and predictive accuracy.',
    ],
  },
  {
    role: 'Space Technology & Systems Trainee',
    organization: 'India Space Lab',
    duration: 'Jun 2026 — Jul 2026',
    location: 'India',
    highlights: [
      'Participated in hands-on technical training on CanSat micro-payload architecture, atmospheric sensor integration, and telemetry.',
      'Assisted in developing data acquisition routines for environmental sensor data and trajectory GPS logging.',
      'Studied GIS remote sensing principles, satellite image analysis, and recovery systems for aerospace hardware.',
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Finalist — Google for Developers Prompt Wars',
    organization: 'Google for Developers',
    description: 'Recognized for advanced prompt engineering, computational problem-solving, and LLM application design.',
  },
  {
    title: 'Academic Excellence (CGPA: 8.75 / 10)',
    organization: 'NIST University',
    description: 'Consistently maintained top academic ranking in Computer Science & Engineering (Data Science).',
  },
];

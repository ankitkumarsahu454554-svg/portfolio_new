export type EventType =
  | 'Hackathon'
  | 'Workshop'
  | 'Competition'
  | 'Conference'
  | 'Training'
  | 'Certification'
  | 'Other';

export type EventRole =
  | 'Attendee'
  | 'Participant'
  | 'Finalist'
  | 'Winner'
  | 'Speaker'
  | 'Certified';

export interface EventImage {
  src: string;
  alt: string;
  caption: string;
}

export interface FlightLogEvent {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  date: string;
  year: number;
  location: string;
  type: EventType;
  myRole: EventRole;
  summary: string;
  whatIDid: string[];
  outcome: string;
  tags: string[];
  images: EventImage[];
  certificateUrl?: string;
  link?: string;
  featured: boolean;
  folderPath: string;
  isPlaceholder?: boolean;
}

export const FLIGHT_LOG_EVENTS: FlightLogEvent[] = [
  {
    id: 'fl-01',
    slug: 'google-prompt-wars',
    title: 'Prompt Wars: Bengaluru (AI Hackathon) — Finalist',
    organizer: 'Google for Developers',
    date: '2026',
    year: 2026,
    location: 'Bengaluru, India',
    type: 'Competition',
    myRole: 'Finalist',
    summary:
      'Official national computational problem-solving and prompt-engineering competition evaluating advanced reasoning architectures, few-shot prompt chaining, and LLM edge-case handling.',
    whatIDid: [
      'Architected complex multi-stage prompt heuristics and evaluation rubrics under strict time constraints.',
      'Designed structured schema output parsers that prevented hallucination in mathematical and logical synthesis tasks.',
      'Demonstrated high accuracy benchmarks across adversarial LLM benchmark prompts.',
    ],
    outcome:
      'Recognized as an official National Finalist by Google for Developers for computational accuracy, prompt architecture, and algorithmic agility.',
    tags: ['Google for Developers', 'Prompt Engineering', 'LLM Architectures', 'Generative AI'],
    folderPath: '/events/google-prompt-wars/',
    images: [
      {
        src: '/events/google-prompt-wars/cover.svg',
        alt: 'Google for Developers Prompt Wars Cover',
        caption: 'Prompt Wars: Bengaluru national AI hackathon stage and telemetry stream.',
      },
      {
        src: '/events/google-prompt-wars/certificate.svg',
        alt: 'Finalist Credential Certificate',
        caption: 'Official Finalist credential awarded by Google for Developers.',
      },
    ],
    link: 'https://developers.google.com',
    featured: true,
  },
  {
    id: 'fl-02',
    slug: 'india-space-lab',
    title: 'Summer Internship & Space Systems Training',
    organizer: 'India Space Lab',
    date: 'Jun — Jul 2026',
    year: 2026,
    location: 'India',
    type: 'Training',
    myRole: 'Participant',
    summary:
      'Intensive aerospace technology training gaining hands-on exposure to drone technology, CanSat/CubeSat micro-payload systems, remote sensing (GIS), rocketry, and disaster management.',
    whatIDid: [
      'Configured micro-payload sensor arrays for environmental monitoring (temperature, pressure, barometric altitude).',
      'Implemented real-time sensor data telemetry packets and radio downlink processing routines.',
      'Studied satellite GIS remote sensing datasets and orbital flight trajectory logging.',
    ],
    outcome:
      'Successfully completed the aerospace technical training program with practical CanSat sensor integration.',
    tags: ['India Space Lab', 'CanSat/CubeSat', 'GIS Remote Sensing', 'Telemetry', 'Aerospace'],
    folderPath: '/events/india-space-lab/',
    images: [
      {
        src: '/events/india-space-lab/cover.svg',
        alt: 'India Space Lab Aerospace Payload Session',
        caption: 'CanSat micro-payload testing and environmental sensor logging array.',
      },
      {
        src: '/events/india-space-lab/certificate.svg',
        alt: 'Training Completion Certificate',
        caption: 'Official Certificate of Space Technology & Systems Training.',
      },
    ],
    featured: true,
  },
  {
    id: 'fl-03',
    slug: 'internshala-ai-ml',
    title: 'Artificial Intelligence & Machine Learning Specialization',
    organizer: 'Internshala Trainings',
    date: '2026',
    year: 2026,
    location: 'Online',
    type: 'Certification',
    myRole: 'Certified',
    summary:
      'Comprehensive technical curriculum covering supervised learning algorithms, convolutional neural networks (CNNs), NLP foundations, and statistical model evaluation.',
    whatIDid: [
      'Implemented regression, classification, and clustering pipelines using Scikit-learn and Python.',
      'Constructed exploratory data visualization workflows with feature engineering and cross-validation.',
      'Trained deep learning models using PyTorch and evaluated accuracy/loss curves.',
    ],
    outcome:
      'Successfully verified and certified in Artificial Intelligence & Machine Learning foundations.',
    tags: ['Machine Learning', 'PyTorch', 'Scikit-learn', 'Feature Engineering'],
    folderPath: '/events/internshala-ai-ml/',
    images: [
      {
        src: '/events/internshala-ai-ml/cover.svg',
        alt: 'AI & ML Training Track Overview',
        caption: 'Machine learning fundamentals, deep learning, and practical modeling.',
      },
      {
        src: '/events/internshala-ai-ml/certificate.svg',
        alt: 'Internshala AI/ML Certificate',
        caption: 'Verified Certificate of Excellence in Artificial Intelligence & Machine Learning.',
      },
    ],
    featured: false,
  },
  {
    id: 'fl-04',
    slug: 'cisco-data-science',
    title: 'Data Science Essentials with Python',
    organizer: 'Cisco Networking Academy',
    date: '2026',
    year: 2026,
    location: 'Online',
    type: 'Certification',
    myRole: 'Certified',
    summary:
      'Industry-accredited foundational certification in computational data science, exploratory data analysis, and statistical programming using Python.',
    whatIDid: [
      'Mastered NumPy and Pandas vectorized operations on high-dimensional datasets.',
      'Formulated statistical hypotheses and evaluated distributions, variance, and correlation matrices.',
      'Constructed reproducible data pipelines for automated dataset preprocessing.',
    ],
    outcome:
      'Achieved verified accreditation from Cisco Networking Academy in Python Data Science Essentials.',
    tags: ['Cisco', 'Data Science', 'Python', 'NumPy', 'Pandas'],
    folderPath: '/events/cisco-data-science/',
    images: [
      {
        src: '/events/cisco-data-science/cover.svg',
        alt: 'Cisco Data Science Essentials',
        caption: 'Python data analysis, statistical modeling, and pipeline development.',
      },
      {
        src: '/events/cisco-data-science/certificate.svg',
        alt: 'Cisco Academy Certificate',
        caption: 'Official Cisco Networking Academy credential in Data Science Essentials.',
      },
    ],
    featured: false,
  },
  {
    id: 'fl-05',
    slug: 'nist-data-analytics',
    title: 'Data Analytics using Python with Power BI & Tableau',
    organizer: 'NIST University',
    date: '2025',
    year: 2025,
    location: 'Berhampur, Odisha, India',
    type: 'Workshop',
    myRole: 'Participant',
    summary:
      'Academic and practical analytics workshop focusing on business intelligence pipelines, visual storytelling, and dashboard generation combining Python, Power BI, and Tableau.',
    whatIDid: [
      'Constructed automated ETL workflows in Python to transform raw transactional data.',
      'Designed interactive business intelligence dashboards in Power BI and Tableau with dynamic KPI filters.',
      'Delivered data-driven presentations on operational metrics and cohort behavior.',
    ],
    outcome:
      'Awarded university credentials for technical excellence in Data Analytics and visual BI pipelines.',
    tags: ['Power BI', 'Tableau', 'Data Analytics', 'Python', 'ETL'],
    folderPath: '/events/nist-data-analytics/',
    images: [
      {
        src: '/events/nist-data-analytics/cover.svg',
        alt: 'NIST Data Analytics Workshop',
        caption: 'Interactive dashboard engineering in Power BI and Tableau with Python backend.',
      },
      {
        src: '/events/nist-data-analytics/certificate.svg',
        alt: 'Data Analytics Certificate',
        caption: 'NIST University Course Certificate in Data Analytics & Visual Intelligence.',
      },
    ],
    featured: false,
  },
  {
    id: 'fl-06',
    slug: 'nist-cpp-oop',
    title: 'Object Oriented Programming with C++',
    organizer: 'NIST University',
    date: '2025',
    year: 2025,
    location: 'Berhampur, Odisha, India',
    type: 'Training',
    myRole: 'Participant',
    summary:
      'Rigorous software engineering course on object-oriented programming principles in C++, memory management, pointer manipulation, and standard template library (STL) data structures.',
    whatIDid: [
      'Implemented custom memory-safe container classes and pointer architectures.',
      'Constructed algorithmic benchmarks for search, sort, and graph traversal in C++.',
      'Applied design patterns (Factory, Observer, Singleton) to modular systems.',
    ],
    outcome:
      'Achieved academic honors and completed all foundational C++ engineering evaluations.',
    tags: ['C++', 'OOP', 'Data Structures', 'STL', 'Systems'],
    folderPath: '/events/nist-cpp-oop/',
    images: [
      {
        src: '/events/nist-cpp-oop/cover.svg',
        alt: 'Object Oriented Programming C++',
        caption: 'C++ memory management, algorithms, and modular OOP architecture.',
      },
      {
        src: '/events/nist-cpp-oop/certificate.svg',
        alt: 'NIST OOP Certificate',
        caption: 'Academic recognition for Object Oriented Programming in C++.',
      },
    ],
    featured: false,
  },
  {
    id: 'fl-07',
    slug: 'todo-candidate-hackathon',
    title: '[TODO: Add Hackathon or Research Paper]',
    organizer: 'TODO: Hosting Organization',
    date: 'TODO: 2026',
    year: 2026,
    location: 'TODO: Location',
    type: 'Hackathon',
    myRole: 'Participant',
    summary:
      '[TODO: Candidate to provide actual event details. Edit in /src/data/events.ts]',
    whatIDid: [
      'TODO: Describe project or problem solved during this event.',
      'TODO: List tools and algorithms implemented.',
    ],
    outcome: '[TODO: Add outcome or award]',
    tags: ['TODO', 'Candidate Slot'],
    folderPath: '/events/todo-candidate-hackathon/',
    images: [
      {
        src: '/events/todo-candidate-hackathon/cover.svg',
        alt: 'Placeholder Slot',
        caption: 'TODO: Drop your photo in /public/events/todo-candidate-hackathon/cover.svg',
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
];

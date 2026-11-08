/**
 * ============================================================================
 * FLIGHT LOG EVENTS DATA STORE
 * ============================================================================
 * 
 * HOW TO ADD A NEW EVENT:
 * 1. Copy the template block below.
 * 2. Fill in your real event details, date, role, outcome, and tags.
 * 3. Place your images in `/public/events/<slug>/`
 *    - Cover: `/public/events/<slug>/cover.jpg` (or .svg/.png)
 *    - Additional shots: `/public/events/<slug>/01.jpg`
 *    - Certificate: `/public/events/<slug>/certificate.jpg`
 * 4. Set `draft: false` when you are ready to publish it publicly.
 *    Any event with `draft: true` will NEVER appear in the public UI.
 * 
 * --- COPY-PASTE EVENT TEMPLATE ---
 * {
 *   id: 'fl-XX',
 *   slug: 'my-event-slug',
 *   title: 'Event / Hackathon / Conference Title',
 *   organizer: 'Hosting Organization or Company',
 *   date: 'Month Year',
 *   year: 2026,
 *   location: 'City, Country or Online',
 *   type: 'Competition', // 'Competition' | 'Hackathon' | 'Workshop' | 'Conference' | 'Training' | 'Certification'
 *   myRole: 'Finalist', // 'Finalist' | 'Winner' | 'Participant' | 'Speaker' | 'Certified' | 'Attendee'
 *   summary: 'High-level description of what this event was and its significance.',
 *   whatIDid: [
 *     'Key technical accomplishment or responsibility 1.',
 *     'Key technical accomplishment or responsibility 2.',
 *     'Key technical accomplishment or responsibility 3.',
 *   ],
 *   outcome: 'Measurable recognition, award, or verified outcome achieved.',
 *   tags: ['Tag 1', 'Tag 2', 'Machine Learning', 'Python'],
 *   folderPath: '/events/my-event-slug/',
 *   images: [
 *     {
 *       src: '/events/my-event-slug/cover.jpg',
 *       alt: 'Event photo description',
 *       caption: 'Caption describing what is shown.',
 *     },
 *   ],
 *   certificateUrl: '/events/my-event-slug/certificate.jpg',
 *   link: 'https://official-event-link.com',
 *   featured: true,
 *   draft: false,
 * },
 * ---------------------------------
 */

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
  draft?: boolean;
}

export const FLIGHT_LOG_EVENTS: FlightLogEvent[] = [
  // 1. Google for Developers Prompt Wars (VERIFIED REAL EVENT)
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
    draft: false,
  },

  // 2. India Space Lab (UNCONFIRMED ENTRY - DRAFT MODE)
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
      'Aerospace technology training gaining hands-on exposure to drone technology, CanSat micro-payload architecture, atmospheric sensor telemetry, and recovery systems.',
    whatIDid: [
      'Configured micro-payload sensor arrays for environmental monitoring.',
      'Implemented real-time sensor data telemetry packets and radio downlink processing routines.',
      'Studied satellite GIS remote sensing datasets and orbital flight trajectory logging.',
    ],
    outcome:
      'Completed aerospace technical training program with practical CanSat sensor integration.',
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
        caption: 'Certificate of Space Technology & Systems Training.',
      },
    ],
    featured: false,
    draft: true, // Marked draft until confirmed
  },

  // 3. Internshala AI/ML (UNCONFIRMED ENTRY - DRAFT MODE)
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
      'Curriculum covering supervised learning algorithms, neural network foundations, and statistical model evaluation.',
    whatIDid: [
      'Implemented regression, classification, and clustering pipelines using Scikit-learn.',
      'Constructed exploratory data visualization workflows with feature engineering.',
      'Trained deep learning models using PyTorch.',
    ],
    outcome:
      'Certified in Artificial Intelligence & Machine Learning foundations.',
    tags: ['Machine Learning', 'PyTorch', 'Scikit-learn'],
    folderPath: '/events/internshala-ai-ml/',
    images: [],
    featured: false,
    draft: true,
  },

  // 4. Cisco Data Science (UNCONFIRMED ENTRY - DRAFT MODE)
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
      'Foundational certification in computational data science and statistical programming using Python.',
    whatIDid: [
      'NumPy and Pandas operations on high-dimensional datasets.',
      'Statistical distributions and correlation matrices.',
      'Data cleaning and preprocessing pipelines.',
    ],
    outcome:
      'Completed Cisco Networking Academy Data Science Essentials course.',
    tags: ['Cisco', 'Data Science', 'Python', 'Pandas'],
    folderPath: '/events/cisco-data-science/',
    images: [],
    featured: false,
    draft: true,
  },

  // 5. NIST Data Analytics (UNCONFIRMED ENTRY - DRAFT MODE)
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
      'Analytics workshop focusing on business intelligence pipelines and dashboard generation combining Python, Power BI, and Tableau.',
    whatIDid: [
      'Constructed automated ETL workflows in Python.',
      'Designed interactive business intelligence dashboards.',
    ],
    outcome:
      'Participated in NIST University technical workshop on Data Analytics.',
    tags: ['Power BI', 'Tableau', 'Data Analytics', 'Python'],
    folderPath: '/events/nist-data-analytics/',
    images: [],
    featured: false,
    draft: true,
  },

  // 6. NIST OOP with C++ (UNCONFIRMED ENTRY - DRAFT MODE)
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
      'Software engineering course on object-oriented programming principles in C++, memory management, and data structures.',
    whatIDid: [
      'Implemented custom memory-safe container classes.',
      'Constructed algorithmic benchmarks in C++.',
    ],
    outcome:
      'Completed Object Oriented Programming in C++ course evaluations.',
    tags: ['C++', 'OOP', 'Data Structures'],
    folderPath: '/events/nist-cpp-oop/',
    images: [],
    featured: false,
    draft: true,
  },
];

/**
 * Filtered helper that returns ONLY publicly published events.
 * Drafts and unconfirmed records are strictly excluded from public view.
 */
export const PUBLIC_FLIGHT_LOG_EVENTS = FLIGHT_LOG_EVENTS.filter((e) => !e.draft);

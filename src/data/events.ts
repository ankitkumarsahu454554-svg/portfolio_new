export type EventType =
  | 'Hackathon'
  | 'Workshop'
  | 'Competition'
  | 'Conference'
  | 'Training'
  | 'Webinar'
  | 'Other';

export type EventRole =
  | 'Attendee'
  | 'Participant'
  | 'Finalist'
  | 'Winner'
  | 'Speaker'
  | 'Organizer'
  | 'Volunteer';

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
  isPlaceholder?: boolean;
}

export const FLIGHT_LOG_EVENTS: FlightLogEvent[] = [
  {
    id: 'fl-01',
    slug: 'google-developers-prompt-wars-finalist',
    title: 'Google for Developers Prompt Wars',
    organizer: 'Google for Developers',
    date: '2026',
    year: 2026,
    location: 'India / Virtual',
    type: 'Competition',
    myRole: 'Finalist',
    summary:
      'National computational problem-solving and prompt-engineering competition evaluating advanced reasoning architectures, few-shot prompt chaining, and LLM edge-case handling.',
    whatIDid: [
      'Architected complex multi-stage prompt heuristics and evaluation rubrics under strict time constraints.',
      'Designed structured schema output parsers that prevented hallucination in mathematical and logical synthesis tasks.',
      'Demonstrated state-of-the-art accuracy benchmarks across adversarial LLM benchmark prompts.',
    ],
    outcome:
      'Recognized as an official National Finalist by Google for Developers for computational accuracy, prompt architecture, and algorithmic agility.',
    tags: ['Google for Developers', 'Prompt Engineering', 'LLM Architectures', 'Generative AI'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'Google Prompt Wars Finalist Recognition',
        caption: 'Finalist recognition certificate and telemetry stream by Google for Developers.',
      },
    ],
    link: 'https://developers.google.com',
    featured: true,
  },
  {
    id: 'fl-02',
    slug: 'cansat-micro-payload-space-lab-2026',
    title: 'CanSat Micro-Payload Telemetry Workshop',
    organizer: 'India Space Lab',
    date: 'Jun — Jul 2026',
    year: 2026,
    location: 'India',
    type: 'Training',
    myRole: 'Participant',
    summary:
      'Hands-on technical engineering on atmospheric telemetry data acquisition, CanSat micro-payload architecture, and GPS sensor streaming.',
    whatIDid: [
      'Engineered data acquisition routines for environmental sensor data logging.',
      'Calibrated barometric altitude calculation scripts and telemetry packets.',
      'Conducted GIS remote sensing analysis on satellite flight recordings.',
    ],
    outcome:
      'Successfully integrated live telemetry downlink routines and completed the space technology training track.',
    tags: ['India Space Lab', 'CanSat', 'Sensors', 'Telemetry', 'Aerospace'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'India Space Lab Telemetry Workshop',
        caption: 'Atmospheric telemetry acquisition session and micro-payload integration.',
      },
    ],
    featured: true,
  },
  {
    id: 'fl-03',
    slug: 'todo-national-hackathon-placeholder',
    title: '[TODO: Replace with Your Hackathon] National AI Hackathon',
    organizer: 'TODO: Organizer Name',
    date: '2026',
    year: 2026,
    location: 'TODO: City / Online',
    type: 'Hackathon',
    myRole: 'Participant',
    summary:
      'TODO: Add summary of the hackathon, problem statement tackled, and technical scope.',
    whatIDid: [
      'TODO: Point 1 - Describe what you built during the hackathon.',
      'TODO: Point 2 - Describe backend/ML algorithms or libraries used.',
      'TODO: Point 3 - Describe team collaboration or demo presentation.',
    ],
    outcome: 'TODO: Describe hackathon outcome, placement, or prototype delivery.',
    tags: ['Hackathon', 'AI/ML', 'FullStack', 'TODO'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'Hackathon Placeholder Image',
        caption: 'TODO: Replace with your actual hackathon project screenshot or team photo.',
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 'fl-04',
    slug: 'todo-technical-symposium-placeholder',
    title: '[TODO: Replace with Your Technical Symposium / Conference]',
    organizer: 'TODO: University / Organization',
    date: '2025',
    year: 2025,
    location: 'TODO: Location',
    type: 'Conference',
    myRole: 'Attendee',
    summary:
      'TODO: Add details about technical papers, keynote sessions, and cutting-edge research topics explored.',
    whatIDid: [
      'TODO: Explored research papers on deep learning architectures.',
      'TODO: Networked with academic researchers and industry engineers.',
    ],
    outcome: 'TODO: Broadened domain knowledge and established technical contacts.',
    tags: ['Research', 'Conference', 'Academic', 'TODO'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'Conference Placeholder Image',
        caption: 'TODO: Replace with conference photograph or badge.',
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 'fl-05',
    slug: 'todo-deep-learning-workshop-placeholder',
    title: '[TODO: Replace with Specialized Workshop / Bootcamp]',
    organizer: 'TODO: Tech Community / University',
    date: '2025',
    year: 2025,
    location: 'Online',
    type: 'Workshop',
    myRole: 'Participant',
    summary:
      'TODO: Advanced workshop on neural networks, GPU training acceleration, or distributed ML.',
    whatIDid: [
      'TODO: Implemented custom neural layers and loss functions.',
      'TODO: Optimized batch normalization and learning rate schedules.',
    ],
    outcome: 'TODO: Completed intensive capstone project with verified certificate.',
    tags: ['Workshop', 'Deep Learning', 'PyTorch', 'TODO'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'Workshop Placeholder Image',
        caption: 'TODO: Replace with workshop certificate or screenshot.',
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 'fl-06',
    slug: 'todo-open-source-summit-placeholder',
    title: '[TODO: Replace with Open Source / Developer Summit]',
    organizer: 'TODO: Tech Community',
    date: '2025',
    year: 2025,
    location: 'Online',
    type: 'Webinar',
    myRole: 'Attendee',
    summary:
      'TODO: Developer session focused on open-source contributions, distributed version control, and system scalability.',
    whatIDid: [
      'TODO: Explored open-source codebase contribution workflows.',
      'TODO: Participated in technical Q&A with maintainers.',
    ],
    outcome: 'TODO: Contributed bug fixes or documentation improvements.',
    tags: ['Open Source', 'Community', 'Git', 'TODO'],
    images: [
      {
        src: '/images/profile.png',
        alt: 'Webinar Placeholder Image',
        caption: 'TODO: Replace with webinar attendance certificate or notes.',
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
];

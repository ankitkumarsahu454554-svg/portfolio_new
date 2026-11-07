export interface NavItem {
  title: string;
  href: string;
  index: string;
  tag: string;
}

export const NAV_ITEMS: NavItem[] = [
  { title: 'INDEX', href: '/', index: '00', tag: 'DISCOVERY' },
  { title: 'PORTFOLIO', href: '/work', index: '01', tag: 'PROJECTS' },
  { title: 'RESUME', href: '/resume', index: '02', tag: 'CURRICULUM' },
  { title: 'ABOUT / PRACTICE', href: '/about', index: '03', tag: 'STUDIO' },
  { title: 'EXPERIMENTS', href: '/experiments', index: '04', tag: 'LAB / R&D' },
  { title: 'CONTACT', href: '/contact', index: '05', tag: 'COMMISSION' },
];

export const SOCIAL_LINKS = [
  { label: 'GITHUB', href: 'https://github.com/ankitkumarsahu454554-svg', handle: '@ankitkumarsahu454554-svg' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/ankit-kumar-sahu-b9117a35b/', handle: 'in/ankit-kumar-sahu' },
  { label: 'EMAIL', href: 'mailto:ankitkumarsahu488526@gmail.com', handle: 'ankitkumarsahu488526@gmail.com' },
];

export const SITE_CONFIG = {
  name: 'LIQUID / FORM',
  subtitle: 'Creative Developer & AI/ML Technologist',
  curator: 'Ankit Kumar Sahu',
  role: 'AI/ML Enthusiast & Creative Developer',
  status: 'AVAILABLE FOR COMMISSIONS & ROLES',
  location: 'INDIA / UTC+05:30',
  coordinates: '20.2961° N, 85.8245° E',
  version: 'SYSTEM v2.8 // METALLIC RUNTIME',
  email: 'ankitkumarsahu488526@gmail.com',
  phone: '+91 7847950588',
  resumePath: '/documents/my-resume.pdf',
  profileImagePath: '/images/profile.png',
};

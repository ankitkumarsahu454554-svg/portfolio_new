export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  client: string;
  category: 'Commercial' | 'Interactive' | 'Creative Tech' | 'R&D';
  tags: string[];
  description: string;
  link?: string;
  metrics?: string;
  accent?: string;
}

export interface Experiment {
  id: string;
  title: string;
  medium: string;
  date: string;
  tech: string[];
  status: 'ONLINE' | 'ARCHIVED' | 'STAGING';
  description: string;
}


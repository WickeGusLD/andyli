export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  date: string;
  description?: string;
  link?: string;
  linkText?: string;
  tags?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string; // Full description for modal
  tags: string[];
  link?: string;
  linkText?: string;
}

export interface Accreditation {
  id: string;
  title: string;
  issuer: string;
  link?: string;
  color?: string;
}

export interface Skill {
  name: string;
  category: 'pedagogy' | 'tech' | 'creative';
}
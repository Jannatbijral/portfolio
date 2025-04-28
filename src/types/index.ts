export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'tool' | 'skill';
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}
export interface MenuItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ContactInfoItem {
  label: string;
  value: string;
  link: string | null;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

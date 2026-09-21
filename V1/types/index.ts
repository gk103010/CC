export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export interface PageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export type ProjectCategory =
  | 'BRANDS'
  | 'DIGITAL EXPERIENCES'
  | 'VISUAL WORLDS'
  | 'EXPERIMENTAL / FUTURE';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  year: number | string;
  description: string;
  thumbnail: string;
  hero: string;
  gallery: string[];
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  video?: string;
  videoPoster?: string;
}


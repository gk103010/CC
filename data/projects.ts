import { Project } from '@/types';

export const FILTER_CATEGORIES = [
  'ALL',
  'BRANDS',
  'DIGITAL EXPERIENCES',
  'VISUAL WORLDS',
  'EXPERIMENTAL / FUTURE',
] as const;

export type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export const sampleProjects: Project[] = [
  {
    id: 'sample-brand-system',
    title: 'SAMPLE BRAND SYSTEM',
    slug: 'sample-brand-system',
    category: 'BRANDS',
    year: '2026',
    description: 'A comprehensive visual identity framework and brand system architecture designed for clarity across digital and physical mediums.',
    thumbnail: 'brands',
    hero: 'brands-hero',
    gallery: ['brands-gallery-1', 'brands-gallery-2'],
    services: ['Brand Strategy', 'Visual Identity System', 'Typography Architecture', 'Brand Guidelines'],
    challenge: 'Establishing a unified visual language for a complex multi-touchpoint brand without losing identity consistency or scalability.',
    solution: 'Engineered a modular typography-led framework with adaptive brand tokens, clear grid systems, and disciplined visual guidelines.',
    result: 'A cohesive brand architecture capable of scaling across digital products, editorial publications, and physical applications.',
  },
  {
    id: 'sample-digital-experience',
    title: 'SAMPLE DIGITAL EXPERIENCE',
    slug: 'sample-digital-experience',
    category: 'DIGITAL EXPERIENCES',
    year: '2026',
    description: 'An interactive web product and editorial digital platform shaped around interaction, precision layout, and web performance.',
    thumbnail: 'digital-experiences',
    hero: 'digital-experiences-hero',
    gallery: ['digital-experiences-gallery-1', 'digital-experiences-gallery-2'],
    services: ['Digital Strategy', 'UI/UX Architecture', 'Front-End Engineering', 'Design System'],
    challenge: 'Creating a high-performance interactive website that balances rich editorial aesthetics with rapid page loads and accessibility.',
    solution: 'Developed a custom component architecture using Next.js, vanilla CSS tokens, and fine-tuned micro-interactions.',
    result: 'A modern, accessible digital product delivering seamless cross-device user experiences with instantaneous interaction response.',
  },
  {
    id: 'sample-visual-world',
    title: 'SAMPLE VISUAL WORLD',
    slug: 'sample-visual-world',
    category: 'VISUAL WORLDS',
    year: '2025',
    description: 'Art direction, spatial visual composition, and motion environments built to communicate complex ideas tangibly.',
    thumbnail: 'visual-worlds',
    hero: 'visual-worlds-hero',
    gallery: ['visual-worlds-gallery-1', 'visual-worlds-gallery-2'],
    services: ['Art Direction', '3D Motion Design', 'Spatial Visuals', 'Visual Storytelling'],
    challenge: 'Translating abstract brand narrative concepts into atmospheric, tangible visual assets and spatial compositions.',
    solution: 'Designed procedural lighting setups, dimensional geometries, and motion sequences that evoke texture, depth, and precision.',
    result: 'An evocative visual asset system utilized across brand key visuals, motion launch films, and spatial displays.',
  },
  {
    id: 'sample-experimental-prototype',
    title: 'SAMPLE EXPERIMENTAL PROTOTYPE',
    slug: 'sample-experimental-prototype',
    category: 'EXPERIMENTAL / FUTURE',
    year: '2026',
    description: 'Exploratory prototype investigating real-time graphics, generative interfaces, and emerging creative technology mediums.',
    thumbnail: 'experimental',
    hero: 'experimental-hero',
    gallery: ['experimental-gallery-1', 'experimental-gallery-2'],
    services: ['Creative Technology', 'R&D', 'Experimental Prototyping', 'Generative Design'],
    challenge: 'Testing the creative boundaries of real-time web graphics and emerging browser capabilities before commercial deployment.',
    solution: 'Built lightweight WebGL prototypes and reactive canvas components to explore non-traditional interface interactions.',
    result: 'A validated technical prototype laying the blueprint for future interactive agency experiences and creative tools.',
  },
];

export function getAllProjects(): Project[] {
  return sampleProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return sampleProjects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'ALL') {
    return sampleProjects;
  }
  return sampleProjects.filter((p) => p.category === category);
}

export function getAdjacentProjects(slug: string): {
  previousProject?: Project;
  nextProject?: Project;
  currentIndex: number;
  totalProjects: number;
} {
  const index = sampleProjects.findIndex((p) => p.slug === slug);
  if (index === -1) {
    return { currentIndex: -1, totalProjects: sampleProjects.length };
  }
  return {
    previousProject: index > 0 ? sampleProjects[index - 1] : undefined,
    nextProject: index < sampleProjects.length - 1 ? sampleProjects[index + 1] : undefined,
    currentIndex: index,
    totalProjects: sampleProjects.length,
  };
}

export default sampleProjects;

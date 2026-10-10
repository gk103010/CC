export interface CapabilityData {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  tag: string;
  relatedProjectSlugs?: string[];
}

export const capabilitiesData: CapabilityData[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy',
    shortDescription: 'Clarifying the position, purpose and direction behind a brand.',
    tag: 'POSITION & PURPOSE',
    relatedProjectSlugs: ['sample-brand-system'],
  },
  {
    id: 'visual-identity',
    number: '02',
    title: 'Visual Identity',
    shortDescription: 'Building a distinct visual language that people recognize.',
    tag: 'SYSTEM & CHARACTER',
    relatedProjectSlugs: ['sample-brand-system'],
  },
  {
    id: 'web-design',
    number: '03',
    title: 'Web Design',
    shortDescription: 'Designing digital experiences with clarity, character and intention.',
    tag: 'INTERACTION & UI',
    relatedProjectSlugs: ['sample-digital-experience'],
  },
  {
    id: 'web-development',
    number: '04',
    title: 'Web Development',
    shortDescription: 'Turning considered design into fast, functional and reliable digital experiences.',
    tag: 'ENGINEERING & CODE',
    relatedProjectSlugs: ['sample-digital-experience'],
  },
  {
    id: 'creative-direction',
    number: '05',
    title: 'Creative Direction',
    shortDescription: 'Bringing the visual, conceptual and experiential direction into focus.',
    tag: 'VISION & ALIGNMENT',
    relatedProjectSlugs: ['sample-visual-world'],
  },
  {
    id: 'motion',
    number: '06',
    title: 'Motion',
    shortDescription: 'Using movement, timing and transition to give ideas expression.',
    tag: 'TIMING & EXPRESSION',
    relatedProjectSlugs: ['sample-visual-world'],
  },
  {
    id: '3d',
    number: '07',
    title: '3D',
    shortDescription: 'Creating spatial forms, environments and visual experiences beyond the flat plane.',
    tag: 'SPATIAL & FORM',
    relatedProjectSlugs: ['sample-visual-world'],
  },
  {
    id: 'film-content',
    number: '08',
    title: 'Film / Content',
    shortDescription: 'Producing visual content that communicates with atmosphere and purpose.',
    tag: 'STORY & ATMOSPHERE',
    relatedProjectSlugs: ['sample-visual-world'],
  },
  {
    id: 'ai-experiences',
    number: '09',
    title: 'AI Experiences',
    shortDescription: 'Exploring intelligent, responsive and emerging ways for people to interact with technology.',
    tag: 'INTELLIGENCE & R&D',
    relatedProjectSlugs: ['sample-experimental-prototype'],
  },
];

export default capabilitiesData;

export interface CapabilityData {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  previewType: 'brands' | 'digital-experiences' | 'visual-worlds' | 'experimental' | 'future';
  relatedWorkNotice: string;
}

export interface CapabilitiesSectionData {
  sectionIndex: string;
  sectionLabel: string;
  heading: string;
  defaultSelectedId: string;
  items: CapabilityData[];
}

export const capabilitiesData: CapabilitiesSectionData = {
  sectionIndex: '03',
  sectionLabel: 'CAPABILITIES',
  heading: 'WHAT WE CREATE',
  defaultSelectedId: 'brands',
  items: [
    {
      id: 'brands',
      number: '01',
      title: 'BRANDS',
      shortDescription: 'Identity systems that give an idea a clear, enduring and recognizable presence.',
      previewType: 'brands',
      relatedWorkNotice: 'Selected brand identity systems will be published here.',
    },
    {
      id: 'digital-experiences',
      number: '02',
      title: 'DIGITAL EXPERIENCES',
      shortDescription: 'Websites and digital products shaped around clarity, interaction and purpose.',
      previewType: 'digital-experiences',
      relatedWorkNotice: 'Selected digital product & web experiences will be published here.',
    },
    {
      id: 'visual-worlds',
      number: '03',
      title: 'VISUAL WORLDS',
      shortDescription: 'Art direction, motion and visual environments built to make ideas tangible.',
      previewType: 'visual-worlds',
      relatedWorkNotice: 'Selected visual worlds & motion projects will be published here.',
    },
    {
      id: 'experimental',
      number: '04',
      title: 'EXPERIMENTAL',
      shortDescription: 'Explorations across emerging creative tools, rapid code prototypes and interactive mechanics.',
      previewType: 'experimental',
      relatedWorkNotice: 'Selected exploratory prototypes & creative technology experiments will be published here.',
    },
    {
      id: 'future',
      number: '05',
      title: 'FUTURE',
      shortDescription: 'Forward-looking concepts, speculative design systems and next-generation digital interfaces.',
      previewType: 'future',
      relatedWorkNotice: 'Selected future-facing concepts & speculative design studies will be published here.',
    },
  ],
};

export default capabilitiesData;

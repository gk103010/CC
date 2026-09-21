export interface DifferenceItemData {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface DifferenceSectionData {
  sectionIndex: string;
  sectionLabel: string;
  headingLine1: string;
  headingLine2: string;
  items: DifferenceItemData[];
}

export const differenceData: DifferenceSectionData = {
  sectionIndex: '02',
  sectionLabel: 'THE DIFFERENCE',
  headingLine1: 'WHAT MAKES',
  headingLine2: 'US CHOSEN?',
  items: [
    {
      id: 'problem',
      number: '01',
      title: 'WE START WITH THE PROBLEM.',
      description: 'Every meaningful project begins by understanding what actually needs to change.',
    },
    {
      id: 'tech',
      number: '02',
      title: 'CREATIVE MEETS TECHNOLOGY.',
      description: 'Strategy, design and technology work together rather than existing in separate silos.',
    },
    {
      id: 'outcome',
      number: '03',
      title: 'WE BUILD FOR THE OUTCOME.',
      description: 'Creative decisions should serve a clear purpose and create meaningful value.',
    },
    {
      id: 'execution',
      number: '04',
      title: 'EXECUTION MATTERS.',
      description: 'An idea is not finished until it has been made, tested and delivered properly.',
    },
  ],
};

export default differenceData;

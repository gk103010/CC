export interface AboutPillar {
  number: string;
  title: string;
  description: string;
}

export interface AboutData {
  sectionIndex: string;
  sectionLabel: string;
  heading: string;
  mainStatement: string;
  paragraphs: string[];
  pillars: AboutPillar[];
}

export const aboutData: AboutData = {
  sectionIndex: '07',
  sectionLabel: 'WHO ARE CHOSEN CREATORS?',
  heading: 'WHO ARE CHOSEN CREATORS?',
  mainStatement:
    'A creative studio built for ambitious brands and complex digital challenges. We bring strategy, design, and technology together into one cohesive direction.',
  paragraphs: [
    'We believe that true impact comes from solving actual problems, not applying superficial treatments. Our work spans positioning, identity systems, digital platforms, and emerging interactive mediums.',
    'By integrating strategic direction with meticulous execution, we eliminate the gap between concept and reality. Every project is an intentional piece of work, designed with clarity, character, and longevity.',
  ],
  pillars: [
    {
      number: '01',
      title: 'STRATEGIC CLARITY',
      description: 'Understanding the core challenge and market position before designing a solution.',
    },
    {
      number: '02',
      title: 'INTENTIONAL EXPRESSION',
      description: 'Form, visual language, and motion crafted with visual discipline and distinct character.',
    },
    {
      number: '03',
      title: 'INTEGRATED INFRASTRUCTURE',
      description: 'Custom front-end engineering built for high speed, stability, and enduring performance.',
    },
  ],
};

export default aboutData;

export interface ProcessStageData {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detail: string;
}

export interface ProcessSectionData {
  sectionIndex: string;
  sectionLabel: string;
  heading: string;
  stages: ProcessStageData[];
}

export const processData: ProcessSectionData = {
  sectionIndex: '04',
  sectionLabel: 'PROCESS',
  heading: 'HOW WE MAKE IT REAL',
  stages: [
    {
      id: 'understand',
      number: '01',
      title: 'UNDERSTAND',
      shortDescription: 'We begin by understanding the problem, the context and what needs to change.',
      detail: 'Root cause investigation • Context mapping • Alignment on core objective',
    },
    {
      id: 'define',
      number: '02',
      title: 'DEFINE',
      shortDescription: 'We establish the direction, priorities and creative strategy before making.',
      detail: 'Creative strategy • Architecture planning • Defining execution standards',
    },
    {
      id: 'create',
      number: '03',
      title: 'CREATE',
      shortDescription: 'We turn the direction into a considered visual, digital or experiential solution.',
      detail: 'Visual identity system • Interface design • Interactive & spatial prototyping',
    },
    {
      id: 'execute',
      number: '04',
      title: 'EXECUTE',
      shortDescription: 'We refine, build, test and deliver the work so the idea can exist in the real world.',
      detail: 'Production engineering • Quality assurance • Launch & real-world deployment',
    },
  ],
};

export default processData;

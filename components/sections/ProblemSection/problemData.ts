export interface ProblemData {
  sectionIndex: string;
  sectionLabel: string;
  statementLine1: string;
  statementLine2: string;
  statementLine3: string;
  statementLine4: string;
  supportingCopy: string;
}

export const problemData: ProblemData = {
  sectionIndex: '01',
  sectionLabel: 'THE PROBLEM',
  statementLine1: 'GOOD IDEAS',
  statementLine2: "AREN'T RARE.",
  statementLine3: 'GOOD EXECUTION',
  statementLine4: 'IS.',
  supportingCopy: 'Ideas are only the beginning. What matters is the thinking, craft and execution required to turn them into something real.',
};

export default problemData;

// The competencies offered on the Mastered Competencies page, based on the CSC 324 portfolio guidelines
// (https://osera.cs.grinnell.edu/csc324/portfolios/).

// What the dropdown lists, in this order, labeled like "Process - Required"
const LIST = [
	['Medium-scale abstraction', 'Required'], ['Medium-scale architecture', 'Required'],
	['Testing strategies', 'Required'], ['Testing infrastructure', 'Required'],
	['Needfinding', 'Required'], ['Ideation', 'Required'], ['Prototyping', 'Required'], ['Evaluation', 'Required'],
	['Infrastructure', 'Required'], ['Self-learning', 'Required'], ['Process', 'Required'], ['Collaboration', 'Required'],
	['Code Cleanliness', 'Advanced'],
	['Testing technologies', 'Advanced'],
	['Accessible design', 'Advanced'],
	['Quality', 'Advanced'],
];

export const COMPETENCIES = LIST.map(([name, level]) => ({ name, label: `${name} - ${level}` }));

export const DEFAULT_COMPETENCY = 'Medium-scale abstraction';

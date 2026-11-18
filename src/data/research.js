// Papers shown on the Research tab. See components/Card.jsx for what each field does.
import { paperLink, posterLink } from './links.js';

export const RESEARCH = [
	{
		title: 'Enhancing Accessibility of a Web-based Scheme IDE to Improve Inclusion in Computing',
		meta: 'First author · TAPIA 2026 · MINK-WIC 2025',
		formats: ['paper', 'poster'],
		summary: 'WCAG 2.1 compliant inclusions to Scamper Scheme IDE: ARIA labels and roles, keyboard-reachable replacements for hover-only controls, shortcut-triggered auto-indentation, and a screen-reader-navigable abstract syntax tree.',
		links: [paperLink('./papers/tapia-2026.pdf'), posterLink('./posters/tapia-2026.pdf')],
	},
	{
		title: 'Visualizing and Sonifying Abstract Syntax Trees for Accessibility',
		meta: 'First author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: "TypeScript abstract syntax trees built from Scamper's parser output, shown as visual and textual views whose nodes are sonified for screen readers (syntax type, nesting level, position) and jump to the matching code.",
		links: [paperLink('https://doi.org/10.1145/3770761.3777158'), posterLink('./posters/sigcse-2026-ast.pdf')],
	},
	{
		title: 'An Innovative Approach to Parsons Problems for Functional Programming',
		meta: 'Co-author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: 'Parsons problems made of nestable drag-and-drop Scheme blocks, generated from annotated template solutions and checked by Scamper for instant feedback.',
		links: [paperLink('https://doi.org/10.1145/3770762.3772625'), posterLink('./posters/sigcse-2026-parsons.pdf')],
	},
	{
		title: "'Born Accessible' Visualizers for Scheme Program State",
		meta: 'Co-author · SIGCSE TS 2026',
		formats: ['paper', 'poster'],
		summary: "A program state visualizer for Scamper's trace feature that draws vectors, lists, pairs, and structs, with sonified elements and keyboard navigation for blind and low-vision students.",
		links: [paperLink('https://doi.org/10.1145/3770761.3777157'), posterLink('./posters/sigcse-2026-visualizers.pdf')],
	},
];

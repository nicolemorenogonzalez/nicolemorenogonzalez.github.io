// The Mastered Competencies page: a dropdown of competencies and the one that is selected.

import { useState } from 'react';
import { COMPETENCIES, DEFAULT_COMPETENCY } from '../data/competencies.js';
import './CompetenciesPage.css';

export default function CompetenciesPage() {
	const [selected, setSelected] = useState(DEFAULT_COMPETENCY);

	return (
		<main id="main">
			<h1>Nicky&rsquo;s Mastered Competencies in the Crafting of the UniCab Project</h1>

			<div className="competency-picker">
				<label htmlFor="competency">Select Competency</label>
				<select id="competency" value={selected} onChange={event => setSelected(event.target.value)}>
					{COMPETENCIES.map(({ name, label }) => <option key={name} value={name}>{label}</option>)}
				</select>
			</div>

			{/* Announced to screen readers when another competency is chosen */}
			<section className="competency-box" aria-live="polite">
				<h2>{selected}</h2>
			</section>
		</main>
	);
}

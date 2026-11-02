// Entry point for the Mastered Competencies page (competencies.html): same styles as the main site.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/base.css';
import './styles/layout.css';
import CompetenciesPage from './competencies/CompetenciesPage.jsx';
import './styles/contrast.css';   // last, so it can override the component styles

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CompetenciesPage />
	</StrictMode>,
);

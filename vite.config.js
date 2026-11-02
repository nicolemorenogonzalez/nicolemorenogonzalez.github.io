import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// base './' makes the built site work from any URL path,
// including a GitHub Pages project site like username.github.io/repo-name.
export default defineConfig({
	base: './',
	plugins: [react()],
	// The site is two pages: the main one and the Mastered Competencies page
	build: {
		rollupOptions: {
			input: {
				main: resolve(import.meta.dirname, 'index.html'),
				competencies: resolve(import.meta.dirname, 'competencies.html'),
			},
		},
	},
});

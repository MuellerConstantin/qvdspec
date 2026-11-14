// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QVD File Format Specification',
			description: 'An independent, open specification of the Qlik QVD file format.',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{ label: 'File structure', slug: 'file-structure' },
				{ label: 'Header', slug: 'header' },
				{ label: 'Symbol tables', slug: 'symbol-table' },
				{ label: 'Index table', slug: 'index-table' },
			],
		}),
	],
});

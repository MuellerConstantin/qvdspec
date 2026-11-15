// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://qvdspec.org',
	integrations: [
		starlight({
			title: 'QVD File Format Specification',
			description: 'An independent, open specification of the Qlik QVD file format.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MuellerConstantin/qvdspec' },
			],
			editLink: {
				baseUrl: 'https://github.com/MuellerConstantin/qvdspec/edit/main/',
			},
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});

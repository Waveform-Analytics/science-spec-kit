// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://waveform-analytics.github.io',
	base: '/science-spec-kit/',
	integrations: [
		starlight({
			title: 'Science Spec-Kit',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Waveform-Analytics/science-spec-kit',
				},
			],
			sidebar: [
				{ label: 'Introduction', slug: 'index' },
				{ label: 'Quickstart', slug: 'quickstart' },
			],
		}),
	],
});

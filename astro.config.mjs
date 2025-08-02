// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'
import Icons from 'unplugin-icons/vite'



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian({
				backlinks: false,
				graph: false
			})],
			title: 'My Docs',
			logo: {
				src: './src/assets/logo-small.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/airismlabs' },
				{ icon: 'x.com', label: 'X', href: 'https://github.com/airismlabs' }
			],
			components: {
				// Override the default Footer component
			},
			sidebar: [
				{
					label: 'Meet Airism',
					autogenerate: { directory: 'welcome' },
				},
				{
					label: 'Kit',
					autogenerate: { directory: 'kit' },
				},
				{
					label: 'Studio',
					autogenerate: { directory: 'Studio' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			credits: false,
			lastUpdated: false,
		}),
	],
	vite: {
		plugins: [Icons({ compiler: 'astro' })],
	},
});

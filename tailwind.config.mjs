/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'header': '#14181c',
				'tool-tip': '#445566'
			},
			colors: {
				'primary': '#99aabb',
			}
		},
	},
	plugins: [],
}

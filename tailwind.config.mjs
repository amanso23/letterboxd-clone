/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'header': '#14181c',
				'tool-tip': '#445566',
				'gray-accent-1': '#2c3440',
				'footer': '#2c3440'
			},
			colors: {
				'primary': '#99aabb',
			},
			boxShadow: {
				'xs': '0 0.4px 0 #414d5e'
			}
		},
	},
	plugins: [],
}

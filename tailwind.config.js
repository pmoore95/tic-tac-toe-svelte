/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'dela-gothic': ['DelaGothic', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
};

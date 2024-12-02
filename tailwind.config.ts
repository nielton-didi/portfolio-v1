import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sf-pro': ['SF Pro', 'sans-serif']
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},
			fontSize: {
				xs: '10px',
				sm: '11px',
				base: '12px',
				md: '14px',
				lg: '16px',
				xl: '20px',
				'2xl': '28px',
				headline: '128px'
			},
			colors:{
				dark:{
					neutral:{
						0: "#101010",
						10: "#121212",
						20: "#1E1E1E",
						30: "#292929",
						40: "#353535",
						50: "#424242",
						60: "#4E4E4E",
						70: "#5B5B5B",
						80: "#696969",
						90: "#989898",
						100: "#CACACA",
						110: "#FFFFFF"
					},
					primary:{
						0: "#asdf",
						10: "#asdf",
						20: "#asdf",
						30: "#asdf",
					}
				},
				light:{
					neutral:{
						0: "#FFFFFF",
						10: "#F1F1F1",
						20: "#E3E3E3",
						30: "#D5D5D5",
						40: "#C7C7C7",
						50: "#A8A8A8",
						60: "#8A8A8A",
						70: "#6D6D6D",
						80: "#515151",
						90: "#373737",
						100: "#1E1E1E",
						110: "#101010"
					},
					primary:{
						0: "#asdf",
						10: "#asdf",
						20: "#asdf",
						30: "#asdf",
					}
				},
			}
		}
	},

	plugins: []
} satisfies Config;

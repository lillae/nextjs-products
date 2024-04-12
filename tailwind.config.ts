import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1268px',
			'1xl': '1440px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				background: '#F5F5F5',
				accent: '#6100FF',
				primary: '#323232',
				black: {
					1: 'rgba(0,0,0,1)',
					6: 'rgba(0,0,0,0.6)',
					9: 'rgba(0,0,0,0.9)',
				},
				'star-light': '#D9D9D9',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			lineHeight: {
				heading: '1.35',
			},
			maxWidth: {
				wrapper: '1268px',
			},
			objectPosition: {
				95: '95% 50%',
			},
			spacing: {
				13: '49px',
			},
		},
	},
	plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: '#2563eb',
							textDecoration: 'none',
							'&:hover': {
								textDecoration: 'underline',
							},
						},
						img: {
							display: 'inline-block',
						},
						hr: {
							borderColor: '#9cs3af',
							marginTop: '2em',
							marginBottom: '2em',
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		screens: {
			...defaultTheme.screens,
			xs: '480px', // phones
		},
		container: {
			center: true,
			padding: '20px',
			screens: {
				xl: '1200px',
			},
		},

		colors: {
			white: colors.white,
			gray: {
				100: '#F8F9FC',
				400: '#59657E',
				700: '#122345cc',
			},
			blue: {
				500: '#2F76FF',
				900: '#122345',
			},
		},
		extend: {
			spacing: {
				4.5: '1.125rem',
			},
			backgroundImage: {
				'main-bg': "url('/assets/images/main-bg.png')",
			},
		},
	},
	fontFamily: {
		inter: ['Inter', ...defaultTheme.fontFamily.sans],
		'generalSans-semibold': [
			'GeneralSans-semibold',
			...defaultTheme.fontFamily.sans,
		],
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addComponents, addBase, theme }) {
			addComponents({
				'.btn': {
					height: '2.25rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '0.875rem',
					fontWeight: 500,
					padding: '0.375rem 0.75rem',
					borderRadius: '0.375rem',
					color: theme('colors.gray[700]'),
					gap: '0.5rem',
				},
				'.btn-border': {
					boxShadow:
						'0 5px 4.5px -1px rgba(18, 35, 69, 0.04), 0 1px 2px 0 rgba(18, 35, 69, 0.05), 0 0 0 1px rgba(18, 35, 69, 0.08)',
					backgroundColor: theme('colors.white'),
				},
				'.btn-primary': {
					boxShadow:
						'0 1px 2px 0 rgba(18, 35, 69, 0.08), 0 0 0 1px rgba(22, 83, 202, 0.8), 0 2px 4.3px -1px rgba(22, 83, 202, 0.4)',
					backgroundColor: theme('colors.blue[500]'),
					color: theme('colors.white'),
				},
				'.btn-m': {
					height: '2.937rem',
				},
			}),
				addBase({
					h1: {
						fontFamily: 'GeneralSans-semibold',
						fontSize: '3.25rem',
						fontWeight: 600,
						fontStretch: 'normal',
						fontStyle: 'normal',
						lineHeight: '3.81rem',
						color: theme('colors.blue[900]'),
					},
				})
		}),
	],
}

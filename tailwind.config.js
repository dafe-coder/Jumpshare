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
			yellow: {
				500: '#FBC045',
			},
			gray: {
				100: '#F8F9FC',
				150: '#D3D6DC',
				400: '#59657E',
				700: '#122345cc',
			},
			blue: {
				500: '#2F76FF',
				900: '#122345',
				950: '#130c3e',
			},
			violet: {
				500: '#6259EB',
				900: '#130c3ecc',
			},
		},
		extend: {
			letterSpacing: {
				0.4: '-0.4px',
				0.13: '-0.13px',
				0.14: '-0.14px',
				0.16: '-0.16px',
				normal: '-0.32px',
			},
			borderRadius: {
				'2.5xl': '20px',
			},
			boxShadow: {
				'inset-3xl':
					'inset 0px -0.876389px 0.876389px 0.876389px rgba(17, 34, 69, 0.12)',
				card: '0 2px 8px -1px #130c3e0a, inset 0 3px 0 -1px #ffffff75, 0 0 0 1px #130c3e1c, 0 4px 4px -5px #130c3e40;',
			},
			dropShadow: {
				'3xl':
					'drop-shadow(0px 0.876389px 7.01111px rgba(13, 34, 71, 0.08)) drop-shadow(0px -1.85479px 19.4753px rgba(0, 0, 0, 0.05))',
			},
			spacing: {
				4.5: '1.125rem', // 18px
				13: '3.25rem', // 52px
				15.5: '3.875rem', // 62px
				30: '7.5625rem', // 121px
			},
			backgroundImage: {
				'main-bg': "url('/assets/images/main-bg.png')",
				// 'main-card-gradient': "url('/assets/images/bg-card-blue.png')",
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
					cursor: 'pointer',
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
				'.btn-long': {
					display: 'flex',
					alignItems: 'center',
					height: '2.25rem',
					padding: '0 1rem',
					color: theme('colors.white'),
					gap: '0.5rem',
					borderRadius: '5.625rem',
					fontSize: '1.125rem',
					backgroundColor: theme('colors.violet[500]'),
					fontWeight: 500,
					lineHeight: '1.25rem',
					letterSpacing: '-0.36px',
				},
				'.btn-m': {
					height: '2.937rem',
				},
				'.replies-avatars': {
					display: 'flex',
					paddingRight: '0.625rem',
					'> li': {
						borderWidth: '2px',
						borderColor: theme('colors.gray[100]'),
						position: 'relative',
						marginRight: '-0.625rem',
						display: 'block',
						width: theme('spacing[9]'),
						height: theme('spacing[9]'),
						borderRadius: '9999px',
						overflow: 'hidden',
						backgroundColor: theme('colors.yellow[500]'),
						// '@media not all and (min-width: 768px)': {
						// 	display: 'none',
						// 	'&:first-child': {
						// 		display: 'block',
						// 	},
						// },
						'&:nth-child(1)': {
							zIndex: 5,
						},
						'&:nth-child(2)': {
							zIndex: 4,
						},
						'&:nth-child(3)': {
							zIndex: 3,
						},
						'&:nth-child(4)': {
							zIndex: 2,
						},
						'&:nth-child(5)': {
							zIndex: 1,
						},
					},
					'> img': {
						objectFit: 'cover',
						height: '100%',
						width: '100%',
					},
				},
				'.main-gradient': {
					backgroundImage:
						'linear-gradient(180deg, rgba(74,122,236,1) 0%, rgba(74,113,241,1) 36%, rgba(78,119,206,0) 93%)',
				},
				'.card-gradient': {
					backgroundImage:
						'linear-gradient(to bottom, #f3f0ff -8%, #efebff00 53%), linear-gradient(to bottom, #fff, #fff);',
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
						letterSpacing: '-1.56px',
						color: theme('colors.blue[900]'),
					},
					h2: {
						fontSize: '3rem',
						fontWeight: 600,
						fontStretch: 'normal',
						fontStyle: 'normal',
						lineHeight: '3.75rem',
						letterSpacing: '-1.44px',
						color: theme('colors.blue[950]'),
					},
					h3: {
						fontSize: '2rem',
						fontWeight: 600,
						lineHeight: '2.4rem',
						letterSpacing: '-0.32px',
						color: theme('colors.blue[950]'),
					},
				})
		}),
	],
}

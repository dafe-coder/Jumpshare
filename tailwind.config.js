/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		screens: {
			...defaultTheme.screens,
			md: '790px', // phones
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
			black: colors.black,
			yellow: {
				400: '#DDB51E',
				500: '#FBC045',
				600: '#FFBC03',
			},
			gray: {
				50: '#FBFBFD',
				100: '#F8F9FC',
				110: '#f1f2f5',
				125: '#E8E9ED',
				130: '#D9DEE7',
				150: '#D3D6DC',
				300: '#999cb2',
				400: '#59657E',
				500: '#495057',
				700: 'rgba(18, 35, 69, 0.8)',
				850: 'rgba(18, 35, 69, 0.08)',
			},
			orange: {
				100: '#faf6f3',
				500: '#FE6E2B',
				900: 'rgba(30, 12, 4, 0.8)',
				950: '#1e0c04',
			},
			blue: {
				100: '#f2f6ff',
				500: '#2F76FF',
				600: '#4C78EA',
				700: '#1c5ddf',
				900: '#122345',
				950: '#130c3e',
				970: 'rgba(9, 19, 41, 0.8)',
				1000: '#091329',
			},
			violet: {
				500: '#6259EB',
				600: '#9452FF',
				800: '#130c3ecc',
				850: '#181729',
				900: '#060515',
			},
		},
		extend: {
			animation: {
				fade: 'fadeIn .3s ease-in-out forwards',
				fadeOut: 'fadeOut .3s ease-in-out forwards',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				fadeOut: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
			},
			ringWidth: {
				2.5: '2.5px',
			},
			fontFamily: {
				'sans-semi': ['GeneralSans-semibold', ...defaultTheme.fontFamily.sans],
				'sans-variable': [
					'GeneralSans-Variable',
					...defaultTheme.fontFamily.sans,
				],
				'sans-medium': ['GeneralSans-medium', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				'2.5xl': ['1.75rem', '2.45rem'],
				m: ['0.9375rem', '1.5rem'],
				s: ['0.8125rem', '1.0562rem'],
			},
			lineHeight: {
				5.5: '1.4rem', // 22.4px
				6: '1.575rem', // 25.2px
				9.5: '2.4rem', // 38.4px
			},
			zIndex: {
				1: '1',
			},
			backgroundPosition: {
				'center-top': 'center top',
			},
			letterSpacing: {
				0.4: '-0.4px',
				0.13: '-0.13px',
				0.14: '-0.14px',
				0.16: '-0.16px',
				0.18: '-0.18px',
				0.22: '-0.22px',
				0.24: '-0.24px',
				normal: '-0.32px',
				base: 'normal',
				0.36: '-0.36px',
				0.56: '-0.56px',
				0.96: '-0.96px',
				1.44: '-1.44px',
				1.56: '-1.56px',
			},
			borderRadius: {
				'2.5xl': '20px',
			},
			boxShadow: {
				'inset-3xl':
					'inset 0px -0.876389px 0.876389px 0.876389px rgba(17, 34, 69, 0.12)',
				card: '0 2px 8px -1px #130c3e0a, 0 0 0 1px #130c3e1c, 0 4px 4px -5px #130c3e40;',
				'card-dark': '0px 1px 7px rgba(15, 28, 53, 0.04)',
				'card-orange':
					'0px 4px 4px -5px rgba(30, 12, 4, 0.25), 0px 0px 0px 1px rgba(34, 14, 5, 0.08), 0px 1px 7px rgba(30, 12, 4, 0.04)',
				'card-white':
					'0px 1px 6.3px -1px rgba(18, 35, 69, 0.1), 0px 0px 0px 1px rgba(18, 35, 69, 0.075)',
				img: '0 23.8px 30.3px 0 #0f1c3511, 0 0 0 0.8px #12234513, 0 0.8px 5px -0.8px #12234519, 0 3.2px 3.2px -4px #12234540, 0 0.8px 1.6px 0 #1223450f, 0 -2px 20.6px 0 #0000000c',
				banner:
					'0px 1px 3px rgba(18, 35, 69, 0.1), 0px 1px 2px rgba(18, 35, 69, 0.06), inset 0px 0px 0px 1px rgba(18, 35, 69, 0.1)',
				social:
					' 0px 6px 4px -2px rgba(18, 35, 69, 0.03), 0px 5.01227px 40.0982px -1px rgba(100, 109, 134, 0.06), 0px 1px 2px rgba(18, 35, 69, 0.05), 0px 0px 0px 1px rgba(217, 222, 231, 0.4)',
				'menu-item':
					'0px 2px 7px -1px rgba(15, 28, 53, 0.04),inset 0px 3px 0px -1px rgba(255, 255, 255, 0.46),inset 0px 0px 0px 1px rgba(18, 35, 69, 0.1),0px 11.47px 23.78px -5.02px rgba(18, 35, 69, 0.07)',
				video:
					'0px 11.4701px 23.7768px -5.01619px rgba(18, 35, 69, 0.07), inset 0px -0.866597px 0.866597px 0.866597px rgba(17, 34, 69, 0.12)',
			},
			dropShadow: {
				'3xl':
					'drop-shadow(0px 0.876389px 7.01111px rgba(13, 34, 71, 0.08)) drop-shadow(0px -1.85479px 19.4753px rgba(0, 0, 0, 0.05))',
			},
			spacing: {
				4.5: '1.125rem', // 18px
				13: '3.25rem', // 52px
				15.5: '3.875rem', // 62px
				16.5: '4.25rem', // 68px
				17: '4.5rem', // 72px
				22: '5.625rem', // 90px
				25: '105px', // 105px
				30: '7.5625rem', // 121px
				34: '8.5rem', // 136px
			},
			backgroundImage: {
				main: "url('/assets/images/main-bg.png')",
				'card-right': "url('/assets/images/bg-card-right.png')",
				'card-left-orange': "url('/assets/images/card-bg-orange.png')",
				'card-right-blue': "url('/assets/images/card-bg-blue.png')",
				'video-ai': "url('/assets/images/video-ai-bg.png')",
				'card-dark-center': "url('/assets/images/bg-card-dark.png')",
				'banner-round': "url('/assets/images/banner-bg.png')",
				// 'main-card-gradient': "url('/assets/images/bg-card-blue.png')",
			},
		},
	},
	fontFamily: {
		inter: ['Inter'],
		'sans-medium': ['GeneralSans-semibold', ...defaultTheme.fontFamily.sans],
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('tailwind-hamburgers'),
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
					position: 'relative',
				},
				'.btn-hover-right': {
					paddingRight: '2.75rem !important',
					svg: {
						position: 'absolute',
						transition: 'all ease-in-out .2s',
						right: '1.25rem',
						top: '50%',
						transform: 'translateY(-50%)',
					},
					'&:hover': {
						svg: {
							right: '15px',
						},
					},
				},
				'.btn-long-hover-right': {
					paddingRight: '2.5rem !important',
					svg: {
						position: 'absolute',
						transition: 'all ease-in-out .2s',
						right: '1rem',
						top: '50%',
						transform: 'translateY(-50%)',
					},
					'&:hover': {
						svg: {
							right: '0.75rem',
						},
					},
				},
				'.btn-border': {
					boxShadow:
						'0 5px 4.5px -1px rgba(18, 35, 69, 0.04), 0 1px 2px 0 rgba(18, 35, 69, 0.05), 0 0 0 1px rgba(18, 35, 69, 0.08)',
					backgroundColor: theme('colors.white'),
					transition: 'all ease .2s',
					'&:hover': {
						backgroundColor: theme('colors.gray[100]'),
					},
				},
				'.btn-primary': {
					boxShadow:
						'0 1px 2px 0 rgba(18, 35, 69, 0.08), 0 0 0 1px rgba(22, 83, 202, 0.8), 0 2px 4.3px -1px rgba(22, 83, 202, 0.4)',
					backgroundColor: theme('colors.blue[500]'),
					color: theme('colors.white'),
					transition: 'all ease .2s',
					'&:hover': {
						backgroundColor: theme('colors.blue[700]'),
					},
				},
				'.btn-long': {
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					height: '2.25rem',
					padding: '0 1rem',
					color: theme('colors.white'),
					backgroundColor: theme('colors.violet[500]'),
					gap: '0.5rem',
					borderRadius: '5.625rem',
					fontSize: '1.125rem',
					fontWeight: 500,
					lineHeight: '1.25rem',
					letterSpacing: '-0.36px',
				},
				'.btn-gradient': {
					backgroundImage:
						'linear-gradient(to bottom, #9452ff, #9452ff), linear-gradient(to bottom, #9c5fff, #d884ff), linear-gradient(to bottom, #9059eb, #bc59eb), linear-gradient(to bottom, #fff, #fff)',
				},
				'.btn-m': {
					height: '2.937rem',
				},
				'.replies-avatars': {
					display: 'flex',
					paddingRight: '0.5625rem',
					'> li': {
						borderWidth: '2px',
						borderColor: theme('colors.gray[100]'),
						position: 'relative',
						marginRight: '-0.5625rem',
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
						'linear-gradient(180deg, rgba(243, 240, 255, 0.5) -7.92%, rgba(239, 235, 255, 0) 53.46%)',
				},
				'.card-gradient-orange': {
					backgroundImage:
						'linear-gradient(180deg, rgba(255, 247, 240, 0.5) -7.92%, rgba(239, 235, 255, 0) 53.46%)',
				},
				'.card-gradient-blue': {
					backgroundImage:
						'linear-gradient(180deg, rgba(219, 232, 255, 0.6) -7.92%, rgba(219, 232, 255, 0) 53.46%)',
				},
				'.gradient-white': {
					backgroundImage:
						'linear-gradient(180deg, rgba(255,255,255,0) 24%, rgba(255,255,255,1) 100%)',
				},
				'.banner-gradient-top': {
					backgroundImage:
						'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100.65%)',
					opacity: 0.6,
				},
				'.banner-gradient-bottom': {
					backgroundImage:
						'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
					opacity: 0.6,
				},
				'.card-title': {
					fontSize: '1.375rem',
					letterSpacing: '-0.22px',
					lineHeight: '1.65rem',
					fontFamily: 'GeneralSans-semibold',
					color: theme('colors.blue[950]'),
					'@media not all and (min-width: 480px)': {
						fontSize: '1rem !important',
						lineHeight: '1.3rem !important',
					},
				},
			}),
				addBase({
					h1: {
						fontFamily: 'GeneralSans-semibold',
						fontSize: '3.25rem',
						fontWeight: 600,
						lineHeight: '3.81rem',
						letterSpacing: '-1.56px',
						color: theme('colors.blue[900]'),
						'@media not all and (min-width: 480px)': {
							fontSize: '2.25rem',
							fontWeight: 600,
							lineHeight: '2.6437rem',
							textAlign: 'center',
						},
					},
					h2: {
						fontFamily: 'GeneralSans-semibold',
						fontSize: '3rem',
						textAlign: 'center',
						fontWeight: 600,
						fontStretch: 'normal',
						fontStyle: 'normal',
						lineHeight: '3.75rem',
						letterSpacing: '-1.44px',
						color: theme('colors.blue[950]'),
						'@media not all and (min-width: 640px)': {
							fontFamily: 'GeneralSans-medium',
							fontSize: '2.25rem',
							lineHeight: '2.8125rem',
							letterSpacing: '-1.08px',
						},
					},
					h3: {
						fontFamily: 'GeneralSans-semibold',
						fontSize: '2rem',
						fontWeight: 600,
						lineHeight: '2.4rem',
						letterSpacing: '-0.32px',
						color: theme('colors.blue[950]'),
						'@media not all and (min-width: 640px)': {
							fontSize: '1.4rem',
							lineHeight: '1.7rem !important',
						},
					},
					h4: {
						fontSize: '1.375rem',
						letterSpacing: '-0.22px',
						lineHeight: '1.65rem',
						fontFamily: 'GeneralSans-semibold',
						color: theme('colors.blue[950]'),
						'@media not all and (min-width: 640px)': {
							fontSize: '1rem',
							lineHeight: '1.3rem',
						},
					},
				})
		}),
	],
}

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ theme }) {
}, {
	theme: {
		fontSize: {
			xs: ['0.6875rem', { lineHeight: '1rem' }],
			sm: ['0.75rem', { lineHeight: '1rem' }],
			base: ['0.875rem', { lineHeight: '1.25rem' }],
			lg: ['1rem', { lineHeight: '1.5rem' }],
			xl: ['1.375rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['1.75rem', { lineHeight: '2.25rem' }],
			'4xl': ['2rem', { lineHeight: '2.5rem' }],
			'5xl': ['2.25rem', { lineHeight: '2.75rem' }],
			'6xl': ['2.8125rem', { lineHeight: '3.25rem' }],
			'7xl': ['3.5625rem', { lineHeight: '4rem' }]
		},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			zIndex: {
				drawer: '100'
			},
			colors: {
				surface: {
					DEFAULT: 'hsla(315, 100%, 99%, 1)',
					inverse: 'hsla(255, 7%, 11%, 1)',
					variant: 'hsla(275, 55%, 96%, 1)',
					variantInverse: 'hsla(264, 7%, 29%, 1)'
				},
				primary: {
					DEFAULT: 'hsl(256, 34%, 48%)',
					0: 'hsl(0, 0%, 0%)',
					10: 'hsl(261, 100%, 18%)',
					20: 'hsl(259, 58%, 28%)',
					30: 'hsl(257, 43%, 38%)',
					40: 'hsl(256, 34%, 48%)',
					50: 'hsl(257, 40%, 50%)',
					60: 'hsla(256, 55%, 68%, 1)',
					70: 'hsla(256, 87%, 79%, 1)',
					80: 'hsla(258, 100%, 87%, 1)',
					90: 'hsla(263, 100%, 93%, 1)',
					95: 'hsla(270, 100%, 96%, 1)',
					99: 'hsla(315, 100%, 99%, 1)',
					100: 'hsla(0, 0%, 100%, 1)'
				},
				neutral: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsla(255, 7%, 11%, 1)',
					20: 'hsla(260, 3%, 19%, 1)',
					30: 'hsla(280, 2%, 28%, 1)',
					40: 'hsla(276, 3%, 37%, 1)',
					50: 'hsla(285, 2%, 47%, 1)',
					60: 'hsla(285, 2%, 57%, 1)',
					70: 'hsla(300, 2%, 67%, 1)',
					80: 'hsla(288, 5%, 78%, 1)',
					90: 'hsla(312, 9%, 89%, 1)',
					95: 'hsla(300, 19%, 95%, 1)',
					99: 'hsla(315, 100%, 99%, 1)',
					100: 'hsla(0, 0%, 100%, 1)',
				},
				neutralVariant: {
					0: 'hsl(0, 0%, 0%)',
					10: 'hsla(263, 13%, 12%, 1)',
					20: 'hsla(263, 8%, 20%, 1)',
					30: 'hsla(264, 7%, 29%, 1)',
					40: 'hsla(260, 5%, 38%, 1)',
					50: 'hsla(270, 4%, 47%, 1)',
					60: 'hsla(264, 5%, 58%, 1)',
					70: 'hsla(267, 7%, 68%, 1)',
					80: 'hsla(270, 11%, 79%, 1)',
					90: 'hsla(275, 24%, 90%, 1)',
					95: 'hsla(275, 55%, 96%, 1)',
					99: 'hsla(315, 100%, 99%, 1)',
					100: 'hsla(0, 0%, 100%, 1)'
				},
				outline: {
					DEFAULT: 'hsla(270, 4%, 47%, 1)',
					variant: 'hsla(270, 11%, 79%, 1)'
				}
			}
		}
	}
})
;

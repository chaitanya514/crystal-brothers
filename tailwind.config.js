const plugin = require('@tailwindcss/typography');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.green.600'),
              '&:hover': {
                color: theme('colors.green.800'),
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: theme('colors.green.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [plugin],
};

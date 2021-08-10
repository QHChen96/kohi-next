const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
        'container': '1200px',
      },
      colors: colors,
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      width: {
        '200px': '200px',
        '50px': '50px'
      },
      maxHeight: {
        'menu': 'calc(100vh - var(--header-height))'
      },
      height: {
        'header': 'var(--header-height)',
        'menu': 'calc(100vh - var(--header-height))'
      },
      visibility: ['hover'],
      boxShadow: {
        'under': '0 -1p rgba(0,0,0,0.05) inset'
      }
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
}

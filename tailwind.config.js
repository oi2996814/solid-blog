module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-peri': '#6567ab',
        'tailwind-css': '#38bdf7',
        'post-subtitle': '#191919',
      },
      boxShadow: {
        'sticky-nav': '0px 0px 10px 5px rgba(26,26,26,0.3)',
      },
      fontFamily: {
        logo: ['Orbitron', 'Righteous'],
      },
    },
  },
  variants: {},
  plugins: [],
}

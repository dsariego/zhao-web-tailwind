module.exports = {
  content: [
    './src/*.{html}',
    './src/assets/**/*.{html,js,scss}',
    './src/index.html'
  ],
  purge: [
    './src/*.html'
  ],
  darkMode: false, // or 'media' or 'class',
  theme: {
    screens: {
      'mb': '680px', //mobile -> @media (min-width: 680px)
      'lp': '1000px', //laptop -> @media (min-width: 1060px)
      'ds': '1440px', //desktop -> @media (min-width: 1440px)
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pri: {
        lightest: '#f0e9d2',
        light: '#e6ddc4',
        dark: '#678983',
        darkest: '#181D31',
      },
      'bgart': 'rgba(103, 137, 131, 0.7)',
      'white': '#FFFFFF',
      'black': '#000000',
      'alink': 'rgba(24, 24, 49, 0.6)',
      'borde': 'rgba(20, 20, 20, 0.2)'
    },
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
      'serif': ['Noto Serif Display', 'serif'],
    },
    extend: {
      backgroundImage: {
        'pattern': "url('../images/dust-overlay.png');",
      },
    },
  },
  boxShadow: {
    'sha': '0 0 10px rgba(0, 0, 0, 0.4)'
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

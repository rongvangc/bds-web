module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      // => @media (min-width: 360px) { ... }
      sm: '480px',
      // => @media (min-width: 480px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#12004f',
      secondary: '#e04946',
      tertiary: '#37a5e5',
      red: '#c2525c',
      green: '#3d8860',
      lightRed: '#e3aaad',
      lightGreen: '#a7d1bb',
      white: '#ffffff',
      black: '#484848',
      gray: '#cecece',
    },
  },
  plugins: [],
};

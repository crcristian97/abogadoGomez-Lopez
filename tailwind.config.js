/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2F45',
        secondary: '#CBA240',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B9C2',
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#111111',
          800: '#222222',
          700: '#333333',
          100: '#EEEEEE',
        },
        accent: {
          600: '#C2B078',
          500: '#D3C189',
          400: '#E1D0A3',
          300: '#EFDEBD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
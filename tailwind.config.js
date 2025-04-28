/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#c7e3ff',
          300: '#a1d0ff',
          400: '#75b5ff',
          500: '#4a96ff',
          600: '#2575f5',
          700: '#1d62e0',
          800: '#1c4fb5',
          900: '#1d468e',
        },
        accent: {
          50: '#fcf4ff',
          100: '#f8eaff',
          200: '#f2d4ff',
          300: '#e9b2ff',
          400: '#dd83ff',
          500: '#c953fa',
          600: '#b135e8',
          700: '#9624c8',
          800: '#7e20a3',
          900: '#671e85',
        },
        pastel: {
          blue: '#e0f0ff',
          purple: '#f0e6ff',
          pink: '#fff0f7',
          mint: '#e6fff0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
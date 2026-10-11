/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14213D',
        },
        slate: {
          DEFAULT: '#52627D',
        },
        primary: {
          DEFAULT: '#2563EB',
        },
        accent: {
          DEFAULT: '#7357F6',
        },
        pale: {
          DEFAULT: '#F3F7FF',
        },
        success: {
          DEFAULT: '#22C997',
        },
        borderLight: {
          DEFAULT: '#E5EAF3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 33, 61, 0.08)',
        'premium': '0 10px 40px -10px rgba(37, 99, 235, 0.15)',
      }
    },
  },
  plugins: [],
}

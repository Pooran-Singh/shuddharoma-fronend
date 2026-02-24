import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf6ef',
          100: '#f3ebdd',
        },
        sandal: {
          400: '#c79b6b',
          500: '#b8895d',
        },
        forest: {
          600: '#42614f',
          700: '#2f4b3d',
        },
        gold: {
          400: '#d8b76a',
          500: '#c39a44',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 45px -25px rgba(59, 40, 20, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;

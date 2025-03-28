/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c7fc',
          400: '#809df9',
          500: '#4d74f5',
          600: '#2e4feb',
          700: '#2240dc',
          800: '#2035b3',
          900: '#1f318e',
          950: '#162052',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 
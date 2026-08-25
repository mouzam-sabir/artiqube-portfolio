/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1A33',
        orange: '#F05A28',
        gold: '#FFB81C',
        white: '#FFFFFF',
        light: '#F7F9FC',
        dark: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

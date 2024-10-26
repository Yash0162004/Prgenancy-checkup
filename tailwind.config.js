/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aashira: {
          bg: '#FAF7F2',
          primary: '#4A5F41',
          accent: '#FFC5A0',
          text: '#534B42',
          textSecondary: '#8B7355',
        }
      }
    },
  },
  plugins: [],
}
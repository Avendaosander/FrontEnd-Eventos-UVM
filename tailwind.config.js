/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'iconUser': "url('../public/img/user.svg')",
      }
    },
    textColor: { 
      'titNav':"#04740c",
    },
  },
  plugins: [],
}
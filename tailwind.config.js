/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important:true,
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "selectColor":'#99897e'
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/124561.jpg')",
        'Page-pattern': "url('../src/assets/whitePaper.jpg')",
       
      }

    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      'main': '#0d6efd',
      'sub_color' : '#FFFFFF',
      
    },
    extend: {
      fontFamily : {
        poppins : "'Poppins', sans-serif;"
      }

    },
  },
  plugins: [require("daisyui")],
}


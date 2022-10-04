/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{jsx,js,ts,tsx}","components/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      // ...  
    },
    fontFamily : {
        title : ['Roboto Mono'],
        body : ['Poppins','Lobster'],
        Lobster:['Lobster'],
        Josefin:['Josefin Sans'],
        Secular :['Secular One'],
        Acme: ['Acme']

    }
  },
  plugins: [],
}

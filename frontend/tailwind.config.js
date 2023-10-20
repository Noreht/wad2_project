/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 5px 12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
    },
    animation: {
      shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    },
    keyframes: {
      shake: {
        "10%, 90%": {
          transform: "translate3d(-1px, 0, 0)",
        },
        "20%, 80%": {
          transform: "translate3d(2px, 0, 0)",
        },
        "30%, 50%, 70%": {
          transform: "translate3d(-4px, 0, 0)",
        },
        "40%, 60%": {
          transform: "translate3d(4px, 0, 0)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],

};

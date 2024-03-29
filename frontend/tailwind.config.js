/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1280px",
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
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
          cursor: "text",
        },
        "100%": {
          width: "100%",
          cursor: "text",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "black",
        },
      },
    },
    animation: {
      shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
    },
    extend: {
      boxShadow: {
        xl: "10px 10px 5px 2px rgba(0, 0, 0, 0.3)",
        "2xl": "10px 10px 5px 2px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin"),require('@tailwindcss/aspect-ratio')],
};

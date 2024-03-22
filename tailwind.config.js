/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#d6e0ea",
        page: "#ffffff",
        task: "#d6e0ea",
        "task-hover": "#b8e1d1",
        "default-text": "#4a4a4a",
        "b-accent": "#4a4a4a",
        "b-accent-hover": "#66bec7",
      },
    },
  },
  plugins: [require("daisyui")],
};

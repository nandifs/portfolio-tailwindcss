/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#64748b",
        dark: "#0f172a",
        bgtest: "#bef264",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
  },
  plugins: [],
};

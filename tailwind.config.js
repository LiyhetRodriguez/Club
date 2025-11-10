/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        meta: {
          petrol: "#264653",
          teal: "#2A9D8F",
          gold: "#E9C46A",
          coral: "#E76F51",
          smoke: "#F5F6FA",
          ink: "#111827",
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        glow: "0 12px 35px rgba(38,70,83,0.25)",
      },
      fontFamily: {
        anicon: ["'Anicon Sans'", "sans-serif"], // Fuente principal en todo
      },
    },
  },
  plugins: [],
};

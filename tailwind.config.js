/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        meta: {
          // Legacy preserved
          petrol: "#264653",
          teal: "#2A9D8F",
          coral: "#E76F51",
          
          // NEW "STEALTH LUXURY" PALETTE (Bien Perro)
          // Base
          black: "#000000",
          onyx: "#0A0A0A",     // Slightly lighter black for cards
          carbon: "#121212",   // Secondary dark
          
          // Accents
          platinum: "#E5E4E2", // High-end silver
          silver: "#A0A0A0",   // Muted silver
          steel: "#4A4A4A",    // Dark metal
          
          // Highlights (Subtle pop)
          ice: "#F0F8FF",      // Cold white glow
          void: "#050505",     // Deepest depth
        },
      },
      boxShadow: {
        'neon-white': "0 0 20px rgba(255, 255, 255, 0.15)",
        'glass': "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        'glow-silver': "0 0 30px rgba(229, 228, 226, 0.1)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metal-gradient': 'linear-gradient(145deg, #ffffff 0%, #a0a0a0 100%)',
        'dark-metal': 'linear-gradient(145deg, #1a1a1a 0%, #000000 100%)',
      },
      fontFamily: {
        anicon: ["'Anicon Sans'", "sans-serif"], // Fuente principal en todo
      },
    },
  },
  plugins: [],
};

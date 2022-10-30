/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inconsolata: ["Inconsolata", "monospace"],
      },
      backgroundImage: {
        'home': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 255, 255,1)'/%3E%3Cpath d='M-1 20h2v1h-2zM39 20h2v1h-2z' fill='rgba(99, 179, 237,1)'/%3E%3Cpath d='M19.5 20h1v1h-1zM59.5 20h1v1h-1z' fill='rgba(99, 179, 237,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
      },
    },
  },
  plugins: [],
};

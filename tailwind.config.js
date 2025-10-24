/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Library-themed color palette
        library: {
          primary: '#8B4513',      // Saddle Brown - warm wood tones
          secondary: '#D2691E',    // Chocolate - lighter wood
          accent: '#CD853F',       // Peru - golden wood highlights
          dark: '#654321',         // Dark wood
          light: '#F5E6D3',        // Parchment - old paper
          cream: '#FAF7F2',        // Off-white - pages
          sage: '#87A96B',         // Muted green - classic library feel
          burgundy: '#800020',     // Deep red - leather binding
          gold: '#DAA520',         // Goldenrod - gold lettering
        },
        // Semantic colors for the app
        background: '#FAF7F2',
        surface: '#FFFFFF',
        text: {
          primary: '#2C1810',
          secondary: '#654321',
          muted: '#8B7355',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'book': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'book-hover': '0 10px 15px -3px rgba(139, 69, 19, 0.2), 0 4px 6px -2px rgba(139, 69, 19, 0.1)',
        'card': '0 2px 8px rgba(139, 69, 19, 0.08)',
      },
    },
  },
  plugins: [],
}

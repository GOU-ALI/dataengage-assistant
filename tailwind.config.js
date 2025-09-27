/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A66C2',
        'brand-whatsapp': '#25D366',
        'dark-bg': '#1e293b',
        'dark-card': '#334155',
        'dark-border': '#475569',
        'light-text': '#f1f5f9',
        'medium-text': '#94a3b8',
      },
    },
  },
  plugins: [],
}

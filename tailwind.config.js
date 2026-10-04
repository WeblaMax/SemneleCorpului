/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: { bg: '#E3F3F4', light: '#9FD6DE', strong: '#1C8A9C', ink: '#0B3B4A' },
        heal: { bg: '#D4F2E2', accent: '#3FBF8F', dark: '#23966B' },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '20px', xl2: '24px' },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(28,138,156,0.28)',
        glow: '0 14px 40px -8px rgba(63,191,143,0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1C8A9C 0%, #3FBF8F 100%)',
      },
    },
  },
  plugins: [],
}

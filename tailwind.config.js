/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#028090',
          'teal-lt': '#00A3B5',
          'teal-100': '#E0F7FA',
          'teal-50': '#F0FAFB',
          dark: '#1A2332',
          body: '#4A5568',
          muted: '#718096',
          light: '#A0AEC0',
          border: '#E2E8F0',
          'bg-soft': '#F8FAFB',
          'bg-muted': '#F0F4F7',
          'bg-accent': '#E8F4F6',
          control: '#F0FFF4',
          protect: '#FFF5F5',
          data: '#FFFFF0',
          footer: '#1A2332',
        },
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(2,128,144,0.15)',
        btn: '0 2px 8px rgba(2,128,144,0.3)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

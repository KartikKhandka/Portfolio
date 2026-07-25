/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:    '#3B82F6',
        secondary:  '#8B5CF6',
        accent:     '#06B6D4',
        background: '#09090B',
        surface:    'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        button:  ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        'gradient-full':    'linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)',
        'gradient-blue':    'linear-gradient(135deg, #3B82F6, #06B6D4)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'floatSlow 8s ease-in-out infinite',
        'blob':         'blob 12s ease-in-out infinite',
        'spin-slow':    'spin-slow 20s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'pulse-glow':   'pulse-glow 3s ease-in-out infinite',
        'shimmer':      'shimmer 2s infinite',
        'gradient':     'gradientShift 6s ease infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue':   '0 0 20px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.15)',
        'neon-cyan':   '0 0 20px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.15)',
        'card':        '0 4px 32px rgba(0, 0, 0, 0.4)',
        'card-hover':  '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [],
};

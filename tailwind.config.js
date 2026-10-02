/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: '#F1EDE5',
          50: '#FAF8F3',
          100: '#F1EDE5',
          200: '#E7E1D6',
          300: '#D5CEC1',
        },
        ink: {
          DEFAULT: '#25251F',
          light: '#6F6B61',
        },
        olive: {
          DEFAULT: '#6B705C',
          dark: '#30352A',
        },
        terracotta: {
          DEFAULT: '#B86F52',
        },
        purple: {
          DEFAULT: '#7C5C9E',
          light: '#E8DDF2',
          deep: '#4B3869',
        },
        success: {
          DEFAULT: '#2E6F40',
        },
        warning: {
          DEFAULT: '#C99A2E',
        },
        error: {
          DEFAULT: '#B84A3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        md: '14px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(37,37,31,0.06), 0 1px 2px rgba(37,37,31,0.04)',
        'card-hover': '0 8px 24px rgba(37,37,31,0.10), 0 2px 8px rgba(37,37,31,0.06)',
        btn: '0 1px 2px rgba(37,37,31,0.08)',
        'btn-hover': '0 4px 12px rgba(37,37,31,0.12)',
        offset: '4px 4px 0px rgba(37,37,31,0.08)',
        'offset-hover': '6px 6px 0px rgba(37,37,31,0.12)',
        inset: 'inset 2px 2px 6px rgba(37,37,31,0.08), inset -2px -2px 6px rgba(250,248,243,0.06)',
        'inset-dark': 'inset 2px 2px 8px rgba(0,0,0,0.3), inset -2px -2px 8px rgba(255,255,255,0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-slide-up': 'fadeSlideUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        primary: "var(--bg-primary)",
        secondary: "var(--accent-cyan)",
        dimWhite: "var(--text-secondary)",
        dimBlue: "rgba(9, 151, 124, 0.1)",

        // 2025 Brand Color System
        brand: {
          navy: {
            900: '#00040f',
            800: '#0a0e1a',
            700: '#141825',
            600: '#1e2230',
            500: '#282c3b',
          },
          cyan: {
            500: '#00f6ff',
            400: '#33f8ff',
            300: '#66faff',
            200: '#99fcff',
            100: '#ccfdff',
          },
          orange: {
            600: '#f58614',
            500: '#f7991a',
            400: '#f9ac47',
            300: '#fbbf74',
            200: '#fdd2a1',
          },
        },

        // Semantic Colors for Modern UI
        success: {
          DEFAULT: '#10b981',
          light: '#6ee7b7',
          dark: '#047857',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#fca5a5',
          dark: '#b91c1c',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#d97706',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#93c5fd',
          dark: '#1e40af',
        },

        // Neutral Scale
        neutral: {
          950: '#0a0a0a',
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50: '#fafafa',
        },

        // Surface Colors (for cards, panels on dark background)
        surface: {
          primary: 'rgba(255, 255, 255, 0.05)',
          secondary: 'rgba(255, 255, 255, 0.08)',
          tertiary: 'rgba(255, 255, 255, 0.12)',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-cyan': '0 0 20px rgba(0, 246, 255, 0.3)',
        'glow-orange': '0 0 30px rgba(245, 134, 20, 0.4)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-out',
        'slide-in-left': 'slideInLeft 500ms ease-out',
        'slide-in-right': 'slideInRight 500ms ease-out',
        'scale-in': 'scaleIn 400ms ease-out',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

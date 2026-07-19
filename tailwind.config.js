/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbf9f5',
        surface: '#fbf9f5',
        'surface-dim': '#dbdad6',
        'surface-bright': '#fbf9f5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f5f3ef',
        'surface-container': '#efeeea',
        'surface-container-high': '#eae8e4',
        'surface-container-highest': '#e4e2de',
        'surface-variant': '#e4e2de',
        'on-surface': '#1b1c1a',
        'on-surface-variant': '#4d4448',
        'on-background': '#1b1c1a',
        outline: '#7f7479',
        'outline-variant': '#d0c3c8',
        primary: '#6e5864',
        'on-primary': '#ffffff',
        'primary-container': '#b197a4',
        'on-primary-container': '#43303a',
        'primary-fixed': '#f8dbe9',
        'primary-fixed-dim': '#dbbfcd',
        'on-primary-fixed': '#271620',
        'on-primary-fixed-variant': '#55414c',
        secondary: '#645d5f',
        'on-secondary': '#ffffff',
        'secondary-container': '#e7dddf',
        'on-secondary-container': '#686163',
        tertiary: '#725760',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#b696a0',
        'on-tertiary-container': '#462f37',
        'tertiary-fixed': '#fed9e4',
        'tertiary-fixed-dim': '#e0bec8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 30px rgba(121, 110, 101, 0.04)',
        'glass-hover': '0 12px 40px rgba(121, 110, 101, 0.08)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
      spacing: {
        'margin-desktop': '48px',
        'margin-mobile': '16px',
        gutter: '24px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'soft-pulse': 'soft-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

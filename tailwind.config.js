/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1280px' },
    },
    extend: {
      colors: {
        // Warm ivory / sand canvas
        sand: {
          50: '#FCF9F3',
          100: '#F7F1E6',
          200: '#EFE6D4',
          300: '#E3D5BC',
          400: '#D4BF9C',
        },
        // Deep navy ink
        navy: {
          DEFAULT: '#0B2545',
          50: '#EAF0F7',
          700: '#0E2A4E',
          800: '#08203F',
          900: '#001A3D',
          950: '#04132A',
        },
        // Teal — primary CTA / WhatsApp
        teal: {
          DEFAULT: '#0E7A82',
          400: '#1AA0A9',
          500: '#128C95',
          600: '#0E7A82',
          700: '#0B626A',
          800: '#084C53',
        },
        // Small gold accents
        gold: {
          DEFAULT: '#D9A441',
          300: '#ECC878',
          400: '#E2B257',
          500: '#D9A441',
          600: '#BE8A2C',
          700: '#8A6418', // AA-contrast gold for text on light backgrounds
        },
        // Soft sea-blue details
        sea: {
          50: '#EAF2FA',
          100: '#D7E7F4',
          300: '#9CC2E2',
          500: '#3E7CB7',
          700: '#2A5C8F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.1rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['2.85rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.9rem', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,37,69,0.04), 0 8px 24px -12px rgba(11,37,69,0.14)',
        card: '0 2px 4px rgba(11,37,69,0.05), 0 18px 40px -22px rgba(11,37,69,0.28)',
        lift: '0 8px 16px rgba(11,37,69,0.08), 0 30px 60px -28px rgba(11,37,69,0.40)',
        cta: '0 10px 24px -8px rgba(14,122,130,0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      maxWidth: {
        prose: '64ch',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'menu-in': 'menu-in 0.28s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}

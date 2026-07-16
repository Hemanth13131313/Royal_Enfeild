/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ── Color tokens (design.md §2) ──────────────────────────────────────
      colors: {
        // Dark backgrounds
        'bg-deep':   '#0D0B09',
        'bg-panel':  '#171310',
        'bg-elev':   '#221C17',
        // Text on dark
        ink:         '#F3EDE0',
        'ink-muted': '#A89F8D',
        // Brand accent
        gold:        '#C89B3C',
        'gold-bright': '#E3B959',
        'gold-deep': '#8F6B23',
        // Light sections
        cream:       '#F4EFE4',
        'cream-ink': '#191410',
        'cream-muted': '#6E6558',
        // Accent (badges only)
        red:         '#B3271E',
        // Borders
        'line-dark':  '#2E2721',
        'line-light': '#DDD5C4',
      },

      // ── Typography (design.md §3) ────────────────────────────────────────
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['96px', { lineHeight: '0.95', letterSpacing: '0.01em' }],
        'hero-sm': ['52px', { lineHeight: '0.95', letterSpacing: '0.01em' }],
        'section': ['56px', { lineHeight: '1.0',  letterSpacing: '0.01em' }],
        'section-sm': ['36px', { lineHeight: '1.0', letterSpacing: '0.01em' }],
        'card-title': ['24px', { lineHeight: '1.2' }],
        'card-title-sm': ['20px', { lineHeight: '1.2' }],
        'overline': ['12px', { lineHeight: '1.4', letterSpacing: '0.22em' }],
        'chip':     ['13px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },

      // ── Spacing & Layout (design.md §4) ─────────────────────────────────
      maxWidth: {
        container: '80rem', // 1280px
      },
      borderRadius: {
        // extend defaults
        'xl':  '12px',
        '2xl': '16px',
      },

      // ── Box shadows (design.md §4) ───────────────────────────────────────
      boxShadow: {
        'warm-deep': '0 20px 60px rgba(0,0,0,.5)',
        'warm-light': '0 12px 40px rgba(25,20,16,.08)',
        'gold-glow': '0 8px 30px rgba(200,155,60,.35)',
        'gold-glow-lg': '0 0 60px rgba(200,155,60,.25)',
        'glass': '0 4px 24px rgba(0,0,0,.4)',
      },

      // ── Keyframe animations (CSS keyframes are in index.css) ────────────
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'kenburns': 'kenburns 7s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenburns: {
          '0%':   { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // ── Backdrop blur ────────────────────────────────────────────────────
      backdropBlur: {
        'nav': '14px',
      },
    },
  },
  plugins: [],
};

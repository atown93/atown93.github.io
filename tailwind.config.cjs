  /** @type {import('tailwindcss').Config} */
  const defaultTheme = require("tailwindcss/defaultTheme");
  const colors = require("tailwindcss/colors");
  const plugin = require('tailwindcss/plugin')
  module.exports = {
    plugins: [
      plugin(function({ addUtilities }) {
        addUtilities({
          '.content-auto': {
            'content-visibility': 'auto',
          },
          '.content-hidden': {
            'content-visibility': 'hidden',
          },
          '.content-visible': {
            'content-visibility': 'visible',
          },
        })
      })
    ],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        aria: {
          asc: 'sort="ascending"',
          desc: 'sort="descending"',
          aria: 'hidden="true"',
          aria: 'hidden="false"',

        },
      },
    
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "2rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "2rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "1",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1.1",
          },
        ],
        "8xl": [
          "6rem",
          {
            lineHeight: "1",
          },
        ],
        "9xl": [
          "8rem",
          {
            lineHeight: "1",
          },
        ],
        "10xl": [
          "8.5rem",
          {
            lineHeight: "1",
          },
        ],
        "11xl": [
          "9rem",
          {
            lineHeight: "1",
          },
        ],
        "12xl": [
          "9.5rem",
          {
            lineHeight: "1",
          },
        ],
        "13xl": [
          "10rem",
          {
            lineHeight: "1",
          },
        ],
        "14xl": [
          "11rem",
          {
            lineHeight: "1",
          },
        ],
      },
      extend: {
        animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
          scroller3: 'scroller3 25s linear infinite',
          'spin-slow': 'spin 4s linear infinite',
          'spin-slower': 'spin 6s linear infinite',
          'spin-reverse': 'spin-reverse 1s linear infinite',
          'spin-reverse-slow': 'spin-reverse 4s linear infinite',
          'spin-reverse-slower': 'spin-reverse 6s linear infinite',
          scroller: 'scroller 15s linear infinite',
          scroller2: 'scroller2 20s linear infinite',
          'fade-in': 'fade-in 0.5s linear forwards',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          scroller: {
            '0%': { transform: 'translateY(10em)' },
            '100%': { transform: 'translateY(-14em)' },
          },
          scroller2: {
            '0%': { transform: 'translateY(10em)' },
            '100%': { transform: 'translateY(-14em)' },
          },
          'fade-in': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          scroller3: {
            '100%': {
              transform: 'translateY(-50%)',
            },
          },
          'spin-reverse': {
            to: {
              transform: 'rotate(-360deg)',
            },
          },
        },
        backgroundImage: (theme) => ({
          gradient: "url('/images/placeholders/gradient.png')",
          rainbowBg: "linear-gradient(174deg, rgba(113,207,37,1) 0%, rgba(138,255,55,1) 73%, rgba(171,255,102,1) 100%);",
          silverBg: "linear-gradient(315deg, #313035 0%, #9797a0 74%);",
          dark: "linear-gradient(174deg, rgba(0,0,0,1) 0%, rgba(9,9,9,1) 26%, rgba(33,33,33,1) 100%);",
          metal: "linear-gradient(240.64deg, rgba(244, 244, 244, 0) 0%, #222326 100%);",
          black: "#000000",
          white: "#ffffff",
          ezgreen1: "#71CF25",
          ezgreen2: "#8AFF37",
          ezgreen3: "#ABFF66",
          oggreen: "#5FA624",
        }),
        boxShadow: {
          thick: "0px 2px 10px rgb(0 0 0 / 35%);",
          superThick: "0px 10px 25px rgba(0, 0, 0, 0.15), 0px 32px 32px rgba(0, 0, 0, 0.15), 0px 16px 16px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);",
        },
        colors: {
          ezgreen: "linear-gradient(174deg, rgba(113,207,37,1) 0%, rgba(138,255,55,1) 73%, rgba(171,255,102,1) 100%);",
          black: "#000000",
          white: "#ffffff",
          ezgreen1: "#71CF25",
          ezgreen2: "#8AFF37",
          ezgreen3: "#ABFF66",
          oggreen: "#5FA624",
          },
          backgroundColor: {
          ezgreen: "linear-gradient(174deg, rgba(113,207,37,1) 0%, rgba(138,255,55,1) 73%, rgba(171,255,102,1) 100%);",
          black: "#000000",
          white: "#ffffff",
          ezgreen1: "#71CF25",
          ezgreen2: "#8AFF37",
          ezgreen3: "#ABFF66",
          oggreen: "#5FA624",
        },
        textColor: {
          black: "#000000",
          white: "#ffffff",
          ezgreen: "linear-gradient(174deg, rgba(113,207,37,1) 0%, rgba(138,255,55,1) 73%, rgba(171,255,102,1) 100%);",
          ezgreen1: "#71CF25",
          ezgreen2: "#8AFF37",
          ezgreen3: "#ABFF66",
          oggreen: "#5FA624",
    
      },
        borderRadius: {
          "2": "2px",
          "4xl": ".005rem",
          "5xl": ".0075rem",
          "6xl": ".05rem",
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0px',
          '2': '1px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        },
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
          display: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
      require('tailwind-scrollbar-hide')
    ]
  }

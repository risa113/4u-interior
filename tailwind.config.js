/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#17352F",
        "primary-container": "#17352F",
        "secondary": "#30483F",
        "secondary-dark": "#23362F",
        "accent": "#B77A55",
        "background": "#F5F2EA",
        "surface": "#F5F2EA",
        "surface-container": "#D9D5CA",
        "surface-container-low": "#EBE7DC",
        "surface-container-high": "#CDC8BC",
        "surface-container-lowest": "#FAF9F5",
        "on-surface": "#202522",
        "on-surface-variant": "#414846",
        "on-primary": "#FAF9F5",
        "text-light": "#FAF9F5",
        "text-dark": "#202522",
        "outline": "#717976",
        "outline-variant": "#D9D5CA",
        "stone-sep": "#D9D5CA",
        "error": "#BA1A1A",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "margin-mobile": "1.25rem",
        "space-xl": "4rem",
        "margin": "4rem",
        "space-md": "1rem",
        "gutter": "2rem",
        "gutter-mobile": "1rem",
        "space-lg": "2rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
      },
      fontFamily: {
        serif: ["'Bodoni Moda'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-xl": ["'Bodoni Moda'", "serif"],
        "display-lg": ["'Bodoni Moda'", "serif"],
        "body-sm": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-sm": ["'Bodoni Moda'", "serif"],
        "body-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-caps-wide": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-ui": ["'Plus Jakarta Sans'", "sans-serif"],
        "display-lg-mobile": ["'Bodoni Moda'", "serif"],
        "body-lg": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-lg": ["'Bodoni Moda'", "serif"],
        "headline-xl-mobile": ["'Bodoni Moda'", "serif"],
      },
      fontSize: {
        "headline-xl": [
          "3.25rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.015em",
            fontWeight: "400",
          },
        ],
        "display-lg": [
          "4.5rem",
          {
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "0.8125rem",
          {
            lineHeight: "1.35rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "headline-sm": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        "body-md": [
          "0.9375rem",
          {
            lineHeight: "1.6rem",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "label-caps-wide": [
          "0.6875rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.2em",
            fontWeight: "600",
          },
        ],
        "label-ui": [
          "0.8125rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.04em",
            fontWeight: "500",
          },
        ],
        "display-lg-mobile": [
          "2.75rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.875rem",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        "headline-lg": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "headline-xl-mobile": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};

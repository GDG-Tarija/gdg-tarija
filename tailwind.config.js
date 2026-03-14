/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "Background": "#f0f0f0",
        "rojo-GDG": "#ea4335",
        "amarillo-GDG": "#f9ab00",
        "azul-GDG": "#4285f4",
        "verde-GDG": "#34a853",
        "Gray-900": "#202124",
        "Orange": "#F46831",
        "iwd-primary":"#165185",
        "iwd-secondary":"#CAE6FF",
        "iwd-text":"#2480F0",
        "iwd-accent":"#0f7c67",
        // HALFTONES
        "halftone-blue": "#57caff",
        "halftone-green": "#5cdb6d",
        "halftone-yellow": "#ffd427",
        "halftone-red": "#ff7daf",
        // PASTELS
        "pastel-blue": "#c3ecf6",
        "pastel-green": "#ccf6c5",
        "pastel-yellow": "#ffe7a5",
        "pastel-red": "#f8d8d8",
        // GRAYSCALE
        "off-white": "#f0f0f0",
        "black-02": "#1e1e1e",
        blue: {
          50: "#F0F5FE",
          100: "#DCE9FD",
          200: "#B6D0FB",
          300: "#8FB7F8",
          400: "#699EF6",
          500: "#4285F4",
          600: "#0E63F0",
          700: "#0B4DBB",
          800: "#083786",
          900: "#052151",
          950: "#031636",
        },
        red: {
          50: "#FBDEDB",
          100: "#F9CDC9",
          200: "#F6AAA4",
          300: "#F2887F",
          400: "#EE655A",
          500: "#EA4335",
          600: "#D12416",
          700: "#9E1B10",
          800: "#6C130B",
          900: "#390A06",
          950: "#1F0503",
        },
        yellow: {
          50: "#FFE7B2",
          100: "#FFE09D",
          200: "#FFD474",
          300: "#FFC74C",
          400: "#FFBA23",
          500: "#F9AB00",
          600: "#C18400",
          700: "#895E00",
          800: "#513700",
          900: "#191100",
          950: "#000000",
        },
        green: {
          50: "#AEE6BD",
          100: "#9EE1B0",
          200: "#7FD797",
          300: "#60CE7D",
          400: "#41C464",
          500: "#34A853",
          600: "#277D3E",
          700: "#195229",
          800: "#0C2714",
          900: "#000000",
          950: "#000000",
        },
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  safelist: [
    // Agrega las clases dinámicas que Tailwind no puede detectar
    'bg-rojo-GDG',
    'bg-amarillo-GDG',
    'bg-azul-GDG',
    'bg-verde-GDG',
    'bg-Gray-900',
    'bg-Orange',
    'text-rojo-GDG',
    'text-amarillo-GDG',
    'text-azul-GDG',
    'text-verde-GDG',
    'text-Gray-900',
    'text-Orange',
    // HALFTONES
    'bg-halftone-blue', 'text-halftone-blue',
    'bg-halftone-green', 'text-halftone-green',
    'bg-halftone-yellow', 'text-halftone-yellow',
    'bg-halftone-red', 'text-halftone-red',
    // PASTELS
    'bg-pastel-blue', 'text-pastel-blue',
    'bg-pastel-green', 'text-pastel-green',
    'bg-pastel-yellow', 'text-pastel-yellow',
    'bg-pastel-red', 'text-pastel-red',
    // GRAYSCALE
    'bg-off-white', 'text-off-white',
    'bg-black-02', 'text-black-02',
  ],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "rgb(var(--tw-foreground) / <alpha-value>)",
        border: "rgb(var(--tw-border) / <alpha-value>)",
        input: "rgb(var(--tw-border) / <alpha-value>)",
        ring: "rgb(var(--tw-primary) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--tw-primary) / <alpha-value>)",
          foreground: "rgb(var(--tw-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--tw-secondary) / <alpha-value>)",
          foreground: "rgb(var(--tw-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--tw-secondary) / <alpha-value>)",
          foreground: "rgb(var(--tw-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--tw-secondary) / <alpha-value>)",
          foreground: "rgb(var(--tw-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(220 38 38 / <alpha-value>)",
          foreground: "rgb(var(--tw-primary-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

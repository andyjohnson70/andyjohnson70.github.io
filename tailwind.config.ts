import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-spring-green': '#1C7C54',
        'celadon': '#73E2A7',
        'tea-green': '#DEF4C6',
        'cal-poly-green': '#1B512D',
        'yellow-green': '#B1CF5F',
      }
    },
  },
  plugins: [],
} satisfies Config;

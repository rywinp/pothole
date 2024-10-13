import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 1.2px 1.2px rgba(0,0,0,0.8)',
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      },
    },
  },
  plugins: [],
};
export default config;

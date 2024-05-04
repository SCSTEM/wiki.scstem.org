import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./wiki/**/*.mdx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        mono: ["SourceCodePro"],
        heading: ["Orbitron"],
      },
    },
  },
  plugins: [],
};

export default config;

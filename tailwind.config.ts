import type { Config } from "tailwindcss";


const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lusitana: ['Lusitana', 'serif'],
        crimson: ['CrimsonText', 'serif'],
      },
      colors:{
          yellow: {
              50: '#f4f5f0',
          },
          primary: '#d0d0d0',
          formazzi: '#263238',
          registerbt: '#A38DEB',
          fontIntro: '#D44EE6',
      },
    },
  },
  plugins: [],
};
export default config;

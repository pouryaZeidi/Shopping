import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "banner-image": "url('/Bannerok2.png')",
         
      },
      colors:{
        "Primary":'#E6C744',
        "secondary":'#C2C8DA',
        "background":'#E7E6E6',
        "brandsbg":'#EBD96B',
        "textshadow":'#121212'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize:{
        'ali':'120px'
      }
    },

  },
  plugins: [],
};
export default config;

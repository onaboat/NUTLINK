import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
  },
     daisyui: {
      themes: [
        {
          mytheme: {
          "primary": "#07090F",          
          "secondary": "#FF1053",        
          "accent": "#6C6EA0",       
          "neutral": "#2b3440",        
          "base-100": "#F4D35E",        
          "info": "#66C7F4",      
          "success": "#36d399",      
          "warning": "#fbbd23",     
          "error": "#e11d48",
          },
        },
        "dark",
        "light",
      ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
export default config

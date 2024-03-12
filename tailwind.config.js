/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors:{
        anovanavbar:'#161f2c',
        anovatext1:'#93acd3',
        anovatext2:'#55657e',
        anova1:'#0d131c',
        anova2:'#111923',
        anova3:'#16202b',
        anova4:'#1c2531',
        anova5:'#1f2a39',
        anova6:'#253243',
        inputprimary: "#787ead",
        inputplaceholder: "#354254"
      }
    },
  },
  plugins: [],
};

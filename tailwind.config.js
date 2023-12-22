const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#7DD3FC",
      white: "#FFFFFF",
      black: "#000000",
      text: {
        dark: "#c9ced3",
        light: "#000000",
      },
      title: {
        dark: "#FFFFFF",
        light: "#59636f",
      },
      grey: "#5c6065",
      darkGrey: "#0a111e",
      background: {
        dark: "#FFFFFF",
        light: "#000000",
      },
      backgroundStart: "#030711",
      backgroundEnd: "#051E44",
    },
  },
  plugins: [],
};
export default config;

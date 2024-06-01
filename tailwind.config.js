/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },

      backgroundImage: {
        "hero-pattern": "url('/img/jason-leung-res.jpg')",
        "footer-texture": "url('/img/ny.png')",
        "footer-texture-dark": "url('/img/ny-dark.svg')",
      },
    },
  },
  plugins: [],
};

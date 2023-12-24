/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      cursor: {
        next: "url(./src/assets/next.png), pointer",
        back: "url(./src/assets/previous.png), pointer",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};

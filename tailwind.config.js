/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0074D9",
        "primary-hover": "#005AA8",
        info: "rgb(75 85 99 )",
      },
      borderColor: {
        primary: "#0074D9",
        info: "rgb(75 85 99 )",
      },
      spacing: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.5rem", // 24px
        6: "2rem", // 32px
        7: "3rem", // 48px
        8: "4rem", // 64px
        9: "6rem", // 96px
        10: "8rem", // 128px
        11: "12rem", // 192px
        12: "16rem", // 256px
        13: "20rem", // 384px
        14: "26rem", // 512px
        15: "32rem", // 512px
        16: "40rem", // 640px
        17: "48rem", // 768px
      },
    },
  },
  plugins: [],
};

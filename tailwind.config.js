/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        "primary-light": "rgba(var(--primary-light))",
        "primary-hover": "rgba(var(--primary-hover))",
        "primary-dark": "rgba(var(--primary-dark))",
        "primary-contrast": "rgba(var(--primary-contrast))",
        info: "rgba(var(--info))", /* da usare il eno possibile  */
        "my-green": "rgba(var(--my-green))",
        "my-orange": "rgba(var(--my-orange))",
        "my-red": "rgba(var(--my-red))",
        "my-background": "rgba(var(--my-background))", 
        "my-secondary-bg": "rgba(var(--my-secondary-bg))",   /* elementi che contengono info secondarie */
        "my-bgContrast": "rgba(var(--my-bgcontrast))",      /* elementi a contatto con il bg primario usato anche per icone */
        "my-border-color": "rgba(var(--my-border-color))",
        "my-text-1": "rgba(var(--my-text-1))", /* testo primario, generalmente si trova a contatto del BG  */
        "my-text-2": "rgba(var(--my-text-2))", /* elmenti di testo di secondaria importanza znce essi a contatto con il BG*/
        "my-shadow-on-bg": "rgba(var(--my-shadow-on-bg))",  
        icons: "rgba(var(--icons))", /* icone primarie, generalemnte a contatto con il primary color */
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
    fontFamily: {
      roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      lobster: ["Lobster", "cursive"], // Font personalizzato
    },
    fontSize: {
      //text-{size}
      // Mobile
      "h1-mb": "2.3rem",
      "h2-mb": "1.7rem",
      "body-mb": "1rem",
      "info-mb": "0.875rem",
      "quiz-mb": "1rem",

      // Desktop (DT)
      "h1-dt": "2.3rem", // Aggiungi la dimensione per h1 del desktop
      "h2-dt": "1.7rem", // Aggiungi la dimensione per h2 del desktop
      "body-dt": "1rem", // Aggiungi la dimensione per il corpo del desktop
      "info-dt": "0.875rem", // Aggiungi la dimensione per info del desktop
    },
    fontWeight: {
      // font-{weight}
      // Mobile font weights
      "h1-mb": 600, // Peso per h1 su mobile
      "h2-mb": 500, // Peso per h2 su mobile
      "body-mb": 400, // Peso per il corpo su mobile
      "info-mb": 300, // Peso per info su mobile

      // Desktop font weights
      "h1-dt": 700, // Peso per h1 su desktop
      "h2-dt": 600, // Peso per h2 su desktop
      "body-dt": 400, // Peso per il corpo su desktop
      "info-dt": 300, // Peso per info su desktop
    },
    keyframes: {
      popIn: {
        "0%": { transform: "scale(0)", opacity: 0 },
        "50%": { transform: "scale(1.1)" },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
      appearIn: {
        "0%": {
          transform: "scale(0)",
          opacity: 0,
          transform: "translateY(20px)",
        },
        "80%": { transform: "scale(1.01)" },
        "100%": {
          transform: "scale(1)",
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      innerMicroElementIn: {
        "0%": {
          opacity: 0,
          transform: "translateY(-70px) scale(0.9)",
        },
        "80%": { transform: "translateY(15px) scale(1.05)" },
        "100%": {
          opacity: 1,
          transform: "scale(1) translateY(0px)",
        },
      },
      innerMicroElementOut: {
        "0%": {
          opacity: 1,
          transform: "scale(1) translateY(0px)",
        },
        "20%": { transform: "translateY(15px) scale(1.05)" },
        "100%": {
          opacity: 0,
          transform: "translateY(-70px) scale(0.9)",
        },
      },

      slideFromDX: {
        "0%": { opacity: 0, transform: "translateX(100%)" },
        "100%": { opacity: 1, transform: "translateX(0)" },
      },
      emergeIn: {
        "0%": { opacity: 0 },
        "100": { opacity: 1 },
      },
    },
    animation: {
      innerMicroElementIn: "innerMicroElementIn 0.3s ease forwards",
      innerMicroElementout: "innerMicroElementout 0.1s ease forwards",
      popIn: "popIn 0.5s ease forwards ",
      appearIn: "appearIn 0.4s ease forwards ",
      slideFromDX: "slideFromDX 0.4s ease forwards",
      emergeIn: "emergeIn 0.4s ease forwards",
    },
  },
  plugins: [],
};

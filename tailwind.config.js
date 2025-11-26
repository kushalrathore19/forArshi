/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          animation: {
            blob: "blob 7s infinite",
            marquee: "marquee 25s linear infinite",
            "marquee-reverse": "marquee-reverse 25s linear infinite",
            "spin-slow": "spin 3s linear infinite",
            "fade-in": "fadeIn 0.5s ease-out forwards",
            "fade-in-up": "fadeInUp 0.5s ease-out forwards",
            "pop-in": "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
          },
          keyframes: {
            blob: {
              "0%": { transform: "translate(0px, 0px) scale(1)" },
              "33%": { transform: "translate(30px, -50px) scale(1.1)" },
              "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
              "100%": { transform: "translate(0px, 0px) scale(1)" },
            },
            marquee: {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-100%)" },
            },
            "marquee-reverse": {
              from: { transform: "translateX(-100%)" },
              to: { transform: "translateX(0)" },
            },
            fadeIn: {
              "0%": { opacity: "0" },
              "100%": { opacity: "1" },
            },
            fadeInUp: {
              "0%": { opacity: "0", transform: "translateY(20px)" },
              "100%": { opacity: "1", transform: "translateY(0)" },
            },
            popIn: {
              "0%": { opacity: "0", transform: "scale(0.5)" },
              "50%": { transform: "scale(1.2)" },
              "100%": { opacity: "1", transform: "scale(1)" },
            }
          },
        },
      },
      plugins: [],
    }
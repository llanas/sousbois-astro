import tailwindcssTypography from "@tailwindcss/typography";

export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
        "./public/index.html",
    ],
    theme: {
        fontFamily: {
            silka: ["SilkaMona", "sans-serif"],
        },
        screens: {
            sm: "640px", // 24rem = 4 * 6rem
            md: "768px", // 40rem = 6 * 7rem
            lg: "1024px", // 60rem = 8 * 7.5rem
            xl: "1280px", // 74rem = 12 * 6remcontainer: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
            },
        },
        extend: {
            colors: {
                dark: "#2B2F2D",
                bright: "#E6E6E6",
                primary: "#6B848D",
                secondary: "#ECE5D3",
                deepBlue: "#283F48",
            },
            spacing: {
                sm: "32rem",
                md: "48rem",
                lg: "64rem",
                xl: "90rem",
            },
            maxWidth: {
                sm: "32rem",
                md: "48rem",
                lg: "64rem",
                xl: "90rem",
            },
        },
    },
    plugins: [tailwindcssTypography],
    darkMode: "class",
};

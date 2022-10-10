module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                plantFrame:
                    "url('https://www.maxpixel.net/static/photo/640/Frame-Foliage-Border-Circle-Leaves-Plants-6556959.png')",
            },
            colors: {
                forrest: {
                    50: "#7c9973",
                    100: "#728f69",
                    200: "#68855f",
                    300: "#5e7b55",
                    400: "#54714b",
                    500: "#4a6741",
                    600: "#405d37",
                    700: "#36532d",
                    800: "#2c4923",
                    900: "#223f19",
                },
                khaki: {
                    50: "#ffffa0",
                    100: "#ffff96",
                    200: "#fff68c",
                    300: "#ffec82",
                    400: "#fae278",
                    500: "#f0d86e",
                    600: "#e6ce64",
                    700: "#dcc45a",
                    800: "#d2ba50",
                    900: "#c8b046",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

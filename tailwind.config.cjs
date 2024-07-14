const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
        addDynamicIconSelectors(),
    ],

    theme: {
        extend: {
            colors: {
                "sane-bg": "oklch(var(--sane-bg) / <alpha-value>)",
            },
        },
    },
    daisyui: {
        themes: [
            {
                bumblebee: {
                    ...require("daisyui/src/theming/themes")["bumblebee"],
                    "--sane-bg": "var(--b1)",
                },
            },

            {
                dracula: {
                    ...require("daisyui/src/theming/themes")["dracula"],
                    "--sane-bg": "var(--b3)",
                },
            },
        ],
    },
};

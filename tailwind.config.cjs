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
    daisyui: {
        themes: ["bumblebee", "dracula"],
    },
};

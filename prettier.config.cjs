module.exports = {
    tabWidth: 4,
    plugins: [
        require.resolve("prettier-plugin-astro"),
        require.resolve("prettier-plugin-svelte"),
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
        {
            files: "*.svelte",
            options: {
                parser: "svelte",
            },
        },
    ],
};

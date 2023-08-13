module.exports = {
    tabWidth: 4,
    plugins: [require.resolve("prettier-plugin-astro")],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

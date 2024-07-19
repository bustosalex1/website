import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), tailwind(), mdx()],
    site: "https://bustosalex1.github.io",
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [
                rehypeKatex,
                {
                    // katex plugin options
                },
            ],
        ],
    },
    vite: {
        plugins: [
            Icons({
                compiler: "svelte",
                autoInstall: true,
            }),
            Icons({
                compiler: "astro",
                autoInstall: true,
            }),
        ],
    },
});

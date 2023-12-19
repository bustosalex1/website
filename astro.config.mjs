import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [svelte(), tailwind(), mdx()],
    site: "https://bustosalex1.github.io",
    markdown: {
        remarkPlugins: ["remark-math"],
        rehypePlugins: [
            [
                "rehype-katex",
                {
                    // katex plugin options
                },
            ],
        ],
    },
});

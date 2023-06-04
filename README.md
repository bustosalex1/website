# My Website

My website, made mostly with Astro, Svelte, TailwindCSS, and DaisyUI. I feel like the `package.json` contains all the relevant commands.

## Structure

```bash
.
├── public
└── src
    ├── assets
    │   └── posts
    ├── components
    ├── content
    │   └── posts
    ├── layouts
    ├── pages
    │   ├── posts
    │   └── tags
    └── styles
```

I am using Astro's experimental `assets` feature for image optimization, so images for all my pages are stored in folders in `src/assets/posts`. I'm also using content collections for posts, which are written in either Markdown or MDX in `src/content/posts`.

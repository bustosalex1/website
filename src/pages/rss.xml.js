import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export const get = async () => {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: 'https://my-blog-site.netlify.app',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    })
}

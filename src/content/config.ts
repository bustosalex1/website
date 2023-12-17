import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            description: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            image: image(),
            imageAlt: z.string(),
            tags: z.string().array(),
            project: z.boolean().optional(),
        }),
});

const noteCollection = defineCollection({
    schema: () =>
        z.object({
            title: z.string(),
            author: z.string(),
            class: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
        }),
});

export const collections = {
    posts: postCollection,
    notes: noteCollection,
};

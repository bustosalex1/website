<script lang="ts">
    import type { MarkdownInstance } from "astro";
    export let post: MarkdownInstance<Record<string, any>>;
</script>

<div
    class="transition ease-in-out card card-compact w-full bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300 outline outline-1 outline-neutral-400"
>
    <figure>
        <img
            src={post.frontmatter.image.url}
            alt={post.frontmatter.image.alt}
        />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{post.frontmatter.title}</h2>
        <p>{post.frontmatter.description}</p>
        <div class="card-actions justify-end">
            <div class="text-xs font-mono">
                {new Date(post.frontmatter.pubDate).toLocaleDateString(
                    "en-US",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }
                )}
            </div>
        </div>
    </div>
</div>

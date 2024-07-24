<script lang="ts">
    import { type CollectionEntry } from "astro:content";
    import { type FuseResult } from "fuse.js";
    export let result: FuseResult<CollectionEntry<"notes">>;
</script>

<div
    class="flex flex-col w-full gap-1 rounded-md ring-1 ring-base-content/20 p-2 bg-base-100 drop-shadow-md"
>
    <div class="flex flex-row justify-between items-center">
        <a href={"/notes/" + result.item.slug} class="hoverable"
            >{result.item.data.title}</a
        >
        <div class="text-xs font-mono">
            {result.item.data.pubDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                timeZone: "UTC",
            })}
        </div>
    </div>
    <div class="text-xs">
        {result.item.data.class}
    </div>
</div>

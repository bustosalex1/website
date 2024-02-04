<script lang="ts">
    import { type CollectionEntry } from "astro:content";
    import Fuse, { type FuseResult } from "fuse.js";
    import SearchMatch from "./SearchMatch.svelte";
    export let posts: CollectionEntry<"notes">[];
    export let dropdown: boolean = false;
    export let keys: string[];

    const fuse = new Fuse(posts, {
        keys: keys,
        findAllMatches: false,
        includeMatches: true,
        ignoreLocation: true,
        shouldSort: true,
    });

    let results: FuseResult<CollectionEntry<"notes">>[] = [];
    let searchValue = "";

    $: {
        if (searchValue.length > 0) {
            results = fuse.search(searchValue);
        } else {
            results = [];
        }
    }
</script>

<div class="w-full" class:dropdown>
    <!-- search box -->
    <input
        type="text"
        class="input input-bordered input-sm w-full"
        placeholder="Fuzzy find notes..."
        bind:value={searchValue}
        tabindex="0"
    />
    <!-- search results -->
    <div
        class="flex flex-col gap-2 w-full mt-4"
        class:dropdown-content={dropdown}
        class:z-[1]={dropdown}
        tabindex="0"
        role="button"
    >
        {#each results as result (result.item.id)}
            <SearchMatch {result} />
        {/each}
    </div>
</div>

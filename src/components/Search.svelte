<script lang="ts">
    import type { CollectionEntry } from "astro:content";
    import Fuse from "fuse.js";

    export let posts: CollectionEntry<"notes">[];
    export let keys: string[];

    const fuse = new Fuse(posts, { keys: keys });

    const results = [];
    const onInput = (input: string) => {
        return fuse.search(input);
    };
</script>

<div>
    <input type="text" placeholder="Search..." />
</div>

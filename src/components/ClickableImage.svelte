<script lang="ts">
    import { cubicInOut } from "svelte/easing";
    import { fade, fly, slide } from "svelte/transition";
    export let caption: string | undefined;
    export let showCaption: boolean | undefined;
    let selected = false;
    let hovered = false;
    const toggleModal = () => {
        selected = !selected;
    };
</script>

<!-- default image -->
<button
    on:click={toggleModal}
    class="relative group cursor-pointer overflow-hidden rounded-md"
    on:mouseenter={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
>
    {#if hovered && caption}
        <div
            class="absolute bottom-0 left-0 h-auto w-full bg-black bg-opacity-70 p-2 rounded-b-md text-white flex justify-start items-center text-left"
            transition:fly={{ y: 50, duration: 250, easing: cubicInOut }}
        >
            {caption}
        </div>
    {/if}

    <slot />
    {#if caption && showCaption}
        <em>{caption}</em>
    {/if}
</button>

{#if selected}
    <!-- modal container -->
    <button
        class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-70 flex items-center justify-center cursor-pointer z-50"
        on:click={toggleModal}
        transition:fade={{ duration: 250, easing: cubicInOut }}
    >
        <!-- modal content -->
        <div
            class="min-h-fit h-[75vh] max-h-[75vh] max-w-[75vw]"
            transition:fly={{ duration: 250, y: 50, easing: cubicInOut }}
        >
            <slot />
            {#if caption}
                <em class="text-white">{caption}</em>
            {/if}
        </div>
    </button>
{/if}

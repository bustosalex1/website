<script lang="ts">
    import { cubicInOut } from "svelte/easing";
    import { fade, fly } from "svelte/transition";
    export let caption: string | undefined;
    let selected = false;

    const toggleModal = () => {
        selected = !selected;
    };
</script>

<!-- default image -->
<button on:click={toggleModal} class="cursor-pointer">
    <slot />
    {#if caption}
        <em>{caption}</em>
    {/if}
</button>

{#if selected}
    <!-- modal container -->
    <button
        class="fixed top-0 left-0 h-full w-[100vw] bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
        on:click={toggleModal}
        transition:fade={{ duration: 250, easing: cubicInOut }}
    >
        <!-- modal content -->
        <div
            class="h-[75vh]"
            transition:fly={{ duration: 250, y: 50, easing: cubicInOut }}
        >
            <slot />
        </div>
    </button>
{/if}

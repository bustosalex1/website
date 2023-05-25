<script lang="ts">
    import { cubicInOut } from "svelte/easing";
    import { fade } from "svelte/transition";

    let selected = false;

    const toggleModal = () => {
        selected = !selected;
    };
</script>

<!-- default image -->
<button on:click={toggleModal} class="cursor-pointer">
    <slot />
</button>

{#if selected}
    <!-- modal container -->
    <button
        class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
        on:click={toggleModal}
        in:fade={{ duration: 250, easing: cubicInOut }}
        out:fade={{ duration: 250, easing: cubicInOut }}
    >
        <!-- modal content -->
        <div class="max-w-[75%]">
            <slot />
        </div>
    </button>
{/if}

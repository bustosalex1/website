<script lang="ts">
    /** The URL of the page to link to. */
    export let link: string;

    /** An optional title to display. if not specified, this defaults to "Project Page".*/
    export let title = "Project Page";

    let selected = false;
</script>

<!--@component
Simple component that wraps an external page in an `iframe` and provides options to full-screen the
page or go to the page. My intent with this is just to provide a way to embed other web projects on
my website.
-->
<!--rounded rectangle that wraps the iframe and title.-->
<div
    class={`flex flex-col ring-1 bg-base-100 ${selected ? "fixed top-0 left-0 h-screen w-screen z-50 overflow-auto" : "h-[75vh] overflow-clip rounded-md ring-base-content/20 ring-1"}`}
>
    <!--row providing a title and some buttons to full screen or go to the page-->
    <div
        class="flex flex-row justify-between border-b border-1 items-center p-2"
    >
        <div class="font-semibold">{title}</div>

        <div class="flex flex-row space-x-1">
            <button
                class="btn btn-xs btn-ghost"
                on:click={() => {
                    selected = !selected;
                }}>Go to Page</button
            >
            <button
                class="btn btn-xs btn-ghost"
                on:click={() => {
                    selected = !selected;
                }}>Full Screen</button
            >
        </div>
    </div>
    <iframe src={link} class={`w-full flex-1 h-full`} {title}></iframe>
</div>

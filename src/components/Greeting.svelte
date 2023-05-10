<script lang="ts">
    export let messages: string[];
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    let greeting = messages[0];
</script>

<div>
    <h3>{greeting}! Thank you for visiting!</h3>
    <button on:click={() => (greeting = randomMessage())}>New Greeting</button>
</div>

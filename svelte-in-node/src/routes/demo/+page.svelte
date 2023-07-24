<h1>Hello!</h1>

<button on:click={inc}>Click me</button>

{#if count > 0}
<p>Count: {count}</p>
{/if}

<script lang="ts">
let count = 0

function inc() {
    count += 1
}
</script>
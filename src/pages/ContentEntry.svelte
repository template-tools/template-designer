<script>
    export let entry;
</script>

<h1>ContentEntry {entry.name}</h1>

{#await entry.getString()}
	<p>...waiting</p>
{:then string}
	{string}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
<script>
  import contentEntrysRoute from "../routes/content-entry.mjs";
</script>

{#if $contentEntrysRoute}
  <h1>{$contentEntrysRoute.name}</h1>

  {#await $contentEntrysRoute.getString()}
    <p>...waiting</p>
  {:then string}
    {string}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}No such entry{/if}

<script>
  import { contentEntryRoute } from "../routes/repositories.mjs";
</script>

{#if $contentEntryRoute}
  <h1>{$contentEntryRoute.name}</h1>

  {#await $contentEntryRoute.getString()}
    <p>...waiting</p>
  {:then string}
    {string}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}No such entry{/if}

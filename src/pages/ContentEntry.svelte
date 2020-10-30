<script>
  import { ContentEntryCard } from "svelte-repository-provider";

  export let router;

  const route = router.route;
</script>

{#if $route}
  <ContentEntryCard object={$route} />
{:else}No such entry{/if}

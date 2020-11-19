<script>
  import { ContentEntryCard } from "svelte-repository-provider";

  export let router;

  const route = router.route;
  const entry = $route.value;
</script>

{#if entry}
  <ContentEntryCard {entry} />
{:else}No such entry{/if}

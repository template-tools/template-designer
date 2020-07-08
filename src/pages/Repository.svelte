<script>
  import RepositoryCard from "../components/RepositoryCard.svelte";

  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <RepositoryCard repository={$cr} />
{:else}No such repository{/if}

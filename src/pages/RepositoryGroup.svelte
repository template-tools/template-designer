<script>
  import RepositoryGroupCard from "../components/RepositoryGroupCard.svelte";
  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <RepositoryGroupCard repositoryGroup={$cr} />
{:else}No such group{/if}

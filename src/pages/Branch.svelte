<script>
  import BranchCard from "../components/BranchCard.svelte";

  export let router;

  const route = router.route;
</script>

{#if $route}
  <BranchCard branch={$route} />
{:else}No such branch{/if}

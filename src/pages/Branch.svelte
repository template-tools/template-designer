<script>
  import BranchCard from "../components/BranchCard.svelte";

  export let router;

  const route = router.route;
  const branch = $route.value;
</script>

{#if branch}
  <BranchCard {branch} />
{:else}No such branch{/if}

<script>
  import HookCard from "../components/HookCard.svelte";
  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <HookCard hook={$cr} />
{:else}No such hook{/if}

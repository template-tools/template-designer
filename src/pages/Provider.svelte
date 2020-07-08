<script>
  import ProviderCard from "../components/ProviderCard.svelte";

  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <ProviderCard provider={$cr} />
{:else}No such provider{/if}

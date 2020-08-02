<script>
  import { HookCard } from "svelte-repository-provider";

  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <HookCard hook={$cr} />
{:else}No such hook{/if}

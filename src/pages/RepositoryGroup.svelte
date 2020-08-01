<script>
  import {RepositoryGroupCard } from "svelte-repository-provider";

  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <RepositoryGroupCard repositoryGroup={$cr} />
{:else}No such group{/if}

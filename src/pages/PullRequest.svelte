<script>
  import { PullRequestCard } from "svelte-repository-provider";
  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <PullRequestCard pullRequest={$cr} />
{:else}No such pull request{/if}

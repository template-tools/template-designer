<script>
  import PullRequestCard from '../components/PullRequestCard.svelte';
  export let router;

  const cr = router.route;
</script>

{#if $cr}
  <PullRequestCard pullRequest={$cr}/>
{:else}No such pull request{/if}

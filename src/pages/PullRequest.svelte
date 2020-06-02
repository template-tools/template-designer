<script>
  import PullRequestCard from '../components/PullRequestCard.svelte';
  import pullRequestRoute from "../routes/pull-request.mjs";
</script>

{#if $pullRequestRoute}
  <BranchCard pullRequest={$pullRequestRoute}/>
{:else}No such pull request{/if}

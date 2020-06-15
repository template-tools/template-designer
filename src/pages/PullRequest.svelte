<script>
  import PullRequestCard from '../components/PullRequestCard.svelte';
  import { pullRequestRoute } from "../routes/repositories.mjs";
</script>

{#if $pullRequestRoute}
  <PullRequestCard pullRequest={$pullRequestRoute}/>
{:else}No such pull request{/if}

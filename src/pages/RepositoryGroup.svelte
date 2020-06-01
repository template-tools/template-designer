<script>
  import RepositoryGroupCard from "../components/RepositoryGroupCard.svelte";
  import repositoryGroupRoute from "../routes/repository-group.mjs";
</script>

{#if $repositoryGroupRoute}
  <RepositoryGroupCard repositoryGroup={$repositoryGroupRoute} />
{:else}No such group{/if}

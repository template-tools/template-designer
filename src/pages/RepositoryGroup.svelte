<script>
  import RepositoryGroupCard from "../components/RepositoryGroupCard.svelte";
  import { repositoryGroup } from "../provider.mjs";
</script>

{#if $repositoryGroup}
  <RepositoryGroupCard repositoryGroup={$repositoryGroup} />
{:else}No such group{/if}

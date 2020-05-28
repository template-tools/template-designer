<script>
  import RepositoryGroupCard from "../components/RepositoryGroupCard.svelte";
  import { repositoryGroups } from "../provider.mjs";
</script>

<div class="card-panel">
  {#each $repositoryGroups as rg (rg.name)}
    <RepositoryGroupCard repositoryGroup={rg} />
  {/each}
</div>

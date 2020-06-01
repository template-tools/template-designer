<script>
  import RepositoryCard from '../components/RepositoryCard.svelte';
  import repositoryRoute from "../routes/repository.mjs";
</script>

{#if $repositoryRoute}
  <RepositoryCard repository={$repositoryRoute}/>
{:else}No such repository{/if}

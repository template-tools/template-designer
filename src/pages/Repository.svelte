<script>
  import RepositoryCard from '../components/RepositoryCard.svelte';

  export let repository;
</script>

{#if repository}
  <RepositoryCard repository={repository}/>
{:else}No such repository{/if}

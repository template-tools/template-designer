<script>
  import RepositoryCard from '../components/RepositoryCard.svelte';
  import { repository } from "../repository.mjs";
</script>

{#if $repository}
  <RepositoryCard repository={$repository}/>
{:else}No such repository{/if}

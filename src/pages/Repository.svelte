<script>
  import RepositoryCard from '../components/RepositoryCard.svelte';
  import {
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute
  } from "../routes/repositories.mjs";</script>

{#if $repositoryRoute}
  <RepositoryCard repository={$repositoryRoute}/>
{:else}No such repository{/if}

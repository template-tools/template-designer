<script>
  import RepositoryGroupCard from "../components/RepositoryGroupCard.svelte";
  import {
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute
  } from "../routes/repositories.mjs";
  </script>

{#if $repositoryGroupRoute}
  <RepositoryGroupCard repositoryGroup={$repositoryGroupRoute} />
{:else}No such group{/if}

<script>
  import BranchCard from '../components/BranchCard.svelte';
  import {
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute
  } from "../routes/repositories.mjs";</script>

{#if $branchRoute}
  <BranchCard branch={$branchRoute}/>
{:else}No such branch{/if}

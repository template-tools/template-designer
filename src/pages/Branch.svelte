<script>
  import BranchCard from '../components/BranchCard.svelte';
  import branchRoute from "../routes/branch.mjs";
</script>

{#if $branchRoute}
  <BranchCard branch={$branchRoute}/>
{:else}No such branch{/if}

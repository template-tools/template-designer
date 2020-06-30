<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import Attributes from "./Attributes.svelte";

  export let repositoryGroup;
</script>

<div class="card">
  <div class="card-content">
    <div class="card-title">{repositoryGroup.displayName}</div>
    {#if repositoryGroup.homePageURL}
      <a href={repositoryGroup.homePageURL}>Home</a>
    {/if}
    <Attributes object={repositoryGroup} />
    <ObjectLink object={repositoryGroup.provider} />
  </div>
</div>

<script>
  import Attributes from "./Attributes.svelte";

  export let repositoryGroup;
</script>

<div class="card">
  <div class="card-content">
    <div class="card-title">{repositoryGroup.displayName}</div>
    {#if repositoryGroup.description}{repositoryGroup.description}{/if}
    {#if repositoryGroup.id}{repositoryGroup.id}{/if}
    <a href={repositoryGroup.url}>Home</a>

    <Attributes object={repositoryGroup}/>
  </div>
</div>

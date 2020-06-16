<script>
  import Attributes from "./Attributes.svelte";
  import ProviderLink from "./ProviderLink.svelte";

  export let repositoryGroup;
</script>

<div class="card">
  <div class="card-content">
    <div class="card-title">{repositoryGroup.displayName}</div>
    {#if repositoryGroup.homePageURL}}<a href={repositoryGroup.homePageURL}>Home</a>{/if}
    <Attributes object={repositoryGroup}/>
    <ProviderLink provider={repositoryGroup.provider} />
  </div>
</div>

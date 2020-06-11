<script>
  import Attributes from "./Attributes.svelte";
  import ProviderLink from "./ProviderLink.svelte";

  export let repositoryGroup;
</script>

<div class="card">
  <div class="card-content">
    <div class="card-title">{repositoryGroup.displayName}</div>
    <Attributes object={repositoryGroup}/>
    <ProviderLink provider={repositoryGroup.provider} />
  </div>
</div>

<script>
  import Attributes from "./Attributes.svelte";

  export let repositoryGroup;
</script>

<div class="card">
  <div class="card-content">
    <div class="card-title">{repositoryGroup.displayName}</div>
    <Attributes object={repositoryGroup}/>
  </div>
</div>

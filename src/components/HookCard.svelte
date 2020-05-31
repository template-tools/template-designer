<script>
  import Attributes from "./Attributes.svelte";

  export let hook;
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{hook.id}</h5>
    <Attributes object={hook}/>
  </div>
</div>

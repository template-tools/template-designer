<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let provider;
</script>

<ObjectLink object={provider}>
  <slot>
    <img
      src="images/{provider.name}.svg"
      width="18"
      height="18"
      alt={provider.name} />
    {provider.name}
  </slot>
</ObjectLink>

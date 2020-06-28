<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let provider;
</script>

<ObjectLink object={provider}>
  <slot>
    <img
      src="images/{provider.name}.svg"
      width="16"
      height="16"
      alt={provider.name} />
    {provider.name}
  </slot>
</ObjectLink>

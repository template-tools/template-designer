<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let branch;
</script>

<ObjectLink object={branch}>
  <slot>
    <img
      src="images/{branch.provider.name}.svg"
      width="18"
      height="18"
      alt={branch.provider.name} />
    {branch.fullName}
  </slot>
</ObjectLink>

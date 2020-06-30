<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let repository;
</script>

<ObjectLink object={repository}>
  <slot>
    <img
      src="images/{repository.provider.name}.svg"
      width="18"
      height="18"
      alt={repository.provider.name} />
    {repository.fullName}
  </slot>
</ObjectLink>

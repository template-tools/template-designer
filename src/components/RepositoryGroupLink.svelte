<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let repositoryGroup;
</script>

<ObjectLink object={repositoryGroup}>
  <slot>
    <img
      src="images/{repositoryGroup.provider.name}.svg"
      width="18"
      height="18"
      alt={repositoryGroup.provider.name} />
    {repositoryGroup.name}
  </slot>
</ObjectLink>

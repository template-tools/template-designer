<script>
  import ObjectLink from "./ObjectLink.svelte";
  import repositoryGroupRoute from "../routes/repository-group.mjs";

  export let repositoryGroup;
</script>

<ObjectLink route={repositoryGroupRoute} object={repositoryGroup}>
  <slot>
    <img
      src="images/{repositoryGroup.provider.name}.svg"
      width="16"
      height="16"
      alt={repositoryGroup.provider.name} />

    <div
      aria-label={repositoryGroup.description}
      data-microtip-position="up"
      role="tooltip">
      {repositoryGroup.name}
    </div>
  </slot>
</ObjectLink>

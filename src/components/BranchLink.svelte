<script>
  import ObjectLink from "./ObjectLink.svelte";
  import branchRoute from "../routes/branch.mjs";

  export let branch;
</script>

<ObjectLink route={branchRoute} object={branch}>
  <slot>
    <img
      src="images/{branch.provider.name}.svg"
      width="16"
      height="16"
      alt={branch.provider.name} />

    <div
      aria-label={branch.description}
      data-microtip-position="up"
      role="tooltip">
      {branch.fullName}
    </div>
  </slot>
</ObjectLink>

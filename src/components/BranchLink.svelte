<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let branch;
</script>

<ObjectLink object={branch}>
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

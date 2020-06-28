<script>
  import { ObjectLink } from "svelte-guard-history-router";
  export let repository;
</script>

<ObjectLink object={repository}>
  <slot>
    <img
      src="images/{repository.provider.name}.svg"
      width="16"
      height="16"
      alt={repository.provider.name} />

    <div
      aria-label={repository.description}
      data-microtip-position="up"
      role="tooltip">
      {repository.fullName}
    </div>
  </slot>
</ObjectLink>

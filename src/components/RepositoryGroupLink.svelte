<script>
  import { Link } from "svelte-guard-history-router";
  export let repositoryGroup;
</script>

<Link href="/group/{repositoryGroup.name}">
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
</Link>

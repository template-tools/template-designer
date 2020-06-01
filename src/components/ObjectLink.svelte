<script>
  import { Link } from "svelte-guard-history-router";

  export let object;
  export let route;
</script>

<Link href={route.pathFor(object)}>
  <slot />
</Link>

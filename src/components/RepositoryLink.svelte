<script>
  import { Link } from "svelte-guard-history-router";
  export let repository;
</script>

{#if repository}
<Link href="/repository/{repository.owner.name}/{repository.name}">
  <slot>
    <div aria-label={repository.description} data-microtip-position="up" role="tooltip">{repository.fullName}</div>
  </slot>
</Link>
{/if}

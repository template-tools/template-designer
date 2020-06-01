<script>
  import { Link } from "svelte-guard-history-router";
  import repositoryRoute from "../routes/repository.mjs";

  export let repository;
</script>

{#if repository}
  <Link href="{repositoryRoute.pathFor(repository)}">
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
  </Link>
{/if}

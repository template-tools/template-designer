<script>
  import { Link } from "svelte-guard-history-router";
  import branchRoute from "../routes/branch.mjs";

  export let branch;
</script>

{#if branch}
  <Link href="{branchRoute.pathFor(branch)}">
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
  </Link>
{/if}

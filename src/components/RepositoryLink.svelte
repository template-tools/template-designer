<script>
  import ObjectLink from "./ObjectLink.svelte";
  import {
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute
  } from "../routes/repositories.mjs";

  export let repository;
</script>

<ObjectLink route={repositoryRoute} object={repository}>
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

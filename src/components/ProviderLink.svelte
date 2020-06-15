<script>
  import ObjectLink from "./ObjectLink.svelte";
  import { providerRoute } from "../routes/repositories.mjs";

  export let provider;
</script>

<ObjectLink route={providerRoute} object={provider}>
  <slot>
    <img
      src="images/{provider.name}.svg"
      width="16"
      height="16"
      alt={provider.name} />
    {provider.name}
  </slot>
</ObjectLink>

<script>
  import ProviderLogo from "./ProviderLogo.svelte";

  export let object;
</script>

<ProviderLogo provider={object.provider} />
{object.name}

<script>
  import ProviderLogo from "../components/ProviderLogo.svelte";

  export let object;
</script>

<ProviderLogo provider={object.provider} />
{object.name}

<script>
  import ProviderLogo from "../components/ProviderLogo.svelte";
  export let object;
</script>

<ProviderLogo provider={object} />
{object.name}

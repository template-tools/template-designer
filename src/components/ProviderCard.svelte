<script>
  import Attributes from "./Attributes.svelte";
  import AttributeField from "./AttributeField.svelte";
  import SecureAttributeField from "./SecureAttributeField.svelte";
  import contentEntryRoute from "../routes/content-entry.mjs";
  import { provider as aggregatedProvider } from "../provider.mjs";

  export let provider;

  let active = false;

  const ads = provider.constructor.attributes;

  const attributes = Object.entries(ads)
    .filter(([name, attribute]) => attribute.env)
    .map(([name, attribute]) => {
      return { name, ...attribute, value: provider[name] };
    });

  async function submit() {
    attributes.forEach(attribute => {
      const env = Array.isArray(attribute.env)
        ? attribute.env[0]
        : attribute.env;
      localStorage[env] = attribute.value;
    });

    aggregatedProvider.providers.forEach((p, i) => {
      if (p === provider) {
        console.log("replace " + i);
        const np = new p.constructor(undefined, localStorage);
        console.log(np);
        aggregatedProvider.provider[i] = np;
      }
    });
  }
</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{provider.name}</h5>

    <Attributes object={provider} />
  </div>

  <form on:submit|preventDefault={submit}>
    {#each attributes as attribute (attribute.name)}
      {#if attribute.private}
        <SecureAttributeField {attribute} />
      {:else}
        <AttributeField {attribute} />
      {/if}
    {/each}

    <button id="submit" type="submit" disabled={false}>
      Save
      {#if active}
        <div class="spinner" />
      {/if}
    </button>
  </form>
</div>

<script>
  import Attributes from "./Attributes.svelte";
  import contentEntryRoute from "../routes/content-entry.mjs";

  export let provider;

  let active = false;

  const ads = provider.constructor.attributes;

  const attributes = Object.entries(ads).filter(([name,attribute]) => attribute.env).map(([name, attribute]) => {
    return { name, ...attribute, value: provider[name] };
  });


    async function submit() {
   // localStorage.BITBUCKET_USERNAME = bitbucket_username;
   // localStorage.BITBUCKET_PASSWORD = bitbucket_password;
  //  localStorage.GITEA_TOKEN = gitea_token;
  //  localStorage.GITEA_API = gitea_api;
  }

</script>

<div class="card">
  <div class="card-content">
    <h5 class="card-title">{provider.name}</h5>

    <Attributes object={provider} />
  </div>

  <form on:submit|preventDefault={submit}>
    {#each attributes as attribute (attribute.name)}
      <label for="{attribute.name}">
        {attribute.name} ({attribute.env})
        <input
          aria-label="{attribute.name}"
          aria-required="true"
          maxlength="75"
          autocorrect="off"
          autocapitalize="off"
          id="{attribute.name}"
          type="text"
          placeholder="{attribute.name}"
          name="{attribute.name}"
          required
          disabled={active}
          bind:value={attribute.value} />
      </label>
    {/each}

    <button
      id="submit"
      type="submit"
      disabled={false}>
      Save
      {#if active}
        <div class="spinner" />
      {/if}
    </button>
  </form>
</div>

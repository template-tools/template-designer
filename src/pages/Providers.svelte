<script>
  import { ObjectLink } from "svelte-guard-history-router";
  import providerFactories from "../provider-factories.mjs";
  import provider from "../provider.mjs";
  import { api, client_id, redirect_uri, state } from "../auth.mjs";

  async function addProvider(ev) {
    const i = Number.parseInt(ev.srcElement.id.substring(3));
    provider.providers.push(new providerFactories[i]());
    // providersRoute.enter(); // HACK

    /*
    try {
      const url = `${api}/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}& response_type=code&state=${state}`;

      const response = await fetch(url);
      console.log(response);

      window.location = response.url;
    } catch (e) {
      console.log(e);
    }
    */
  }

  export let router;

  const route = router.route;
</script>

<table>
  <thead>
    <th>Factories</th>
  </thead>
  <tbody>
    {#each providerFactories as factory, i (i)}
      <tr>
        <td>
          <img
            src="images/{factory.name}.svg"
            width="16"
            height="16"
            alt={factory.name} />
          {factory.name}
        </td>
        <td>
          <button id="add{i}" on:click={addProvider}>Add</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<table>
  <thead>
    <th>Active</th>
  </thead>
  <tbody>
    {#each $route as provider}
      <tr>
        <td>
          <ObjectLink object={provider} />
        </td>
      </tr>
    {/each}
  </tbody>
</table>

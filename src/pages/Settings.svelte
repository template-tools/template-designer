<script>
  import providerFactories from "../provider-factories.mjs";
  import provider from "../provider.mjs";
  import { api, client_id, redirect_uri, state } from "../auth.mjs";

  const providers = provider.providers;

  let message;
  let bitbucket_username = localStorage.BITBUCKET_USERNAME;
  let bitbucket_password = localStorage.BITBUCKET_PASSWORD;
  let gitea_token = localStorage.GITEA_TOKEN;
  let gitea_api = localStorage.GITEA_API;
  let active = false;

  async function submit() {
    localStorage.BITBUCKET_USERNAME = bitbucket_username;
    localStorage.BITBUCKET_PASSWORD = bitbucket_password;
    localStorage.GITEA_TOKEN = gitea_token;
    localStorage.GITEA_API = gitea_api;
  }

  async function addProvider() {
    try {
      const url = `${api}/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}& response_type=code&state=${state}`;

      const response = await fetch(url);
      console.log(response);
      //console.log(response.redirected);

      window.location = response.url;
    } catch (e) {
      console.log(e);
    }
  }
</script>

<form on:submit|preventDefault={submit}>

  <table>
    <thead>
      <th>Factories</th>
    </thead>
    <tbody>
      {#each providerFactories as factory (factory.name)}
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
              <button id="add" on:click={addProvider}>Add</button>
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
      {#each providers as provider}
        <tr>
          <td>
            <img
              src="images/{provider.name}.svg"
              width="16"
              height="16"
              alt={provider.name} />
            {provider.name}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  {#if message}
    <slot name="message">
      <div class="error" id="message">{message}</div>
    </slot>
  {/if}

  <slot name="inputs">
    <label for="BITBUCKET_USERNAME">
      Bitbucket Username
      <input
        aria-label="BITBUCKET_USERNAME"
        aria-required="true"
        maxlength="75"
        autocorrect="off"
        autocapitalize="off"
        id="BITBUCKET_USERNAME"
        type="text"
        placeholder="Bitbicket Username"
        name="BITBUCKET_USERNAME"
        required
        disabled={active}
        bind:value={bitbucket_username} />
    </label>
    <label for="BITBUCKET_PASSWORD">
      Bitbucket Password
      <input
        aria-label="bitbucket password"
        aria-required="true"
        autocorrect="off"
        autocapitalize="off"
        id="BITBUCKET_PASSWORD"
        type="password"
        placeholder="Bitbucket Password"
        name="BITBUCKET_PASSWORD"
        required
        disabled={active}
        bind:value={bitbucket_password} />
    </label>

    <label for="GITEA_TOKEN">
      Gitea Token
      <input
        aria-label="gitea token"
        aria-required="true"
        autocorrect="off"
        autocapitalize="off"
        id="GITEA_TOKEN"
        type="password"
        placeholder="Gitea Token"
        name="GITEA_TOKEN"
        required
        disabled={active}
        bind:value={gitea_token} />
    </label>
    <label for="GITEA_API">
      Gitea API
      <input
        aria-label="GITEA_API"
        aria-required="true"
        maxlength="128"
        autocorrect="off"
        autocapitalize="off"
        id="GITEA_API"
        type="text"
        placeholder="Gitea API"
        name="GITEA_API"
        required
        disabled={active}
        bind:value={gitea_api} />
    </label>

  </slot>

  <slot name="submit">
    <button
      id="submit"
      type="submit"
      disabled={!bitbucket_username || !bitbucket_password}>
      Save
      {#if active}
        <div class="spinner" />
      {/if}
    </button>
  </slot>
</form>

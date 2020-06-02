<script>
  import providerFactories from "../provider-factories.mjs";

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

  async function oauth() {
    const api = "https://mfelten.dynv6.net/services/git";
    const client_id = "ed012bee-8b62-47ad-aa73-cc3cbd15cb68";
    const redirect_uri =
      "https://mfelten.dynv6.net/services/component-template-designer/about";
    const state = "dalöfskksdfjfkl";

    const url = `${api}/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}& response_type=code&state=${state}`;

    try {
      const response = fetch(url);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  oauth();
</script>

<form on:submit|preventDefault={submit}>

  <ul>
    {#each providerFactories as factory}
      <li>
        <img
          src="images/{factory.name}.svg"
          width="16"
          height="16"
          alt={factory.name} />
        {factory.name}
      </li>
    {/each}
  </ul>

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

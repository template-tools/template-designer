<script>
  let message;
  let username = localStorage.BITBUCKET_USERNAME;
  let password = localStorage.BITBUCKET_PASSWORD;
  let active = false;

  async function submit() {
    localStorage.BITBUCKET_USERNAME = username;
    localStorage.BITBUCKET_PASSWORD = password;
  }
</script>


<form on:submit|preventDefault={submit}>
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
        placeholder="Username"
        name="username"
        required
        disabled={active}
        bind:value={username} />
    </label>
    <label for="BITBUCKET_PASSWORD">
      Bitbucket Password
      <input
        aria-label="password"
        aria-required="true"
        autocorrect="off"
        autocapitalize="off"
        id="BITBUCKET_PASSWORD"
        type="password"
        placeholder="Password"
        name="password"
        required
        disabled={active}
        bind:value={password} />
    </label>
  </slot>

  <slot name="submit">
    <button id="submit" type="submit" disabled={!username || !password}>
      Save
      {#if active}
        <div class="spinner" />
      {/if}
    </button>
  </slot>
</form>

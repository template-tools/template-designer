<script>
  import { Outlet, link, active } from "svelte-guard-history-router";
  import { Menue } from "svelte-common";
  import * as style from "./main.css";
  import { router } from "./router.mjs";
  //import { provider } from "./provider.mjs";
</script>

<!--
<div>Name: {provider.name}</div>

{#await provider.repository('arlac77/sync-test-repository')}
  <p>...waiting</p>
{:then repo}
  <p>The repo is {repo.name}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
-->

<nav>
  <a href="/" use:link={router} use:active={router}>
    <img class="logo" src="logo.svg" alt="Template Designer" />
    Template Designer
  </a>
  <ul class="left">
    <li>
      <a href="/group" use:link={router} use:active={router}>
        Repository Groups
      </a>
    </li>
    <li>
      <a href="/repository" use:link={router} use:active={router}>
        Repositories
      </a>
    </li>
    <li>
      <a href="/about" use:link={router} use:active={router}>About</a>
    </li>
  </ul>
  <ul>
    <li />
  </ul>
</nav>
<main>
  <Outlet {router} />
</main>

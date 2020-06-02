<script>
  import {
    TargetRoute,
    Outlet,
    link,
    active
  } from "svelte-guard-history-router";
  import { Menue } from "svelte-common";
  import About from "./pages/About.svelte";
  import Settings from "./pages/Settings.svelte";

  import * as style from "./main.css";
  import router from "./router.mjs";

  let state;

  $: {
    state = $router.state;
  }
</script>

<nav>
  <a href="/" use:link={router} use:active={router}>
    <img class="logo" src="images/git.svg" alt="Template Designer" />
    Template Designer
  </a>
  <ul class="left">
    <li>
      <a href="/group" use:link={router} use:active={router}>Groups</a>
      <a href="/repository" use:link={router} use:active={router}>
        Repositories
      </a>
    </li>
    <li>
      <TargetRoute def={['/about', About]} {router}>About</TargetRoute>
    </li>
    <li>
      <TargetRoute def={['/settings', Settings]} {router}>Settings</TargetRoute>
    </li>
  </ul>
  <ul>
    <li />
  </ul>
</nav>
<main>
  {JSON.stringify(state.params)}
  <Outlet {router} />
</main>

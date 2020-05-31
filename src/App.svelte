<script>
  import { Outlet, link, active } from "svelte-guard-history-router";
  import { Menue } from "svelte-common";
  import * as style from "./main.css";
  import { router } from "./router.mjs";

  
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
      <a href="/about" use:link={router} use:active={router}>About</a>
    </li>
    <li>
      <a href="/settings" use:link={router} use:active={router}>Settings</a>
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

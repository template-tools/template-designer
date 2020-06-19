<script>
  import {
    TheRouter,
    TargetRoute,
    Outlet,
    link,
    active
  } from "svelte-guard-history-router";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Settings from "./pages/Settings.svelte";

  import * as style from "./main.css";
  import router from "./router.mjs";
</script>

<TheRouter {router}>
  <nav>
    <TargetRoute path="/" component={Home}>
      <img class="logo" src="images/git.svg" alt="Template Designer" />
      Template Designer
    </TargetRoute>

    <ul class="left">
      <li>
        <a href="/group" use:link={router} use:active={router}>Groups</a>
        <a href="/repository" use:link={router} use:active={router}>
          Repositories
        </a>
      </li>
      <li>
        <TargetRoute path="/about" component={About}>About</TargetRoute>
      </li>
      <li>
        <TargetRoute path="/settings" component={Settings}>
          Settings
        </TargetRoute>
      </li>
    </ul>
    <ul>
      <li />
    </ul>
  </nav>
  <main>
    <Outlet />
  </main>
</TheRouter>

<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Providers from "./pages/Providers.svelte";
  import { ProvidersRoute, RepositoriesRoute } from "./routes/repositories.mjs";
  import * as style from "./main.css";
  import router from "./router.mjs";
</script>

<Router {router}>
  <nav>
    <Route path="/" component={Home}>
      <img class="logo" src="images/git.svg" alt="Template Designer" />
      Template Designer
    </Route>

    <ul class="left">
      <li>
        <Route path="/group">Groups</Route>
        <Route
          path="/repository">
          Repositories
        </Route>
        <Route path="/providers" factory={ProvidersRoute} component={Providers}>
          Providers
        </Route>
      </li>
      <li>
        <Route path="/about" component={About}>About</Route>
      </li>
    </ul>
  </nav>
  <main>
    <Outlet />
  </main>
</Router>

<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import AuthAccept from "./pages/AuthAccept.svelte";

  import Providers from "./pages/Providers.svelte";
  import Provider from "./pages/Provider.svelte";
  import ProviderLink from "./components/ProviderLink.svelte";

  import {
    ProvidersRoute,
    ProviderRoute,
    RepositoriesRoute
  } from "./routes/repository-routes.mjs";

  import * as style from "./main.css";
  import router from "./router.mjs";
</script>

<Router {router}>
  <nav>
    <Route href="/" path="*" component={Home}>
      <img class="logo" src="images/git.svg" alt="Template Designer" />
      Template Designer
    </Route>

    <ul class="left">
      <li>
        <Route path="/provider" factory={ProvidersRoute} component={Providers}>
          Providers
          <Route
            path="/:provider"
            factory={ProviderRoute}
            linkComponent={ProviderLink}
            component={Provider} />
        </Route>

        <Route path="/group">Groups</Route>
        <Route path="/repository">Repositories</Route>
      </li>
      <li>
        <Route path="/about" component={About}>About</Route>
      </li>
    </ul>
  </nav>
  <Route path="/auth/accept" component={AuthAccept} />

  <main>
    <Outlet />
  </main>
</Router>

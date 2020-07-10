<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import base from "consts:base";

  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import AuthAccept from "./pages/AuthAccept.svelte";

  import Providers from "./pages/Providers.svelte";
  import RepositoryGroups from "./pages/RepositoryGroups.svelte";
  import RepositoryGroup from "./pages/RepositoryGroup.svelte";
  import RepositoryGroupLink from "./components/RepositoryGroupLink.svelte";
  import Repositories from "./pages/Repositories.svelte";
  import Repository from "./pages/Repository.svelte";
  import RepositoryLink from "./components/RepositoryLink.svelte";

  import {
    ProvidersRoute,
    RepositoryGroupsRoute,
    RepositoryGroupRoute,
    RepositoriesRoute,
    RepositoryRoute
  } from "./routes.mjs";

  import ProviderRoutes from "./ProviderRoutes.svelte";
  import HookRoutes from "./HookRoutes.svelte";
  import PullRequestRoutes from "./PullRequestRoutes.svelte";
  import BranchRoutes from "./BranchRoutes.svelte";

  import { waitingGuard } from "./main.mjs";

  import * as style from "./main.css";
</script>

<Router {base}>
  <nav>
    <Route href="/" path="*" component={Home}>
      <img class="logo" src="images/git.svg" alt="Template Designer" />
      Template Designer
    </Route>

    <ul class="left">
      <li>
        <Route path="/provider" factory={ProvidersRoute} component={Providers}>
          Providers
          <ProviderRoutes/>
        </Route>
        <Route
          path="/group"
          factory={RepositoryGroupsRoute}
          guards={waitingGuard}
          component={RepositoryGroups}>
          Groups
          <Route
            path="/:group"
            factory={RepositoryGroupRoute}
            linkComponent={RepositoryGroupLink}
            component={RepositoryGroup} />
        </Route>

        <Route
          path="/repository"
          factory={RepositoriesRoute}
          guards={waitingGuard}
          component={Repositories}>
          Repositories
          <Route
            path="/:group/:repository"
            factory={RepositoryRoute}
            linkComponent={RepositoryLink}
            component={Repository}>
            <BranchRoutes />
            <PullRequestRoutes />
            <HookRoutes />
          </Route>
        </Route>
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

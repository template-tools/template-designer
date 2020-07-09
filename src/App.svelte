<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import base from "consts:base";

  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import AuthAccept from "./pages/AuthAccept.svelte";

  import Providers from "./pages/Providers.svelte";
  import Provider from "./pages/Provider.svelte";
  import ProviderLink from "./components/ProviderLink.svelte";
  import RepositoryGroups from "./pages/RepositoryGroups.svelte";
  import RepositoryGroup from "./pages/RepositoryGroup.svelte";
  import RepositoryGroupLink from "./components/RepositoryGroupLink.svelte";
  import Repositories from "./pages/Repositories.svelte";
  import Repository from "./pages/Repository.svelte";
  import RepositoryLink from "./components/RepositoryLink.svelte";
  import Branch from "./pages/Branch.svelte";
  import BranchLink from "./components/BranchLink.svelte";
  import ContentEntries from "./pages/ContentEntries.svelte";
  import ContentEntry from "./pages/ContentEntry.svelte";
  import Hooks from "./pages/Hooks.svelte";
  import Hook from "./pages/Hook.svelte";
  import HookLink from "./components/HookLink.svelte";
  import PullRequest from "./pages/PullRequest.svelte";
  import PullRequestLink from "./components/PullRequestLink.svelte";

  import {
    ProvidersRoute,
    ProviderRoute,
    RepositoryGroupsRoute,
    RepositoryGroupRoute,
    RepositoriesRoute,
    RepositoryRoute,
    BranchRoute,
    ContentEntriesRoute,
    ContentEntryRoute,
    HooksRoute,
    HookRoute,
    PullRequestRoute
  } from "./routes.mjs";
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
          <Route
            path="/:provider"
            factory={ProviderRoute}
            linkComponent={ProviderLink}
            component={Provider} />
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
            <Route
              path="/branch/:branch"
              factory={BranchRoute}
              linkComponent={BranchLink}
              component={Branch}>
              <Route
                path="/entry"
                factory={ContentEntriesRoute}
                component={ContentEntries}>
                <Route
                  path="/:entry"
                  factory={ContentEntryRoute}
                  component={ContentEntry} />
              </Route>
            </Route>
            <Route
              path="/pr/:pr"
              factory={PullRequestRoute}
              linkComponent={PullRequestLink}
              component={PullRequest} />
            <Route path="/hook" factory={HooksRoute} component={Hooks}>
              <Route
                path="/:hook"
                factory={HookRoute}
                linkComponent={HookLink}
                component={Hook} />
            </Route>
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

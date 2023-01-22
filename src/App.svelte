<script>
  import {
    Router,
    Route,
    Outlet,
    WaitingGuard
  } from "svelte-guard-history-router";
  import { TopNav } from "svelte-common";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import AuthAccept from "./pages/AuthAccept.svelte";
  import Waiting from "./pages/Waiting.svelte";
  import ProviderRoutes from "./ProviderRoutes.svelte";
  import RepositoryGroupRoutes from "./RepositoryGroupRoutes.svelte";
  import RepositoryRoutes from "./RepositoryRoutes.svelte";
  import HookRoutes from "./HookRoutes.svelte";
  import PullRequestRoutes from "./PullRequestRoutes.svelte";
  import BranchRoutes from "./BranchRoutes.svelte";
  import ContentEntryRoutes from "./ContentEntryRoutes.svelte";
  import provider from "./provider.mjs";
  import {base} from "./conststants.mjs";
  import * as style from "./main.css";

  const waitingGuard = new WaitingGuard(Waiting);
</script>

<Router {base}>
  <TopNav offset={42}>
    <Route href="/" path="*" component={Home}>
      <img class="logo" src="images/git.svg" alt="Template Designer" />Template
      Designer
    </Route>

    <ul class="left">
      <li>
        <ProviderRoutes {provider}>Provider</ProviderRoutes>
        <RepositoryGroupRoutes {provider} guard={waitingGuard}>
          Groups
        </RepositoryGroupRoutes>

        <RepositoryRoutes {provider} guard={waitingGuard}>
          <BranchRoutes {provider}>
            <ContentEntryRoutes {provider} />
          </BranchRoutes>
          <PullRequestRoutes {provider} />
          <HookRoutes {provider} />
        </RepositoryRoutes>
      </li>
      <li>
        <Route path="/about" component={About}>About</Route>
      </li>
    </ul>
  </TopNav>
  <Route path="/auth/accept" component={AuthAccept} />

  <main>
    <Outlet />
  </main>
</Router>

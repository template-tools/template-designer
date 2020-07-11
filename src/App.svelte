<script>
  import { Router, Route, Outlet } from "svelte-guard-history-router";
  import base from "consts:base";

  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import AuthAccept from "./pages/AuthAccept.svelte";

  import ProviderRoutes from "./ProviderRoutes.svelte";
  import RepositoryGroupRoutes from "./RepositoryGroupRoutes.svelte";
  import RepositoryRoutes from "./RepositoryRoutes.svelte";
  import HookRoutes from "./HookRoutes.svelte";
  import PullRequestRoutes from "./PullRequestRoutes.svelte";
  import BranchRoutes from "./BranchRoutes.svelte";
  import ContentEntryRoutes from "./ContentEntryRoutes.svelte";

  import { waitingGuard } from "./main.mjs";
  import provider from "./provider.mjs";

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
        <ProviderRoutes {provider}>Provider</ProviderRoutes>
        <RepositoryGroupRoutes {provider} guards={waitingGuard}>
          Groups
        </RepositoryGroupRoutes>

        <RepositoryRoutes {provider} guards={waitingGuard}>
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
  </nav>
  <Route path="/auth/accept" component={AuthAccept} />

  <main>
    <Outlet />
  </main>
</Router>

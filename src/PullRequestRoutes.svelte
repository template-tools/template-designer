<script>
  import { PullRequest } from "repository-provider";
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import PullRequestPage from "./pages/PullRequest.svelte";
  import PullRequestLink from "./components/PullRequestLink.svelte";

  export let provider;

  export class PullRequestRoute extends IteratorStoreRoute {
    async iteratorFor(properties) {
      const r = await provider.repository(
        `${properties.group}/${properties.repository}`
      );
      return r.pullRequests();
    }
    propertiesFor() {}
  }
</script>

<Route path="/pr" factory={PullRequestRoute}>
  <Route
    path="/:pr"
    objectInstance={PullRequest}
    propertyMapping={{ pr: 'name' }}
    factory={ChildStoreRoute}
    linkComponent={PullRequestLink}
    component={PullRequestPage} />
</Route>

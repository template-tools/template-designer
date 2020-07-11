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

  async function iteratorPullRequests(properties) {
    console.log("PR",properties);
    const r = await provider.repository(
      `${properties.group}/${properties.repository}`
    );
    return r.pullRequests();
  }
</script>

<Route
  path="/pr"
  iteratorFor={iteratorPullRequests}
  factory={IteratorStoreRoute}>
  <Route
    path="/:pr"
    objectInstance={PullRequest}
    propertyMapping={{ pr: 'name' }}
    factory={ChildStoreRoute}
    linkComponent={PullRequestLink}
    component={PullRequestPage} />
</Route>

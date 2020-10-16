<script>
  import { PullRequest } from "repository-provider";
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { PullRequestLink } from "svelte-repository-provider";
  import PullRequestPage from "./pages/PullRequest.svelte";

  export let provider;

  async function * iteratorPullRequests(transition, properties) {
    const r = await provider.repository(
      `${properties.group}/${properties.repository}`
    );
    yield * r.pullRequests();
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

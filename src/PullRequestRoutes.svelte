<script>
  import { PullRequest } from "repository-provider";
  import {
    Route,
    DetailRoute,
    MasterRoute
  } from "svelte-guard-history-router";
  import { PullRequestLink } from "svelte-repository-provider";
  import PullRequestPage from "./pages/PullRequest.svelte";

  export let provider;

  async function * iteratorPullRequests(transition) {
    const r = await provider.repository(
      `${transition.params.group}/${transition.params.repository}`
    );
    yield * r.pullRequests();
  }
</script>

<Route
  path="/pr"
  iteratorFor={iteratorPullRequests}
  objectInstance={PullRequest}
  factory={MasterRoute}>
  <Route
    path="/:pr"
    propertyMapping={{ pr: 'name' }}
    factory={DetailRoute}
    linkComponent={PullRequestLink}
    component={PullRequestPage} />
</Route>

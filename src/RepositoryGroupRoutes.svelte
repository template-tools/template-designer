<script>
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import { RepositoryGroup } from "repository-provider";
  import RepositoryGroupsPage from "./pages/RepositoryGroups.svelte";
  import RepositoryGroupPage from "./pages/RepositoryGroup.svelte";
  import RepositoryGroupLink from "./components/RepositoryGroupLink.svelte";

  export let provider;
  export let guards;

  function iteratorGroups() {
    return provider.repositoryGroups();
  }

  class RepositoryGroupRoute extends ChildStoreRoute {
    objectFor(properties) {
      return provider.repositoryGroup(properties.group);
    }
  }
</script>

<Route
  path="/group"
  factory={IteratorStoreRoute}
  iteratorFor={iteratorGroups}
  component={RepositoryGroupsPage}
  {guards}>
  <slot />
  <Route
    path="/:group"
    objectInstance={RepositoryGroup}
    propertyMapping={{ group: 'name' }}
    factory={RepositoryGroupRoute}
    linkComponent={RepositoryGroupLink}
    component={RepositoryGroupPage} />
</Route>

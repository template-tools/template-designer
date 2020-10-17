<script>
  import { Repository } from "repository-provider";
  import {
    Route,
    ChildStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import RepositoriesPage from "./pages/Repositories.svelte";
  import RepositoryPage from "./pages/Repository.svelte";
  import RepositoryLink from "./components/RepositoryLink.svelte";

  export let provider;
  export let guards;
</script>

<Route
  path="/repository"
  factory={IteratorStoreRoute}
  iteratorFor={(transition, properties) => provider.repositories()}
  objectInstance={Repository}
  component={RepositoriesPage}
  {guards}>
  Repositories
  <Route
    path="/:group/:repository"
    propertyMapping={{ repository: 'name', group: 'owner.name' }}
    objectFor={(transition, properties) => provider.repository(properties.group + '/' + properties.repository)}
    factory={ChildStoreRoute}
    linkComponent={RepositoryLink}
    component={RepositoryPage}>
    <slot />
  </Route>
</Route>

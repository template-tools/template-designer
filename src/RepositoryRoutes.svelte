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

  function repositoryIterator(transition, properties) {
    return provider.repositories();
  }

  function objectRepository(transition, properties) {
    return provider.repository(properties.group + "/" + properties.repository);
  }
</script>

<Route
  path="/repository"
  factory={IteratorStoreRoute}
  iteratorFor={repositoryIterator}
  component={RepositoriesPage}
  {guards}>
  Repositories
  <Route
    path="/:group/:repository"
    propertyMapping={{ repository: 'name', group: 'owner.name' }}
    objectInstance={Repository}
    objectFor={objectRepository}
    factory={ChildStoreRoute}
    linkComponent={RepositoryLink}
    component={RepositoryPage}>
    <slot />
  </Route>
</Route>

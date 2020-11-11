<script>
  import { Branch } from "repository-provider";
  import { ContentEntry } from "content-entry";
  import {
    Route,
    ObjectStoreRoute,
    IteratorStoreRoute
  } from "svelte-guard-history-router";
  import ContentEntriesPage from "./pages/ContentEntries.svelte";
  import ContentEntryPage from "./pages/ContentEntry.svelte";

  export let provider;

  class ContentEntriesRoute extends IteratorStoreRoute {
    async *iteratorFor(transition) {
      const branch = await provider.branch(
        `${transition.params.group}/${transition.params.repository}#${transition.params.branch}`
      );
      yield* branch.entries();
    }

    propertiesFor(object, entry) {
      return object instanceof Branch && entry
        ? {
            provider: object.provider.name,
            repository: object.repository.name,
            group: object.repository.owner.name,
            branch: object.name
          }
        : undefined;
    }
  }

  class ContentEntryRoute extends ObjectStoreRoute {
    async objectFor(transition) {
      const branch = await provider.branch(
        `${transition.params.group}/${transition.params.repository}#${transition.params.branch}`
      );

      return await branch.entry(properties.entry);
    }

    propertiesFor(entry, object) {
      return entry && object instanceof Branch
        ? {
            provider: object.provider.name,
            repository: object.repository.name,
            group: object.repository.owner.name,
            branch: object.name,
            entry: entry.name
          }
        : undefined;
    }
  }
</script>

<Route
  path="/entry"
  factory={ContentEntriesRoute}
  objectInstance={ContentEntry}
  component={ContentEntriesPage}>
  <Route
    path="/:entry"
    propertyMapping={{ entry: 'name' }}
    factory={ContentEntryRoute}
    component={ContentEntryPage} />
</Route>

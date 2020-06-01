import { readable } from "svelte/store";
import { iteratorStore } from "./iterator-store.mjs";
import { providerFactories } from "./provider-factories.mjs";
import AggregationProvider from "aggregation-repository-provider";

import { router } from "./router.mjs";

export const provider = AggregationProvider.initialize(
  providerFactories,
  { logLevel: "trace" },
  localStorage
);

export const repositoryGroups = iteratorStore(() =>
  provider.repositoryGroups()
);

export const repositoryGroup = readable(undefined, set => {
  provider.repositoryGroup(router.state.params.group).then(r => set(r));
  return () => {};
});

export const repositories = iteratorStore(() => provider.repositories());

export const branch = readable(undefined, set => {
  provider
    .branch(
      router.state.params.group +
        "/" +
        router.state.params.repository +
        "#" +
        router.state.params.branch
    )
    .then(r => set(r));
  return () => {};
});

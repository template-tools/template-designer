import { readable } from "svelte/store";
import { providerFactories } from "./provider-factories.mjs";
import AggregationProvider from "aggregation-repository-provider";

import { router } from "./router.mjs";

export const provider = AggregationProvider.initialize(
  providerFactories,
  { logLevel: "trace" },
  localStorage
);

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

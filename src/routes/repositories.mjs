import { IteratorStoreRoute } from "svelte-guard-history-router";
import provider from "../provider.mjs";
import Repositories from "../pages/Repositories.svelte";

export const repositoriesRoute = new IteratorStoreRoute(
  "/repository",
  Repositories,
  {
    iteratorForProperties: async properties => provider.repositories()
  }
);

export default repositoriesRoute;

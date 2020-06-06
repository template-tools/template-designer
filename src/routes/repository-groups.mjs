import { IteratorStoreRoute } from "svelte-guard-history-router";
import provider from "../provider.mjs";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";

export const repositoryGroupsRoute = new IteratorStoreRoute(
  "/group",
  RepositoryGroups,
  {
    iteratorForProperties: async properties => provider.repositoryGroups()
  }
);

export default repositoryGroupsRoute;

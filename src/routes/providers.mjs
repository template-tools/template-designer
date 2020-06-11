import { IteratorStoreRoute } from "svelte-guard-history-router";
import provider from "../provider.mjs";
import Providers from "../pages/Providers.svelte";

export const providersRoute = new IteratorStoreRoute(
  "/providers",
  Providers,
  {
    iteratorForProperties: async properties => provider.providers
  }
);

export default providersRoute;

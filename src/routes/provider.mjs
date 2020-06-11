import { ObjectStoreRoute } from "svelte-guard-history-router";
import provider from "../provider.mjs";
import Provider from "../pages/Provider.svelte";

export const providerRoute = new ObjectStoreRoute(
  "/provider/:provider",
  Provider,
  {
    objectForProperties: async properties => provider.providers.find(p => p.name === properties.provider),
    propertiesForObject: provider => {
      return {
        provider: provider.name
      };
    }
  }
);

export default providerRoute;

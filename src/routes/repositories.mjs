import ObjectRoute from "../object-route.mjs";
import { provider } from "../provider.mjs";
import Repositories from "../pages/Repositories.svelte";

export const repositoriesRoute = new ObjectRoute(
  "/repository",
  Repositories,
  {
    initial: [],
    objectForProperties: async properties => {
      const repositories = [];
      for await (const r of provider.repositories()) {
        repositories.push(r);
      }
      return repositories; }
  }
);

export default repositoriesRoute;

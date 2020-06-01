import IteratorRoute from "../iterator-route.mjs";
import provider from "../provider.mjs";
import Repositories from "../pages/Repositories.svelte";

export const repositoriesRoute = new IteratorRoute(
  "/repository",
  Repositories,
  {
    iteratorForProperties: async properties => provider.repositories()
  }
);

export default repositoriesRoute;

import ObjectStoreRoute from "../object-store-route.mjs";
import provider from "../provider.mjs";
import Repository from "../pages/Repository.svelte";

export const repositoryRoute = new ObjectStoreRoute(
  "/repository/:group/:repository",
  Repository,
  {
    objectForProperties: async properties =>
      provider.repository(properties.group + "/" + properties.repository),
    propertiesForObject: repository => {
      return { repository: repository.name, group: repository.owner.name };
    }
  }
);

export default repositoryRoute;
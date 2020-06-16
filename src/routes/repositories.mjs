import {
  IteratorStoreRoute,
  ObjectStoreRoute
} from "svelte-guard-history-router";

import provider from "../provider.mjs";

import Providers from "../pages/Providers.svelte";
import Provider from "../pages/Provider.svelte";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";
import Repositories from "../pages/Repositories.svelte";
import Repository from "../pages/Repository.svelte";
import Branch from "../pages/Branch.svelte";
import PullRequest from "../pages/PullRequest.svelte";
import ContentEntry from "../pages/ContentEntry.svelte";
import ContentEntries from "../pages/ContentEntries.svelte";

class RepositoriesRoute extends IteratorStoreRoute {
  iteratorForProperties(properties) {
    return provider.repositories();
  }
}

export const repositoriesRoute = new RepositoriesRoute(
  "/repository",
  Repositories
);

class RepositoryRoute extends ObjectStoreRoute {
  objectForProperties(properties) {
    return provider.repositoryGroup(properties.group);
  }
  propertiesForObject(group) {
    return { group: group.name };
  }
}

export const repositoryGroupRoute = new RepositoryRoute(
  repositoriesRoute.path + "/:group",
  RepositoryGroup
);

export const repositoryRoute = new ObjectStoreRoute(
  repositoryGroupRoute.path + "/:group/:repository",
  Repository,
  {
    objectForProperties: async properties =>
      provider.repository(properties.group + "/" + properties.repository),
    propertiesForObject: repository => {
      return { repository: repository.name, group: repository.owner.name };
    }
  }
);

export const repositoryGroupsRoute = new IteratorStoreRoute(
  "/group",
  RepositoryGroups,
  {
    iteratorForProperties: async properties => provider.repositoryGroups()
  }
);

export const branchRoute = new ObjectStoreRoute(
  repositoryRoute.path + "/branch/:branch",
  Branch,
  {
    objectForProperties: async properties =>
      provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      ),
    propertiesForObject: branch => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        branch: branch.name
      };
    }
  }
);

export const pullRequestRoute = new ObjectStoreRoute(
  repositoryRoute.path + "/:repository/pr/:pr",
  PullRequest,
  {
    objectForProperties: async properties => {
      const r = await provider.repository(
        `${properties.group}/${properties.repository}`
      );
      return r.pullRequest(properties.pr);
    },
    propertiesForObject: branch => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        pr: pr.name
      };
    }
  }
);

export const providersRoute = new IteratorStoreRoute("/providers", Providers, {
  iteratorForProperties: async properties => provider.providers
});

export const providerRoute = new ObjectStoreRoute(
  "/provider/:provider",
  Provider,
  {
    objectForProperties: async properties =>
      provider.providers.find(p => p.name === properties.provider),
    propertiesForObject: provider => {
      return {
        provider: provider.name
      };
    }
  }
);

export const contentEntriesRoute = new IteratorStoreRoute(
  branchRoute.path + "/entry",
  ContentEntries,
  {
    iteratorForProperties: async properties => {
      const branch = await provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      );
      return branch.entries();
    },
    propertiesForObject: branch => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        branch: branch.name
      };
    }
  }
);

export const contentEntryRoute = new ObjectStoreRoute(
  contentEntriesRoute.path + "/:entry",
  ContentEntry,
  {
    objectForProperties: async properties => {
      const branch = await provider.branch(
        `${properties.group}/${properties.repository}#${properties.branch}`
      );

      console.log(branch);
      const entry = await branch.entry(properties.entry);
      console.log(entry);

      return entry;
    },
    propertiesForObject: (branch, entry) => {
      return {
        repository: branch.repository.name,
        group: branch.repository.owner.name,
        branch: branch.name,
        entry: entry.name
      };
    }
  }
);

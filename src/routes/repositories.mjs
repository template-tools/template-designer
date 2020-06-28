import {
  IteratorStoreRoute,
  ObjectStoreRoute,
  route
} from "svelte-guard-history-router";

import provider from "../provider.mjs";

//import Providers from "../pages/Providers.svelte";
import Provider from "../pages/Provider.svelte";
import RepositoryGroups from "../pages/RepositoryGroups.svelte";
import RepositoryGroup from "../pages/RepositoryGroup.svelte";
import Repositories from "../pages/Repositories.svelte";
import Repository from "../pages/Repository.svelte";
import Branch from "../pages/Branch.svelte";
import PullRequest from "../pages/PullRequest.svelte";
import ContentEntry from "../pages/ContentEntry.svelte";
import ContentEntries from "../pages/ContentEntries.svelte";

export class ProvidersRoute extends IteratorStoreRoute {
  iteratorFor(properties) {
    return provider.providers;
  }
}

class ProviderRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.providers.find(p => p.name === properties.provider);
  }

  propertiesFor(provider) {
    return {
      provider: provider.name
    };
  }
}

class RepositoryGroupsRoute extends IteratorStoreRoute {
  iteratorFor(properties) {
    return provider.repositoryGroups();
  }
}

class RepositoryGroupRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.repositoryGroup(properties.group);
  }
  propertiesFor(group) {
    return { group: group.name };
  }
}

class RepositoriesRoute extends IteratorStoreRoute {
  iteratorFor(properties) {
    return provider.repositories();
  }
}

class RepositoryRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.repository(properties.group + "/" + properties.repository);
  }

  propertiesFor(repository) {
    return repository === undefined
      ? undefined
      : { repository: repository.name, group: repository.owner.name };
  }
}

class BranchRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );
  }
  propertiesFor(branch) {
    return branch === undefined || branch.repository === undefined
      ? undefined
      : {
          repository: branch.repository.name,
          group: branch.repository.owner.name,
          branch: branch.name
        };
  }
}

class PullRequestRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    const r = await provider.repository(
      `${properties.group}/${properties.repository}`
    );
    return r.pullRequest(properties.pr);
  }

  propertiesFor(branch) {
    return branch === undefined || branch.repository === undefined
      ? undefined
      : {
          repository: branch.repository.name,
          group: branch.repository.owner.name,
          pr: pr.name
        };
  }
}

class ContentEntriesRoute extends IteratorStoreRoute {
  async iteratorFor(properties) {
    const branch = await provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );
    return branch.entries();
  }

  propertiesFor(branch) {
    return branch === undefined || branch.repository === undefined
      ? undefined
      : {
          repository: branch.repository.name,
          group: branch.repository.owner.name,
          branch: branch.name
        };
  }
}

class ContentEntryRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    const branch = await provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );

    return await branch.entry(properties.entry);
  }

  propertiesFor(branch, entry) {
    return branch === undefined || branch.repository === undefined || branch.repository.owner === undefined
      ? undefined
      : {
          repository: branch.repository.name,
          group: branch.repository.owner.name,
          branch: branch.name,
          entry: entry.name
        };
  }
}

//export const providersRoute = route("/provider", ProvidersRoute, Providers);

export const providerRoute = route(
  "/provider/:provider",
  ProviderRoute,
  Provider
);

export const repositoryGroupsRoute = route(
  "/group",
  RepositoryGroupsRoute,
  RepositoryGroups
);

export const repositoryGroupRoute = route(
  repositoryGroupsRoute.path + "/:group",
  RepositoryGroupRoute,
  RepositoryGroup
);

export const repositoriesRoute = route(
  "/repository",
  RepositoriesRoute,
  Repositories
);

export const repositoryRoute = route(
  repositoryGroupRoute.path + "/:group/:repository",
  RepositoryRoute,
  Repository
);

export const branchRoute = route(
  repositoryRoute.path + "/branch/:branch",
  BranchRoute,
  Branch
);

export const contentEntriesRoute = route(
  branchRoute.path + "/entry",
  ContentEntriesRoute,
  ContentEntries
);

export const pullRequestRoute = route(
  repositoryRoute.path + "/:repository/pr/:pr",
  PullRequestRoute,
  PullRequest
);

export const contentEntryRoute = route(
  contentEntriesRoute.path + "/:entry",
  ContentEntryRoute,
  ContentEntry
);

import {
  BaseProvider,
  RepositoryGroup,
  Repository,
  Branch,
  Hook,
  PullRequest
} from "repository-provider";
import {
  IteratorStoreRoute,
  ObjectStoreRoute
} from "svelte-guard-history-router";

import provider from "./provider.mjs";

export class ProvidersRoute extends IteratorStoreRoute {
  iteratorFor() {
    return provider.providers;
  }
}

export class ProviderRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    for await (const provider of this.parent.iteratorFor()) {
      if(provider.name === properties.provider) {
        return provider;
      }
    }
  }

  propertiesFor(provider) {
    return provider instanceof BaseProvider
      ? {
          provider: provider.name
        }
      : undefined;
  }
}

export class RepositoryGroupsRoute extends IteratorStoreRoute {
  iteratorFor() {
    return provider.repositoryGroups();
  }
}

export class RepositoryGroupRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.repositoryGroup(properties.group);
  }
  propertiesFor(group) {
    return group instanceof RepositoryGroup ? { group: group.name } : undefined;
  }
}

export class RepositoriesRoute extends IteratorStoreRoute {
  iteratorFor() {
    return provider.repositories();
  }
}

export class RepositoryRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.repository(properties.group + "/" + properties.repository);
  }

  propertiesFor(repository) {
    return repository instanceof Repository
      ? { repository: repository.name, group: repository.owner.name }
      : undefined;
  }
}

export class HooksRoute extends IteratorStoreRoute {
  async iteratorFor(properties) {
    const repo = await provider.repository(properties.group + "/" + properties.repository);
    return repo.hooks();
  }
}

export class HookRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    const repo = await provider.repository(properties.group + "/" + properties.repository);
    return repo.hook(properties.hook);
  }

  propertiesFor(object) {
    return object instanceof Hook
      ? { hook: object.name }
      : undefined;
  }
}

export class BranchRoute extends ObjectStoreRoute {
  objectFor(properties) {
    return provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );
  }
  propertiesFor(object) {
    return object instanceof Branch
      ? {
          provider: object.provider.name,
          repository: object.repository.name,
          group: object.repository.owner.name,
          branch: object.name
        }
      : undefined;
  }
}

export class PullRequestRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    const r = await provider.repository(
      `${properties.group}/${properties.repository}`
    );
    return r.pullRequest(properties.pr);
  }

  propertiesFor(object) {
    return object instanceof PullRequest
      ? {
          pr: object.name
        }
      : undefined;
  }
}

export class ContentEntriesRoute extends IteratorStoreRoute {
  async iteratorFor(properties) {
    const branch = await provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );
    return branch.entries();
  }

  propertiesFor(object, entry) {
    return object instanceof Branch && entry
      ? {
          provider: object.provider.name,
          repository: object.repository.name,
          group: object.repository.owner.name,
          branch: object.name
        }
      : undefined;
  }
}

export class ContentEntryRoute extends ObjectStoreRoute {
  async objectFor(properties) {
    const branch = await provider.branch(
      `${properties.group}/${properties.repository}#${properties.branch}`
    );

    return await branch.entry(properties.entry);
  }

  propertiesFor(entry, object) {
    return entry && object instanceof Branch
      ? {
          provider: object.provider.name,
          repository: object.repository.name,
          group: object.repository.owner.name,
          branch: object.name,
          entry: entry.name
        }
      : undefined;
  }
}

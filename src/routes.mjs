import {
  BaseProvider,
  RepositoryGroup,
  Repository,
  Branch,
  PullRequest,
  Hook
} from "repository-provider";
import {
  IteratorStoreRoute,
  ObjectStoreRoute
} from "svelte-guard-history-router";

import provider from "./provider.mjs";

export class ProvidersRoute extends IteratorStoreRoute {
  get objectInstance() {
    return BaseProvider;
  }

  iteratorFor() {
    return provider.providers;
  }
}

export class RepositoryGroupsRoute extends IteratorStoreRoute {
  iteratorFor() {
    return provider.repositoryGroups();
  }
}

export class RepositoryGroupRoute extends ObjectStoreRoute {
  get objectInstance() {
    return RepositoryGroup;
  }

  get propertyMapping() {
    return { group: "name" };
  }

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
  get objectInstance() {
    return Repository;
  }

  get propertyMapping() {
    return { repository: "name" };
  }

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
  get objectInstance() {
    return Hook;
  }

  async iteratorFor(properties) {
    const repo = await provider.repository(
      properties.group + "/" + properties.repository
    );
    return repo.hooks();
  }

  propertiesFor() {}
}

export class BranchRoute extends ObjectStoreRoute {
  get objectInstance() {
    return Branch;
  }

  get propertyMapping() {
    return { branch: "name" };
  }

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
  get objectInstance() {
    return PullRequest;
  }

  get propertyMapping() {
    return { pr: "name" };
  }

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
  get objectInstance() {
    return ContentEntry;
  }

  get propertyMapping() {
    return { entry: "name" };
  }

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

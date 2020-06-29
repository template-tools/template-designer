import { route } from "svelte-guard-history-router";
import {
  ProvidersRoute,
  ProviderRoute,
  RepositoryGroupsRoute,
  RepositoryGroupRoute,
  RepositoriesRoute,
  RepositoryRoute,
  BranchRoute,
  ContentEntriesRoute,
  ContentEntryRoute,
  PullRequestRoute
} from "./repository-routes.mjs";

export { ProvidersRoute, RepositoriesRoute };

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

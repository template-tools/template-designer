import base from "consts:base";
import { BaseRouter, route } from "svelte-guard-history-router";

import AuthAccept from "./pages/AuthAccept.svelte";

import {
//  providersRoute,
  providerRoute,
  repositoryGroupsRoute,
  repositoryGroupRoute,
  repositoriesRoute,
  repositoryRoute,
  branchRoute,
  pullRequestRoute,
  contentEntriesRoute,
  contentEntryRoute
} from "./routes/repositories.mjs";

export const router = new BaseRouter(
  [
    route("/auth/accept", AuthAccept),
 //   providersRoute,
    providerRoute,
    repositoryGroupRoute,
    repositoriesRoute,
    repositoryGroupsRoute,
    repositoryRoute,
    branchRoute,
    pullRequestRoute,
    contentEntriesRoute,
    contentEntryRoute
    ],
  base
);

export default router;

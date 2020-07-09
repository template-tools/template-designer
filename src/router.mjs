import base from "consts:base";
import { BaseRouter } from "svelte-guard-history-router";

import {
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

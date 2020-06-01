import base from "consts:base";
import { Router, route } from "svelte-guard-history-router";
import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Settings from "./pages/Settings.svelte";
import Branch from "./pages/Branch.svelte";
import ContentEntry from "./pages/ContentEntry.svelte";

import repository from "./routes/repository.mjs";
import repositories from "./routes/repositories.mjs";
import repositoryGroup from "./routes/repository-group.mjs";
import repositoryGroups from "./routes/repository-groups.mjs";

export const router = new Router(
  [
    route("*", Home),
    route("/about", About),
    route("/settings", Settings),
    repositoryGroups,
    repositories,
    repositoryGroup,
    repository,
    route("/repository/:group/:repository/branch/:branch", Branch),
    route("/repository/:group/:repository/branch/:branch/:entry", ContentEntry)
  ],
  base
);

import { Router, route, NotFound } from "svelte-guard-history-router";
import About from "./pages/About.svelte";
import Repositories from "./pages/Repositories.svelte";
import Repository from "./pages/Repository.svelte";
import RepositoryGroup from "./pages/RepositoryGroup.svelte";
import RepositoryGroups from "./pages/RepositoryGroups.svelte";
import base from "consts:base";

export const router = new Router(
  [
    route("*", NotFound),
    route("/about", About),
  //  route("/group", RepositoryGroups),
  //  route("/group/:repositoryGroup", RepositoryGroup),
  //  route("/group/:repositoryGroup/:repository", Repository),
  //  route("/repository", Repositories)
  ],
  base
);

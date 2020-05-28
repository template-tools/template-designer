import { Router, route, NotFound } from "svelte-guard-history-router";
import About from "./pages/About.svelte";
import Repositories from "./pages/Repositories.svelte";
import Repository from "./pages/Repository.svelte";
import base from "consts:base";

export const router = new Router(
  [
    route("*", NotFound),
    route("/about", About),
    route("/repository", Repositories)
  ],
  base
);

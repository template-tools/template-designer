<script>
  import { PullRequestRoute } from "./routes.mjs";
  import PullRequest from "./pages/PullRequest.svelte";
  import PullRequestLink from "./components/PullRequestLink.svelte";
</script>

<Route
  path="/pr/:pr"
  factory={PullRequestRoute}
  linkComponent={PullRequestLink}
  component={PullRequest} />

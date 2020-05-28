<script>
  import * as style from "./main.css";
  import BitbucketProvider from "bitbucket-repository-provider";
  import GiteaProvider from "gitea-repository-provider";
  import AggregationProvider from "aggregation-repository-provider";

  const provider = AggregationProvider.initialize(
    [BitbucketProvider, GiteaProvider],
    { logLevel: 'trace' },
    localStorage
  );
</script>

<div>Name: {provider.name}</div>

{#await provider.repository('arlac77/sync-test-repository')}
  <p>...waiting</p>
{:then repo}
  <p>The repo is {repo.name}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

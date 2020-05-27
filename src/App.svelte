<script>
  import * as style from "./main.css";
  import { BitbucketProvider } from "bitbucket-repository-provider";
  import { GiteaProvider } from "gitea-repository-provider";

  //const provider = new BitbucketProvider(localStorage);
  const provider = new GiteaProvider(localStorage);
</script>

<div>Name: {provider.name}</div>

{#await provider.repository('arlac77/sync-test-repository')}
	<p>...waiting</p>
{:then repo}
	<p>The repo is {repo.name}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
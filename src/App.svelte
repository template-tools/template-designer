<script>
  import * as style from "./main.css";
  import { BitbucketProvider } from "bitbucket-repository-provider";

  const config = {};
  const provider = new BitbucketProvider(config);
</script>

<div>Name: {provider.name}</div>

{#await provider.repository('xhubio/decision-table-data-generator')}
	<p>...waiting</p>
{:then repo}
	<p>The repo is {repo.name}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
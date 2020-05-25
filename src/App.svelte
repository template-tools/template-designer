<script>
  import * as style from "./main.css";
  import { GithubProvider } from "github-repository-provider";

  const config = {};
  const provider = new GithubProvider(config);
</script>

<div>Name: {provider.name}</div>

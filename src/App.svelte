<script>
  import * as style from "./main.css";
  import { BitbucketProvider } from "bitbucket-repository-provider";

  const config = {};
  const provider = new BitbucketProvider(config);
</script>

<div>Name: {provider.name}</div>

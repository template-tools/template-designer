import GiteaProvider from "gitea-repository-provider";
import BitbucketProvider from "bitbucket-repository-provider";
import GithubProvider from "github-repository-provider";

export const providerFactories = [BitbucketProvider, GiteaProvider, GithubProvider];
export default providerFactories;
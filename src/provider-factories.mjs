import GiteaProvider from "gitea-repository-provider";
import BitbucketProvider from "bitbucket-repository-provider";

export const providerFactories = [BitbucketProvider, GiteaProvider];
export default providerFactories;
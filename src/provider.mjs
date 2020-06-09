import providerFactories from "./provider-factories.mjs";
import AggregationProvider from "aggregation-repository-provider";

export const provider = AggregationProvider.initialize(
  providerFactories,
  { },
  localStorage
);

export default provider;
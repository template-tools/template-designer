import providerFactories from "./provider-factories.mjs";
import AggregationProvider from "aggregation-repository-provider";

export const provider = AggregationProvider.initialize(
  providerFactories,
  {},
  localStorage
);

provider.messageDestination = {
  info(...args) { console.log(...args); },
  warn(...args) { console.warn(...args); },
  error(...args) { console.error(...args); }
};

export default provider;

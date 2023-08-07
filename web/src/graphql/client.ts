import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://mockup-checkout.cyclic.app/graphql",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

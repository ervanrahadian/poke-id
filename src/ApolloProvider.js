import React from "react";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});

export default (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

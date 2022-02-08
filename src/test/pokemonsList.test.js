import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { PokemonsList } from "../pages";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});

test("check list page", () => {
  render(
    <ApolloProvider client={client}>
      <PokemonsList />
    </ApolloProvider>
  );

  const data = screen.getByText(/Roll And Catch/i);
  expect(data).toBeInTheDocument();
});

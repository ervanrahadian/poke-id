import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { MyPokemonsList } from "../pages";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});

test("check my list page", async () => {
  render(
    <ApolloProvider client={client}>
      <MyPokemonsList />
    </ApolloProvider>
  );

  const data = screen.getByText(/My Poke/i);
  expect(data).toBeInTheDocument();
});

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PokemonDetail } from "../pages";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});

test("check detail page", () => {
  render(
    <ApolloProvider client={client}>
      <MemoryRouter initialEntries={[{ pathname: "/pokemon-detail" }]}>
        <Routes>
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </MemoryRouter>
    </ApolloProvider>
  );

  expect(render.toString()).toMatchSnapshot();
});

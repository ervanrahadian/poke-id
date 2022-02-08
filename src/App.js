import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MyPokemonsList, PokemonDetail, PokemonsList } from "./pages";
import { Header } from "./components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  const style = {
    root: css({
      paddingTop: "20px",
    }),
  };

  return (
    <BrowserRouter>
      <Header />
      <Container css={style.root}>
        <Routes>
          <Route path="/my-pokemons-list" element={<MyPokemonsList />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
          <Route path="/" element={<PokemonsList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header = () => {
  const style = {
    head: css({
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    }),
    title: css({
      color: "#ffffff",
      fontSize: "24px",
      fontWeight: "500",
      textAlign: "center",
    }),
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top" css={style.head}>
      <Container>
        <Link to="/">
          <span css={style.title}>POKE.ID</span>
        </Link>

        <Link to="/my-pokemons-list">
          <span css={style.title}>MY POKE</span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;

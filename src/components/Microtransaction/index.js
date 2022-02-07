import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Toast } from "..";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Microtransaction = (props) => {
  const style = {
    section: css({
      paddingBottom: "20px",
      marginBottom: "20px",
      borderBottom: "2px solid #212529",
    }),
    text: css({
      fontSize: "20px",
      fontWeight: "500",
    }),
    number: css({
      fontSize: "22px",
      fontWeight: "800",
    }),
  };

  const handleAds = () => {
    const calc = Number(props.pokecoin + 100);

    localStorage.setItem("Pokecoin", calc);
    props.setPokecoin(calc);

    return Toast({
      icon: "success",
      title: "100 Pokecoin added!",
    });
  };

  return (
    <Row css={style.section}>
      <Col xs css={style.text}>
        <span>
          Pokecoin: <span css={style.number}>{props.pokecoin}</span>
        </span>
      </Col>
      <Col xs={"auto"}>
        <Button variant="outline-dark" onClick={handleAds}>
          Ads (Free Pokecoin)
        </Button>
      </Col>
    </Row>
  );
};

export default Microtransaction;

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getFormattedText, getOwned } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ListCard = (props) => {
  const style = {
    card: css({
      border: "2px solid #212529",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      transition: "0.2s",
      "&:hover": {
        border: "4px solid #212529",
        transform: "scale(1.05)",
        boxShadow: "rgba(0, 0, 0, 0.48) 0px 6px 16px",
      },
    }),
  };

  return (
    <Link to="/pokemon-detail" state={props.data.name}>
      <Card className="mb-4" css={style.card}>
        <Card.Img variant="top" src={props.data.image} />

        <Card.Body className="text-center">
          <Card.Title>{getFormattedText(props.data.name)}</Card.Title>

          <Card.Text>{`OWNED: ${getOwned(props.data.name)}`}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ListCard;

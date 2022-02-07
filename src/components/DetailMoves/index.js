import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { getFormattedText } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DetailMoves = (props) => {
  const style = {
    mainTitle: css({
      fontSize: "24px",
      fontWeight: "800",
    }),
    badge: css({
      background: "#ffffff !important",
      border: "2px solid #212529",
      fontSize: "16px",
      padding: "10px",
      marginRight: "10px",
      marginBottom: "10px",
    }),
  };

  return (
    <>
      <Row>
        <Col>
          <span css={style.mainTitle}>Moves</span>
        </Col>
      </Row>

      <Row className="pt-2">
        <Col className="pt-2">
          {props.data &&
            props.data.map((data, index) => (
              <Badge key={index} text="dark" css={style.badge}>
                {getFormattedText(data.move.name)}
              </Badge>
            ))}
        </Col>
      </Row>
    </>
  );
};

export default DetailMoves;

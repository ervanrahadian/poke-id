import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { getFormattedText, getHeightWeight } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DetailBasics = (props) => {
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
    childTitle: css({
      fontSize: "16px",
      fontWeight: "500",
    }),
    value: css({
      fontSize: "24px",
      fontWeight: "500",
    }),
  };

  return (
    <>
      <Row>
        <Col>
          <span css={style.mainTitle}>Basics</span>
        </Col>
      </Row>

      <Row className="pt-2">
        <Col>
          <Col>
            <span css={style.childTitle}>TYPES</span>
          </Col>

          <Col className="pt-2">
            {props.data.types &&
              props.data.types.map((data, index) => (
                <Badge key={index} text="dark" css={style.badge}>
                  {getFormattedText(data.type.name)}
                </Badge>
              ))}
          </Col>
        </Col>

        <Col>
          <Col>
            <span css={style.childTitle}>ABILITIES</span>
          </Col>

          <Col className="pt-2">
            {props.data.abilities &&
              props.data.abilities.map((data, index) => (
                <Badge key={index} text="dark" css={style.badge}>
                  {getFormattedText(data.ability.name)}
                </Badge>
              ))}
          </Col>
        </Col>
      </Row>

      <Row className="pt-2">
        <Col>
          <Col>
            <span css={style.childTitle}>HEIGHT</span>
          </Col>

          <Col>
            <span css={style.value}>{`${getHeightWeight(
              props.data.height
            )} m`}</span>
          </Col>
        </Col>

        <Col>
          <Col>
            <span css={style.childTitle}>WEIGHT</span>
          </Col>

          <Col>
            <span css={style.value}>{`${getHeightWeight(
              props.data.weight
            )} Kg`}</span>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default DetailBasics;

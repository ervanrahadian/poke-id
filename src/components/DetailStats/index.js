import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { getFormattedText } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DetailStats = (props) => {
  const style = {
    mainTitle: css({
      fontSize: "24px",
      fontWeight: "800",
    }),
    childTitle: css({
      fontSize: "16px",
      fontWeight: "500",
    }),
    progress: css({
      fontSize: "16px",
      height: "32px",
      marginBottom: "10px",
    }),
  };

  return (
    <>
      <Row>
        <Col>
          <span css={style.mainTitle}>Stats</span>
        </Col>
      </Row>

      <Row className="pt-2">
        {props.data &&
          props.data.map((data, index) => (
            <div key={index}>
              <Col>
                <span css={style.childTitle}>
                  {getFormattedText(data.stat.name)}
                </span>
              </Col>

              <Col>
                <ProgressBar
                  variant="dark"
                  now={data.base_stat}
                  label={`${data.base_stat}%`}
                  css={style.progress}
                />
              </Col>
            </div>
          ))}
      </Row>
    </>
  );
};

export default DetailStats;

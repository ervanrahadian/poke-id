import React from "react";
import { Spinner } from "react-bootstrap";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Loading = () => {
  const style = {
    loading: css({
      position: "fixed",
      zIndex: 99,
      height: "2em",
      width: "2em",
      overflow: "show",
      margin: "auto",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      "&:before": {
        content: '""',
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8))",
      },
    }),
  };

  return (
    <div css={style.loading}>
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loading;

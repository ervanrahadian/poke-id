import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Toast } from "..";
import Swal from "sweetalert2";
import { getFormattedText } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MyListCard = (props) => {
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

  const swalWithStyle = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark",
      cancelButton: "btn btn-outline-dark ms-3",
    },
    buttonsStyling: false,
  });

  const handleRelease = () => {
    const filter = props.myListData.filter(
      (data) => data.nickname !== props.data.nickname
    );

    swalWithStyle
      .fire({
        title: "Are you sure?",
        text: "Your Poke will be released!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Release",
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (filter.length === 0) {
            props.setMyListData(null);

            localStorage.removeItem("myPoke");
          } else {
            props.setMyListData(filter);

            localStorage.setItem("myPoke", JSON.stringify(filter));
          }

          return Toast({
            icon: "success",
            title: `${props.data.nickname} released!`,
          });
        }
      });
  };

  return (
    <Card className="mb-4" css={style.card}>
      <Link to="/pokemon-detail" state={props.data.name}>
        <Card.Img
          variant="top"
          alt={getFormattedText(props.data.name)}
          title={getFormattedText(props.data.name)}
          src={props.data.image}
        />

        <Card.Body className="text-center">
          <Card.Title>{props.data.nickname}</Card.Title>

          <Card.Text>{getFormattedText(props.data.name)}</Card.Text>
        </Card.Body>
      </Link>

      <Card.Body className="text-center">
        <Button variant="dark" onClick={handleRelease}>
          Release
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyListCard;

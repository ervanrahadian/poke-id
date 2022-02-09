import { useQuery } from "@apollo/client";
import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { GET_POKEMON_DETAIL } from "../../graphql";
import {
  DetailBasics,
  DetailMoves,
  DetailStats,
  Loading,
  Toast,
} from "../../components";
import Swal from "sweetalert2";
import { checkDuplicateData, getFormattedText } from "../../utils";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PokemonDetail = () => {
  const { state } = useLocation();
  const {
    loading: loadingDetailData,
    error: errorDetailData,
    data: detailData,
  } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name: state,
    },
  });

  const style = {
    mainTitle: css({
      fontSize: "32px",
      fontWeight: "800",
    }),
    image: css({
      border: "4px solid #212529",
      borderRadius: "50%",
      height: "175px",
      width: "175px",
      transition: "0.2s",
      animation: "rotation 5s infinite linear",
      "@keyframes rotation": {
        "100%": {
          transform: "rotatey(360deg)",
        },
      },
    }),
    button: css({
      fontSize: "24px",
      height: "100px",
      width: "100px",
      borderRadius: "50%",
    }),
  };

  const swalWithStyle = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark",
      cancelButton: "btn btn-outline-dark ms-3",
    },
    buttonsStyling: false,
  });

  const handleCatch = () => {
    const randomNum = Math.round(Math.random());

    if (randomNum === 0) {
      return swalWithStyle.fire({
        icon: "error",
        title: "Oops...",
        text: "Too hasty! Your Poke has run away.",
        confirmButtonText: "Got it",
      });
    } else {
      swalWithStyle
        .fire({
          icon: "success",
          title: "Congratulations...",
          text: "You caught the Poke!",
          input: "text",
          inputLabel: "Your Poke Nickname",
          confirmButtonText: "Add",
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return "Please add Nickname!";
            } else if (checkDuplicateData(value)) {
              return "Nickname already exist!";
            }
          },
        })
        .then((result) => {
          if (result.isConfirmed) {
            let myPokeData = [];

            if (localStorage.hasOwnProperty("myPoke")) {
              myPokeData = JSON.parse(localStorage.getItem("myPoke"));

              myPokeData.push({
                nickname: result.value,
                name: detailData.pokemon.name,
                image: detailData.pokemon.sprites.front_default,
              });

              localStorage.setItem("myPoke", JSON.stringify(myPokeData));

              return Toast({
                icon: "success",
                title: `${result.value} added!`,
              });
            } else {
              myPokeData.push({
                nickname: result.value,
                name: detailData.pokemon.name,
                image: detailData.pokemon.sprites.front_default,
              });

              localStorage.setItem("myPoke", JSON.stringify(myPokeData));

              return Toast({
                icon: "success",
                title: `${result.value} added!`,
              });
            }
          }
        });
    }
  };

  if (errorDetailData) {
    return Toast({
      icon: "error",
      title: "Something went wrong!",
    });
  }

  return (
    <>
      {loadingDetailData && <Loading />}

      {detailData && (
        <>
          <Row className="justify-content-center text-center">
            <Col>
              <span css={style.mainTitle}>
                {getFormattedText(detailData.pokemon.name)}
              </span>
            </Col>
          </Row>

          <Row className="justify-content-center text-center pt-4">
            <Col>
              <Image
                alt={getFormattedText(detailData.pokemon.name)}
                title={getFormattedText(detailData.pokemon.name)}
                src={detailData.pokemon.sprites.front_default}
                css={style.image}
              />
            </Col>
          </Row>

          <Row className="justify-content-center text-center pt-4">
            <Col>
              <Button variant="dark" css={style.button} onClick={handleCatch}>
                Catch
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center pt-4">
            <Col className="mb-4" md={4}>
              <DetailBasics data={detailData.pokemon} />
            </Col>

            <Col className="mb-4" md={4}>
              <DetailStats data={detailData.pokemon.stats} />
            </Col>

            <Col className="mb-4" md={4}>
              <DetailMoves data={detailData.pokemon.moves} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default PokemonDetail;

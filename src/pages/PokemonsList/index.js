import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GET_POKEMONS_LIST, GET_TOTAL_POKEMONS_LIST } from "../../graphql";
import { ListCard, Loading, Microtransaction, Toast } from "../../components";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PokemonsList = () => {
  const [pokecoin, setPokecoin] = useState(null);
  const {
    loading: loadingTotalData,
    error: errorTotalData,
    data: totalData,
  } = useQuery(GET_TOTAL_POKEMONS_LIST);
  const [
    getListData,
    { loading: loadingListData, error: errorListData, data: listData },
  ] = useLazyQuery(GET_POKEMONS_LIST);

  const style = {
    mainTitle: css({
      fontSize: "32px",
      fontWeight: "800",
    }),
    button: css({
      fontSize: "28px",
    }),
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("Pokecoin")) {
      setPokecoin(Number(localStorage.getItem("Pokecoin")));
    } else {
      const defaultPokecoin = Number(500);

      localStorage.setItem("Pokecoin", defaultPokecoin);
      setPokecoin(defaultPokecoin);

      return Toast({
        icon: "success",
        title: "500 Pokecoin added!",
      });
    }
  }, []);

  const handleRoll = () => {
    if (pokecoin < 100) {
      return Toast({
        icon: "error",
        title: "Pokecoin is not enough!",
      });
    } else {
      const max = totalData.pokemons.count - 5;
      const randomNum = Math.floor(Math.random() * (max + 1));
      const calc = Number(pokecoin - 100);

      getListData({
        variables: {
          limit: 5,
          offset: randomNum,
        },
      });

      localStorage.setItem("Pokecoin", calc);
      setPokecoin(calc);

      return Toast({
        icon: "success",
        title: "100 Pokecoin deducted!",
      });
    }
  };

  if (errorTotalData || errorListData) {
    return Toast({
      icon: "error",
      title: "Something went wrong!",
    });
  }

  return (
    <>
      {(loadingTotalData && <Loading />) || (loadingListData && <Loading />)}

      <Microtransaction pokecoin={pokecoin} setPokecoin={setPokecoin} />

      <Row className="justify-content-center text-center">
        <Col>
          <span css={style.mainTitle}>Roll And Catch</span>
        </Col>
      </Row>

      {!loadingListData && !listData && (
        <Row className="justify-content-center text-center pt-4">
          <Col>
            <Button variant="dark" css={style.button} onClick={handleRoll}>
              Roll (100 Pokecoin)
            </Button>
          </Col>
        </Row>
      )}

      {listData && (
        <>
          <Row className="justify-content-center pt-4">
            {listData.pokemons.results.map((data) => (
              <Col key={data.id} xs={8} sm={6} md={4} lg={2}>
                <ListCard data={data} />
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center text-center pb-4">
            <Col>
              <Button variant="dark" css={style.button} onClick={handleRoll}>
                Reroll (100 Pokecoin)
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default PokemonsList;

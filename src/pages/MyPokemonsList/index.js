import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Microtransaction, MyListCard, Toast } from "../../components";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MyPokemonsList = () => {
  const [pokecoin, setPokecoin] = useState(null);
  const [myListData, setMyListData] = useState(null);

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

    if (localStorage.hasOwnProperty("myPoke")) {
      const check = localStorage.getItem("myPoke");

      if (check) {
        setMyListData(JSON.parse(localStorage.getItem("myPoke")));
      }
    }
  }, []);

  const style = {
    mainTitle: css({
      fontSize: "32px",
      fontWeight: "800",
    }),
    text: css({
      fontSize: "24px",
      fontWeight: "500",
    }),
  };

  return (
    <>
      <Microtransaction pokecoin={pokecoin} setPokecoin={setPokecoin} />

      <Row className="justify-content-center text-center">
        <Col>
          <span css={style.mainTitle}>My Poke</span>
        </Col>
      </Row>

      {myListData && (
        <Row className="justify-content-center pt-4">
          {myListData.map((data, index) => (
            <Col key={index} xs={8} sm={6} md={4} lg={2}>
              <MyListCard
                data={data}
                myListData={myListData}
                setMyListData={setMyListData}
              />
            </Col>
          ))}
        </Row>
      )}

      {!myListData && (
        <Row className="justify-content-center text-center pt-4">
          <Col>
            <span css={style.text}>Empty! Roll your first Poke.</span>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MyPokemonsList;

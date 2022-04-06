import { useState } from "react";

import AlertDialog from "./AlertDialog";

import { Container } from "@mui/material";

import { GetBeerNameQuery } from "../generated/graphql";

type BeerInformationGraphQLProps = {
  beerinfo: GetBeerNameQuery;
};

function BeerInformationGraphQL({ beerinfo }: BeerInformationGraphQLProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const beer = beerinfo.getbeerbyname;
  return beer ? (
    <>
      <div
        style={{
          backgroundColor: "#eee",
          padding: "50px",
        }}
        className="beerInformationGraphql"
      >
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <p
              style={{
                // backgroundColor: "rgba(0,47,150,0.5)",
                // borderBottom: "1px solid rgba(0,47,150,0.5)",
                textShadow: "-1px -1px 1px white",
                color: "black",
                padding: "10px",
                margin: "10px",
                textTransform: "uppercase",
                fontSize: "2rem",
              }}
            >
              {beer.name}
            </p>
            <p
              style={{
                // backgroundColor: "rgba(0,47,150,0.5)",
                // borderBottom: "1px solid rgba(0,47,150,0.5)",
                textShadow: "-1px -1px 1px white",
                padding: "10px",
                color: "black",
                margin: "10px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              {beer.abv}%
            </p>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              // display: "grid",
              // gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            <ul
              style={{
                fontSize: "1.5rem",
                textAlign: "right",
                textTransform: "uppercase",
              }}
            >
              {" "}
              Food Pairings
              {beer.food_pairing.map((fooditem) => {
                return (
                  <li
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gridTemplateRows: "1fr",
                      textAlign: "right",
                      //   border: "1px solid black",
                      // backgroundColor: "#244487",
                      color: "black",
                      padding: "25px",
                      // marginTop: "10px",
                      borderBottom: "1px solid black",
                      textTransform: "uppercase",
                    }}
                    className="foodItem"
                  >
                    {fooditem}
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            style={{
              backgroundColor: "#eee",
              textAlign: "center",
              marginTop: "50px",
              position: "sticky",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
            src={beer.image_url}
            alt=""
          />
        </Container>
        <AlertDialog open={open} thanks={close} beer={beer} />
      </div>
    </>
  ) : (
    <>
      <p>No beer for you. Please try again!</p>
    </>
  );
}

export default BeerInformationGraphQL;

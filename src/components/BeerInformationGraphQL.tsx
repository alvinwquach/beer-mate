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
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#eee",
          padding: "50px",
        }}
        className="beerInformationGraphql"
      >
        <Container>
          <img
            style={{
              backgroundColor: "#eee",
              position: "sticky",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
            src={beer.image_url}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontSize: "3rem",
                textTransform: "uppercase",
                color: "black",
                borderRadius: "10px",
              }}
            >
              {beer.name}
            </p>
            <p
              style={{
                fontSize: "3rem",
                color: "black",
              }}
            >
              {beer.abv}%
            </p>
            <ul>
              {" "}
              Food Pairings
              {beer.food_pairing.map((fooditem) => {
                return (
                  <li
                    style={{
                      textTransform: "uppercase",
                      padding: "10px",
                      listStyleType: "none",
                    }}
                    className="foodItem"
                  >
                    {fooditem}
                  </li>
                );
              })}
            </ul>
          </div>
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

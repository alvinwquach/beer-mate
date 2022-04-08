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
          margin: "auto auto",
          justifyContent: "center",
          columnGap: "12rem",
          backgroundColor: "#eee",
        }}
        className="beerInformationGraphql"
      >
        {/* <Container> */}
        <div>
          <img
            style={{
              padding: "50px",
              margin: "50px",
            }}
            onClick={handleClickOpen}
            src={beer.image_url}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: "3rem",
              padding: "80px",
              backgroundColor: "lightblue",
              border: "1px solid black",
              width: "100%",
            }}
          >
            {beer.name}
          </p>
          <p
            style={{
              fontSize: "2rem",
              textAlign: "center",
              backgroundColor: "lightblue",
              padding: "80px",
              border: "1px solid black",
              width: "100%",
              margin: "auto auto",
            }}
          >
            {beer.abv}%
          </p>
          <ul
            style={{
              backgroundColor: "lightblue",
              border: "1px solid black",
              width: "100%",
              textAlign: "center",
              textTransform: "uppercase",
              padding: "80px",
              fontSize: "1.5rem",
            }}
          >
            Food Pairings
            {beer.food_pairing.map((fooditem) => {
              return (
                <li
                  style={{
                    textTransform: "uppercase",
                    listStyleType: "none",
                    padding: "10px",
                  }}
                  className="foodItem"
                >
                  {fooditem}
                </li>
              );
            })}
          </ul>
        </div>
        {/* </Container> */}
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

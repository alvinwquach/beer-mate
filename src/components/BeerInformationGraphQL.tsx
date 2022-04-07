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
          <div style={{}}>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
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
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "3rem",
                color: "black",
              }}
            >
              {beer.abv}%
            </p>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              style={{
                display: "block",
                backgroundColor: "#eee",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "50px",
                position: "sticky",
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
              src={beer.image_url}
              alt=""
            />
          </div>
          {/* <div
            style={{
              border: "1px solid black",
              padding: "2rem",
            }}
          > */}
          <ul
            style={{
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
                    textTransform: "uppercase",
                    padding: "10px",
                    display: "flex",
                    alignSelf: "center",
                    // alignItems: "center",
                    // justifyItems: "center",
                    justifyContent: "flex-end",
                  }}
                  className="foodItem"
                >
                  {fooditem}
                </li>
              );
            })}
          </ul>
          {/* </div> */}
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

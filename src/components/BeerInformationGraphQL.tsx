import { useState } from "react";

import AlertDialog from "./AlertDialog";

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
          backgroundColor: "#94a3b8",
        }}
        className="beerInformationGraphql"
      >
        <div
          style={{
            maxWidth: "24rem",
            borderRadius: "0.25rem",
            overflow: "hidden",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            margin: "0 auto",
            border: "1px solid #fff",
          }}
        >
          <img onClick={handleClickOpen} src={beer.image_url!} alt="" />
          <div
            style={{
              padding: "1rem 1.5rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "#374151",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  lineHeight: "1.75rem",
                }}
              >
                {beer.name}
              </p>
              <p
                style={{
                  color: "#374151",
                  fontSize: "1rem",
                  fontWeight: "700",
                  lineHeight: "1.5rem",
                }}
              >
                {beer.abv}%
              </p>
              <ul>
                {beer.food_pairing.map((fooditem) => {
                  return (
                    <li
                      style={{
                        textAlign: "left",
                        listStyleType: "none",
                        textTransform: "capitalize",
                      }}
                      className="foodItem"
                    >
                      {fooditem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
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

import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { alpha } from "@mui/material/styles";

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
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            margin: "1rem",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            color: "primary.main",
          }}
        >
          <Box>
            <Box
              onClick={handleClickOpen}
              component="img"
              sx={{
                display: "block",
                margin: "0 auto",
                height: "12rem",
                width: "12rem",
                marginTop: "1rem",
              }}
              alt="The image of the beer."
              src={beer.image_url!}
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "center" },
                  m: 3,
                  minWidth: { md: 450 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontSize: 22, mt: 1 }}
                >
                  {beer.name}
                </Box>
                <Box
                  component="span"
                  sx={{ color: "primary.main", fontSize: 16, mt: 1 }}
                >
                  {beer.abv}%
                </Box>
                <ul>
                  Food Pairings
                  {beer.food_pairing.map((fooditem) => {
                    return (
                      <Box
                        sx={{
                          mt: 1.5,
                          p: 0.5,
                          backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, 0.1),
                          borderRadius: "5px",
                          color: "primary.main",
                          fontWeight: "medium",
                          display: "flex",
                          fontSize: 12,
                          alignItems: "flex-end",
                        }}
                      >
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
                      </Box>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
          <AlertDialog open={open} thanks={close} beer={beer} />
        </Box>
      </Container>
    </>
  ) : (
    <>
      <p>No beer for you. Please try again!</p>
    </>
  );
}

export default BeerInformationGraphQL;

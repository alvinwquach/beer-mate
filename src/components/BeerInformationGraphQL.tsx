import { useState } from "react";

import { Box, Container, alpha } from "@mui/material";

import AlertDialog from "./AlertDialog";

import { GetBeerNameQuery } from "../generated/graphql";

type BeerInformationGraphQLProps = {
  beerinfo: GetBeerNameQuery;
  searched: boolean;
};

function BeerInformationGraphQL({
  beerinfo,
  searched,
}: BeerInformationGraphQLProps) {
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
            maxHeight: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
            margin: "1rem",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            color: "#fff",
          }}
        >
          <Box>
            <Box
              onClick={handleClickOpen}
              component="img"
              sx={{
                display: "block",
                margin: "0 auto",
                height: "5rem",
                width: "5rem",
                marginTop: "1rem",
              }}
              alt="The image of the beer."
              src={beer.image_url ?? "/images/ice-cold-beer-2.jpeg"}
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
                  component="p"
                  sx={{ color: "#27272a", fontSize: 22, mt: 1 }}
                >
                  {beer.name}
                </Box>
                <Box
                  component="p"
                  sx={{ color: "#27272a", fontSize: 22, mt: 1 }}
                >
                  {beer.abv}%
                </Box>
                <Box
                  component="ul"
                  sx={{
                    color: "#27272a",
                  }}
                >
                  Food Pairings
                  {beer.food_pairing.map((fooditem) => {
                    return (
                      <Box
                        sx={{
                          mt: 1.5,
                          p: 0.5,
                          borderRadius: "5px",
                          fontWeight: "medium",
                          display: "flex",
                          fontSize: "1rem",
                          alignItems: "flex-end",
                        }}
                      >
                        <Box
                          component="li"
                          sx={{
                            className: "foodItem",
                            color: "#27272a",
                            textAlign: "left",
                            listStyleType: "none",
                            fontSize: "1.25rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {fooditem}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
          <AlertDialog open={open} thanks={close} beer={beer} />
        </Box>
      </Container>
    </>
  ) : (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          maxHeight: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          alignItems: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          color: "#fff",
        }}
      >
        <Box
          component="p"
          sx={{
            color: "#27272a",
            fontSize: 16,
            margin: "1rem",
          }}
        >
          That beer does not exist in our database. Please try your search
          again!
        </Box>
      </Box>
    </Container>
  );
}

export default BeerInformationGraphQL;

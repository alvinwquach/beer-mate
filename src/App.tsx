import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./graphql";

import { TextField, Button, Container, Box, alpha } from "@mui/material";

import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import BeerFetcher from "./components/BeerFetcher";
import { SearchOutlined } from "@mui/icons-material";
import Footer from "./components/Footer";

type FormValues = {
  userInput: string;
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // schema hooks up to local server
  link: new SchemaLink({ schema }),
});

function App() {
  const [beerName, setBeerName] = useState("");
  const [searched, setSearched] = useState(false);

  //destructured react hook form to handle userInput & to reset the text field
  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      userInput: "",
    },
  });

  // created event handler to retrieve beer that matches userInput
  const onSubmit = async (data: FormValues) => {
    setBeerName(data.userInput);
    setSearched(true);
  };

  const handleClick = () => resetField("userInput");

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div>
          <Header />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{
                color: "#fff",
                width: "65%",
                margin: "1rem",
              }}
              InputProps={{
                startAdornment: <SearchOutlined />,
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search for a beer"
              {...register("userInput")}
            />
            <Button
              sx={{
                width: "25%",
                padding: "1rem",
                marginTop: "1rem",
              }}
              variant="contained"
              color="error"
              onClick={handleClick}
              endIcon={<RotateLeftIcon />}
            >
              Reset
            </Button>
            {beerName ? (
              <BeerFetcher beername={beerName} searched={searched} />
            ) : null}
            {!searched ? (
              <>
                <Container maxWidth="sm">
                  <Box
                    sx={{
                      display: "flex",
                      height: "65vh",
                      width: "65vh",
                      margin: "0 auto",
                      alignItems: "center",
                      bgcolor: "background.paper",
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: 1,
                      fontWeight: "bold",
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                      color: "#fff",
                    }}
                  >
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
                        component="h2"
                        sx={{
                          color: "#27272a",
                          fontSize: 22,
                        }}
                      >
                        Welcome to Brewmate!
                      </Box>
                      <Box
                        component="p"
                        sx={{
                          color: "#27272a",
                          fontSize: 22,
                        }}
                      >
                        Please search for a beer in order to find what food
                        pairs best! Click on the image of the beer to learn more
                        about it!
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </>
            ) : null}
          </form>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

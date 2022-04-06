import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./graphql";

import { TextField, Button } from "@mui/material";

import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BeerFetcher from "./components/BeerFetcher";
import { SearchOutlined } from "@mui/icons-material";



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
  const [submitted, setSubmitted] = useState(false);

  //destructured react hook form to handle userInput & to reset the text field
  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      userInput: "",
    },
  });

  // created event handler to retrieve beer that matches userInput
  const onSubmit = async (data: FormValues) => {
    setSubmitted(true);
    setBeerName(data.userInput);
  };

  const handleClick = () => resetField("userInput");

  return (
    <ApolloProvider client={client}>
      <div
        style={{
          backgroundColor: "#244487",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            paddingTop: "25px",
            backgroundColor: "#244487",
            color: "white",
          }}
        >
          Brewmate
        </h1>
        <p
          style={{
            textAlign: "center",
            letterSpacing: "0.1em",
            backgroundColor: "#244487",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          Search for a beer to find what it pairs best with. Click on the beer
          to learn more!
        </p>
      </div>
      <div className="App">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{
                width: "70%",
              }}
              // add search icon in text field
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
                width: "30%",
                padding: "15px",
              }}
              variant="contained"
              color="error"
              onClick={handleClick}
              endIcon={<RotateLeftIcon />}
            >
              Reset
            </Button>
            {beerName ? <BeerFetcher beername={beerName} /> : null}
          </form>
          <footer
            style={{
              textAlign: "center",
              backgroundColor: "#244487",
              color: "white",
              height: "10vh",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Designed by Alvin Quach
          </footer>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

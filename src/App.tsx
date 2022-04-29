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
          backgroundColor: "#334155",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            padding: "1.5rem",
            backgroundColor: "#475569",
            color: "white",
          }}
        >
          Brewmate
        </h1>
        <p
          style={{
            maxWidth: "90%",
            backgroundColor: "#334155",
            color: "white",
            paddingBottom: "1.5rem",
            fontSize: "1.5rem",
            lineHeight: "1.5rem",
            marginLeft: "1.5rem",
          }}
        >
          Search for a beer to find what it pairs best with. Click on the beer
          to learn more!
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#cbd5e1",
        }}
        className="App"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{
                width: "70%",
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
              backgroundColor: "#475569",
              color: "white",
              height: "10vh",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "capitalize",
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

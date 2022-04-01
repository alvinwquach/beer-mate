import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./graphql";

import { TextField, Button } from "@mui/material";

import RotateLeftIcon from "@mui/icons-material/RotateLeft";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BeerFetcher from "./components/BeerFetcher";

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
      <div className="App">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              style={{
                width: "70%",
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search for a beer"
              {...register("userInput")}
            />
            <Button
              style={{
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
            <div
              style={{
                border: "1px solid red",
              }}
            ></div>
          </form>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

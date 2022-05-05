import { SchemaLink } from "@apollo/client/link/schema";
import { schema } from "./graphql";

import { TextField, Button } from "@mui/material";

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

  //destructured react hook form to handle userInput & to reset the text field
  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      userInput: "",
    },
  });

  // created event handler to retrieve beer that matches userInput
  const onSubmit = async (data: FormValues) => {
    setBeerName(data.userInput);
  };

  const handleClick = () => resetField("userInput");

  return (
    <ApolloProvider client={client}>
      <div
        style={{
          backgroundImage: `url("/images/background-image.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="App"
      >
        <div>
          <Header />
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{
                color: "#fff",
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
                padding: "1rem",
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
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

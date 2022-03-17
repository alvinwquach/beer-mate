import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { getBeerFromAPIByName } from "./beerapi";
import { useForm } from "react-hook-form";
import BeerInformation from "./components/BeerInformation";
import "./App.css";

function App() {
  const [beerFromApi, setBeerFromApi] = useState({});

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      userInput: "Buzz",
    },
  });

  const onSubmit = async (data: any) => {
    const beerList = await getBeerFromAPIByName(data.userInput);
    setBeerFromApi(beerList[0]);
  };

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          {...register("userInput")}
        />
        <Button variant="contained" type="submit">
          Beer, Set, Match
        </Button>
      </form>
      {beerFromApi ?
         <BeerInformation userSelection={beerFromApi}/>
         :
         <p>Sorry, no beer for you!</p>
      }
    </div>
  );
}

export default App;

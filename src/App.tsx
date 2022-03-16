import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { getFromApi, getBeerFromAPIByName, BeerApi } from "./beerapi";
import { useForm } from "react-hook-form";
import BeerInformation from "./components/BeerInformation";
import "./App.css";

function App() {
  const [userSelection, setUserSelection] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userInput: "",
    },
  });

  const onSubmit = async (data: any) => {
    let res: any = await getBeerFromAPIByName(data.userInput);
    setUserSelection(res.data[0]);
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
      {userSelection ?
         <BeerInformation userSelection={userSelection}/>
         :
         <p>Sorry, no beer for you!</p>
      }
    </div>
  );
}

export default App;

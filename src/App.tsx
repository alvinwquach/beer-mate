import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { getBeerFromAPIByName } from "./beerapi";
import BeerInformation from "./components/BeerInformation";
import "./App.css";

type FormValues = {
  userInput: string;
};

function App() {
  const [beerFromApi, setBeerFromApi] = useState({});

  //destructured react hook form to handle userInput & to reset the text field
  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      userInput: "",
    },
  });

  // created event handler to retrieve beer that matches userInput
  const onSubmit = async (data: FormValues) => {
    const beerList = await getBeerFromAPIByName(data.userInput);
    setBeerFromApi(beerList[0]);
    console.log(beerList[0]);
    console.log(beerList[0].food_pairing[0]);
  };

  const handleClick = () => resetField("userInput");

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          // label="Outlined"
          variant="outlined"
          {...register("userInput")}
        />
        <Button variant="contained" type="submit">
          Brew... Mate!
        </Button>
        <Button variant="contained" onClick={handleClick}>
          Reset
        </Button>
      </form>
      {beerFromApi ? (
        <BeerInformation userSelection={beerFromApi} />
      ) : (
        <p>Sorry, no beer for you!</p>
      )}
    </div>
  );
}

export default App;

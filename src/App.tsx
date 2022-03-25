import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { GraphQL } from "./components/GraphQL";
import { BeerApi, getBeerFromAPIByName } from "./beerapi";
import BeerInformation from "./components/BeerInformation";
import "./App.css";

type FormValues = {
  userInput: string;
};

function App() {
  const [beerFromApi, setBeerFromApi] = useState<BeerApi>();
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  const handleClick = () => resetField("userInput");

  return (
    <div className="App">
      <GraphQL />
      <h1>Welcome to Brewmate!</h1>
      <p>
        Type in your beer to find what to enjoy it with! Please note: Not all
        beers may appear. Please click on the beer to learn more!
      </p>
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Brewmate"
            {...register("userInput")}
          />
          <Button variant="contained" type="submit">
            Brew... Mate!
          </Button>
          <Button variant="contained" color="error" onClick={handleClick}>
            Reset
          </Button>
        </form>

        {/* verifies to see if the beer from API exists, if not show error msg */}
        {beerFromApi ? (
          <BeerInformation beer={beerFromApi} />
        ) : submitted ? (
          <p>Sorry, no beer for you!</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { getFromApi, BeerApi } from './beerapi'
import './App.css';
// type AppProps = {
//   foo: string;
// }

function App() {
  // const [beers, setBeers] = useState("");
  // props.foo
  const [beers, setBeers] = useState<BeerApi[]>([]);

  useEffect(() => {
    getFromApi().then((beers) => {
      // console.log(beers[0].abv);
      // console.log(beers[10].name);
      // console.log(beers[0].tagline);
      // console.log(beers[0].ibu);
      setBeers(beers);
      return;
    });
  }, [])
  
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;

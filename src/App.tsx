import React from 'react';
import { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { getFromApi, getBeers } from './beerapi'
import './App.css';
// type AppProps = {
//   foo: string;
// }

function App() {
  const [beers, setBeers] = useState("");
  // props.foo

  useEffect(() => {
    
  }, [])
  

  getFromApi().then((beers) => {
    // console.log(beers[0].abv);
    // console.log(beers[10].name);
    // console.log(beers[0].tagline);
    // console.log(beers[0].ibu);
    // console.log(beers[0].method)
    // console.log(beers[0].method.mash_temp)
    console.log(beers[0].method.fermentation)
    console.log(beers[0].method.twist)
    // console.log(beers[0].method.fermentation.temp);

  });

  
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;

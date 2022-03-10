import React from 'react';
import { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { getFromApi, getBeers } from './beerapi'
import './App.css';

function App() {
  const [beers, setBeers] = useState(getBeers);
  console.log(getBeers);

  getFromApi().then((beers) => {
    console.log(beers[0].abv);
    console.log(beers[10].name);
    console.log(beers[0].tagline);
    console.log(beers[0].ibu);
  });

  
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;

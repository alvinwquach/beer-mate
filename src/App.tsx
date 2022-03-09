import React from 'react';
import { getFromApi, getBeers } from './beerapi'
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './App.css';

function App() {
  getFromApi().then((beers) => {
    console.log(beers[0].abv);
  });
  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default App;

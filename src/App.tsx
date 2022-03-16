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

  const getPairings = () => {
    return (
      <>
        <ul>
          <li>Name</li>
          <li>Tagline</li>
          <li>Description</li>
          <li>ABV</li>
          <li>Food Pairing</li>
        </ul>
        {beers.map((beer) => {
          return (
            <ul key={beer.id}>
              <li>{beer.name}</li>
              <li>{beer.description}</li>
              <li>{beer.tagline}</li>
              <li>{beer.abv}</li>
              <li>{beer.food_pairing}</li>
            </ul>
          );
        })}
        </>
    )
  }

  useEffect(() => {
    getFromApi().then((beers) => {
      // console.log(beers[0].abv);
      // console.log(beers[10].name);
      // console.log(beers[0].tagline);
      // console.log(beers[0].ibu);
      setBeers(beers);
    });
  }, [])

  return (
    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button onClick={getPairings} variant="contained">Beer, Set, Match</Button>
    </div>
  );
}

export default App;

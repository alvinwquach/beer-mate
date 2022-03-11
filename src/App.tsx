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
    });
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>Description</th>
            <th>ABV</th>
            <th>Food Pairing</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => {
            return (
              <tr key={beer.id}>
                <td>{beer.name}</td>
                <td>{beer.description}</td>
                <td>{beer.tagline}</td>
                <td>{beer.abv}</td>
                <td>{beer.food_pairing}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Beer, Set, Match</Button>
    </div>
  );
}

export default App;

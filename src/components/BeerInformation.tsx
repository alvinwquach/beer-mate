import React from 'react'
import { BeerApi } from "../beerapi";

type BeerInformationProps = {
  beer: BeerApi;
};
const BeerInformation = ({ beer }: BeerInformationProps) => {
  return (
    <>
      <div className="beerInformation">
        {/* mapping through food pairings to output each food item */}
        <ul>
          <p>Here are a few recommendations!</p>
          {beer.food_pairing.map((fooditem) => {
            return <li className="foodItem">{fooditem}</li>;
          })}
        </ul>
        <p>{beer.name}</p>
        <p>{beer.abv}</p>
        <img src={beer.image_url} alt="" />
      </div>
    </>
  );
};

export default BeerInformation
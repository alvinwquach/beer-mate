import React from "react";
import { useState } from "react";
import { BeerApi } from "../beerapi";
import AlertDialog from "./AlertDialog";

type BeerInformationProps = {
  beer: BeerApi;
};

const BeerInformation = ({ beer }: BeerInformationProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

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
        <img onClick={handleClickOpen} src={beer.image_url} alt="" />
        <AlertDialog open={open} thanks={close} beer={beer} />
      </div>
    </>
  );
};

export default BeerInformation;

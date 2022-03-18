import React from 'react'

const BeerInformation = ({ userSelection }: any) => {
  return (
    <>
      <div className="beerInformation">
        <h2>Here are a few recommendations!</h2>
        <p>{JSON.stringify(userSelection.food_pairing)}</p>
        <p>{userSelection.name}</p>
        <p>{userSelection.abv}</p>
        <img src={userSelection.image_url} alt="" />
      </div>
    </>
  );
};

export default BeerInformation
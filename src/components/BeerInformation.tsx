import React from 'react'

const BeerInformation = ({userSelection}: any) => {
  return (
    <div>
      <p>{userSelection.name}</p>
      <img src={userSelection.image_url} alt="" />
      <p>{userSelection.description}</p>
      <p>{userSelection.abv}%</p>
      <p>Here are a few recommendations that we suggest!</p>
      <li>{userSelection.food_pairing[0]}</li>
      <li>{userSelection.food_pairing[1]}</li>
      <li>{userSelection.food_pairing[2]}</li>
    </div>
  );
}

export default BeerInformation
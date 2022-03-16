import React from 'react'

const BeerInformation = ({userSelection}: any) => {
  return (
    <div>
        <p>{userSelection.name}</p>
        <p>{userSelection.tagline}</p>
        <img src={userSelection.image_url} alt="" />
    </div>
  )
}

export default BeerInformation
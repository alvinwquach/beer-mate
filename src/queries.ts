import { gql } from "@apollo/client";

const beerFragment = gql`
  fragment beerFragment on Beer {
    id
    name
    tagline
    first_brewed
    description
    image_url
    abv
    ibu
    target_fg
    target_og
    ebc
    srm
    ph
    attenuation_level
    volume {
      value
      unit
    }
    boil_volume {
      value
      unit
    }
    method {
      mash_temp {
        temp {
          value
          unit
        }
      }
      fermentation {
        temp {
          value
          unit
        }
      }
      twist
    }
    ingredients {
      malt {
        name
        amount {
          value
          unit
        }
      }
      hops {
        name
        amount {
          value
          unit
        }
        add
        attribute
      }
      yeast
    }
    food_pairing
    brewers_tips
    contributed_by
  }
`;

const namequery = gql`
  ${beerFragment}
  query GetBeerName($beername: String!) {
    getbeerbyname(name: $beername) {
      ...beerFragment
    }
  }
`;

const allquery = gql`
  ${beerFragment}
  query GetAllBeers {
    getbeer {
      ...beerFragment
    }
  }
`;

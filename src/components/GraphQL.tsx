import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetBeerName {
    getbeer {
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
  }
`;

export function GraphQL() {
  // useQuery to query api data
  const { data } = useQuery(query);

  return (
    <div className="Graphql">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

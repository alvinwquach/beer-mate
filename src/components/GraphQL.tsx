import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetBeerName {
    getbeer {
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
      attenuation_level
      volume
      boil_volume
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

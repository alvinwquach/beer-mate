import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetBeerName {
    getbeer {
      name
    }
  }
`;

const query2 = gql`
  query GetFoodPairing {
    getbeer {
      food_pairing
    }
  }
`;

export function GraphQL() {
  const { data } = useQuery(query2);

  return (
    <div className="Graphql">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetBeer {
    beer {
      name
    }
  }
`;

export function GraphQL() {
  const { data } = useQuery(query);

  return (
    <div className="Graphql">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

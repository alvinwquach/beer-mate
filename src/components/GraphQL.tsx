import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

const query = gql`
query GetBeer {
    beer {
        
    }
}
`;

export default function GraphQL() {
  const { data } = useQuery(query);

  return (
    <div className="Graphql">
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

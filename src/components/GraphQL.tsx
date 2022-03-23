import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useEffect, useState } from "react";

const typeDefs = `
type LocoMoco {
  repos: [String]
}
type Query {
  locomoco: LocoMoco
}
`;

const resolvers = {
  Query: {
    locomoco: () => {
      return { repos: ["abc", "123"] };
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
});

export default function GraphQL() {
  const [result, setResult] = useState<any>();
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetLoco {
            locomoco {
              repos
            }
          }
        `,
      })
      .then((x) => setResult(x));
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre>{JSON.stringify(result)}</pre>
    </div>
  );
}

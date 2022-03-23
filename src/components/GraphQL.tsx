import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetLoco {
    locomoco {
      repos
    }
  }
`;

export default function GraphQL() {
  const { data, error, loading } = useQuery(query);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

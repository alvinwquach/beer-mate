import { useQuery } from "@apollo/client";
import { useGetBeerNameQuery } from "../generated/graphql";

// use for graphiql, do not put into server.js

export function GraphQL() {
  // useQuery to query api data
  // add variables as an argument to useQuery
  const { data, loading, error } = useGetBeerNameQuery({
    variables: { beername: "Buzz" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="Graphql">
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {/* data.query.property */}
      <pre>{JSON.stringify(data?.getbeerbyname?.ingredients)}</pre>
    </div>
  );
}

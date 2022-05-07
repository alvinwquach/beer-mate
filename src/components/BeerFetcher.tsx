import React from "react";
import { useGetBeerNameQuery } from "../generated/graphql";
import BeerInformationGraphQL from "./BeerInformationGraphQL";

type BeerFetcherProps = {
  beername: string;
  searched: boolean;
};

function BeerFetcher({ beername, searched }: BeerFetcherProps) {
  const { data, loading, error } = useGetBeerNameQuery({
    variables: { beername },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && <BeerInformationGraphQL beerinfo={data} searched={searched} />}
    </div>
  );
}

export default BeerFetcher;
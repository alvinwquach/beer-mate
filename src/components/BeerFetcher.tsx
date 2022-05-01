import React from "react";
import { useGetBeerNameQuery } from "../generated/graphql";
import BeerInformationGraphQL from "./BeerInformationGraphQL";

type BeerFetcherProps = {
  beername: string;
};

function BeerFetcher({ beername }: BeerFetcherProps) {
  const { data, loading, error } = useGetBeerNameQuery({
    variables: { beername },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data && <BeerInformationGraphQL beerinfo={data} />}</div>;
}

export default BeerFetcher;

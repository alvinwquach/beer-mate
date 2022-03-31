import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Amount = {
  __typename?: 'Amount';
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type Beer = {
  __typename?: 'Beer';
  abv: Scalars['Float'];
  attenuation_level: Scalars['Float'];
  boil_volume?: Maybe<BoilVolume>;
  brewers_tips: Scalars['String'];
  contributed_by: Scalars['String'];
  description: Scalars['String'];
  ebc?: Maybe<Scalars['Float']>;
  first_brewed: Scalars['String'];
  food_pairing: Array<Scalars['String']>;
  ibu: Scalars['Float'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  ingredients?: Maybe<Ingredients>;
  method?: Maybe<Method>;
  name: Scalars['String'];
  ph: Scalars['Float'];
  srm?: Maybe<Scalars['Float']>;
  tagline: Scalars['String'];
  target_fg: Scalars['Int'];
  target_og: Scalars['Float'];
  volume?: Maybe<Volume>;
};

export type BoilVolume = {
  __typename?: 'BoilVolume';
  unit: Scalars['String'];
  value: Scalars['Int'];
};

export type Fermentation = {
  __typename?: 'Fermentation';
  temp?: Maybe<Temperature>;
};

export type Hops = {
  __typename?: 'Hops';
  add: Scalars['String'];
  amount?: Maybe<Amount>;
  attribute: Scalars['String'];
  name: Scalars['String'];
};

export type Ingredients = {
  __typename?: 'Ingredients';
  hops: Array<Hops>;
  malt: Array<Malt>;
  yeast: Scalars['String'];
};

export type Malt = {
  __typename?: 'Malt';
  amount?: Maybe<Amount>;
  name: Scalars['String'];
};

export type MashTemperature = {
  __typename?: 'MashTemperature';
  duration: Scalars['Int'];
  temp?: Maybe<Temperature>;
};

export type Method = {
  __typename?: 'Method';
  fermentation?: Maybe<Fermentation>;
  mash_temp: Array<MashTemperature>;
  twist?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getbeer?: Maybe<Beer>;
  getbeerbyname?: Maybe<Beer>;
};


export type QueryGetbeerbynameArgs = {
  name: Scalars['String'];
};

export type Temperature = {
  __typename?: 'Temperature';
  unit: Scalars['String'];
  value: Scalars['Int'];
};

export type Volume = {
  __typename?: 'Volume';
  unit: Scalars['String'];
  value: Scalars['Int'];
};

export type BeerFragmentFragment = { __typename?: 'Beer', id: number, name: string, tagline: string, first_brewed: string, description: string, image_url: string, abv: number, ibu: number, target_fg: number, target_og: number, ebc?: number | null, srm?: number | null, ph: number, attenuation_level: number, food_pairing: Array<string>, brewers_tips: string, contributed_by: string, volume?: { __typename?: 'Volume', value: number, unit: string } | null, boil_volume?: { __typename?: 'BoilVolume', value: number, unit: string } | null, method?: { __typename?: 'Method', twist?: string | null, mash_temp: Array<{ __typename?: 'MashTemperature', temp?: { __typename?: 'Temperature', value: number, unit: string } | null }>, fermentation?: { __typename?: 'Fermentation', temp?: { __typename?: 'Temperature', value: number, unit: string } | null } | null } | null, ingredients?: { __typename?: 'Ingredients', yeast: string, malt: Array<{ __typename?: 'Malt', name: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }>, hops: Array<{ __typename?: 'Hops', name: string, add: string, attribute: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }> } | null };

export type GetBeerNameQueryVariables = Exact<{
  beername: Scalars['String'];
}>;


export type GetBeerNameQuery = { __typename?: 'Query', getbeerbyname?: { __typename?: 'Beer', id: number, name: string, tagline: string, first_brewed: string, description: string, image_url: string, abv: number, ibu: number, target_fg: number, target_og: number, ebc?: number | null, srm?: number | null, ph: number, attenuation_level: number, food_pairing: Array<string>, brewers_tips: string, contributed_by: string, volume?: { __typename?: 'Volume', value: number, unit: string } | null, boil_volume?: { __typename?: 'BoilVolume', value: number, unit: string } | null, method?: { __typename?: 'Method', twist?: string | null, mash_temp: Array<{ __typename?: 'MashTemperature', temp?: { __typename?: 'Temperature', value: number, unit: string } | null }>, fermentation?: { __typename?: 'Fermentation', temp?: { __typename?: 'Temperature', value: number, unit: string } | null } | null } | null, ingredients?: { __typename?: 'Ingredients', yeast: string, malt: Array<{ __typename?: 'Malt', name: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }>, hops: Array<{ __typename?: 'Hops', name: string, add: string, attribute: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }> } | null } | null };

export type GetAllBeersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBeersQuery = { __typename?: 'Query', getbeer?: { __typename?: 'Beer', id: number, name: string, tagline: string, first_brewed: string, description: string, image_url: string, abv: number, ibu: number, target_fg: number, target_og: number, ebc?: number | null, srm?: number | null, ph: number, attenuation_level: number, food_pairing: Array<string>, brewers_tips: string, contributed_by: string, volume?: { __typename?: 'Volume', value: number, unit: string } | null, boil_volume?: { __typename?: 'BoilVolume', value: number, unit: string } | null, method?: { __typename?: 'Method', twist?: string | null, mash_temp: Array<{ __typename?: 'MashTemperature', temp?: { __typename?: 'Temperature', value: number, unit: string } | null }>, fermentation?: { __typename?: 'Fermentation', temp?: { __typename?: 'Temperature', value: number, unit: string } | null } | null } | null, ingredients?: { __typename?: 'Ingredients', yeast: string, malt: Array<{ __typename?: 'Malt', name: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }>, hops: Array<{ __typename?: 'Hops', name: string, add: string, attribute: string, amount?: { __typename?: 'Amount', value: number, unit: string } | null }> } | null } | null };

export const BeerFragmentFragmentDoc = gql`
    fragment beerFragment on Beer {
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
    `;
export const GetBeerNameDocument = gql`
    query GetBeerName($beername: String!) {
  getbeerbyname(name: $beername) {
    ...beerFragment
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useGetBeerNameQuery__
 *
 * To run a query within a React component, call `useGetBeerNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBeerNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBeerNameQuery({
 *   variables: {
 *      beername: // value for 'beername'
 *   },
 * });
 */
export function useGetBeerNameQuery(baseOptions: Apollo.QueryHookOptions<GetBeerNameQuery, GetBeerNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBeerNameQuery, GetBeerNameQueryVariables>(GetBeerNameDocument, options);
      }
export function useGetBeerNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBeerNameQuery, GetBeerNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBeerNameQuery, GetBeerNameQueryVariables>(GetBeerNameDocument, options);
        }
export type GetBeerNameQueryHookResult = ReturnType<typeof useGetBeerNameQuery>;
export type GetBeerNameLazyQueryHookResult = ReturnType<typeof useGetBeerNameLazyQuery>;
export type GetBeerNameQueryResult = Apollo.QueryResult<GetBeerNameQuery, GetBeerNameQueryVariables>;
export const GetAllBeersDocument = gql`
    query GetAllBeers {
  getbeer {
    ...beerFragment
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useGetAllBeersQuery__
 *
 * To run a query within a React component, call `useGetAllBeersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBeersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBeersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBeersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBeersQuery, GetAllBeersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBeersQuery, GetAllBeersQueryVariables>(GetAllBeersDocument, options);
      }
export function useGetAllBeersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBeersQuery, GetAllBeersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBeersQuery, GetAllBeersQueryVariables>(GetAllBeersDocument, options);
        }
export type GetAllBeersQueryHookResult = ReturnType<typeof useGetAllBeersQuery>;
export type GetAllBeersLazyQueryHookResult = ReturnType<typeof useGetAllBeersLazyQuery>;
export type GetAllBeersQueryResult = Apollo.QueryResult<GetAllBeersQuery, GetAllBeersQueryVariables>;
import { Resolvers } from "@apollo/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { getBeerFromAPIByName, getFromApi } from "./beerapi";

// schema
const typeDefs = `
type Beer {
  id: Int!
  name: String!
  tagline: String!
  first_brewed: String!
  description: String!
  image_url: String
  abv: Float!
  ibu: Float!
  target_fg: Int!
  target_og: Float!
  ebc: Float
  srm: Float
  ph: Float!
  attenuation_level: Float!
  volume: Volume
  boil_volume: BoilVolume
  method: Method
  ingredients: Ingredients
  food_pairing: [String!]!
  brewers_tips: String!
  contributed_by: String!
}

type Volume {
  value: Int!
  unit: String!
}

type BoilVolume {
  value: Int!
  unit: String!
}

type Method {
  mash_temp: [MashTemperature!]!
  fermentation: Fermentation
  twist: String
}

type Fermentation {
  temp: Temperature
}

type MashTemperature {
  temp: Temperature
  duration: Int
}

type Temperature {
  value: Int!
  unit: String!
}

type Ingredients {
  malt: [Malt!]!
  hops: [Hops!]!
  yeast: String!
}

type Malt {
  name: String!
  amount: Amount
}

type Hops {
  name: String!
  amount: Amount
  add: String!
  attribute: String!
}

type Amount {
  value: Float!
  unit: String!
}

type Query {
  getbeer: Beer
  getbeerbyname(name: String!): Beer
}
`;

// apis

// interface from Apollo for resolvers
const resolvers: Resolvers = {
  Query: {
    getbeer: async () => {
      const beers = await getFromApi();
      return beers[0];
    },
    getbeerbyname: async (root, args) => {
      const beers = await getBeerFromAPIByName(args.name);
      return beers[0];
    },
  },
};

// server
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

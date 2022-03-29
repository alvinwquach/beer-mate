import { makeExecutableSchema } from "@graphql-tools/schema";
import { getFromApi } from "./beerapi";

// schema
const typeDefs = `
type Beer {
  id: Int!
  name: String!
  tagline: String!
  first_brewed: String!
  description: String!
  image_url: String!
  abv: Float!
  ibu: Int!
  target_fg: Int!
  target_og: Int!
  ebc: Float!
  srm: Int!
  ph: Float!
  attenuation_level: Float!
  volume: Volume
  boil_volume: BoilVolume
  method: Method
  ingredients: Ingredients
  food_pairing: [String!]
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
  mash_Temp: [MashTemperature!]
  fermentation: Fermentation
  twist: String
}

type Fermentation {
  temp: Temperature
}

type MashTemperature {
  temp: Temperature
  duration: Int!
}

type Temperature {
  value: Int!
  unit: String!
}

type Ingredients {
  malt: [Malt!]
  hops: [Hops!]
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
}
`;

// apis
const resolvers = {
  Query: {
    getbeer: async () => {
      const beers = await getFromApi();
      return beers[0];
    },
  },
};

// server
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

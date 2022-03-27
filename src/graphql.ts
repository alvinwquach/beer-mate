import { makeExecutableSchema } from "@graphql-tools/schema";
import { getFromApi } from "./beerapi";

// schema
const typeDefs = `
type Beer {
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
  attenuation_level: Float!
  volume: Volume!
  boil_volume: BoilVolume
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

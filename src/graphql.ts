import { makeExecutableSchema } from "@graphql-tools/schema";
import { getFromApi } from "./beerapi";

// schema
const typeDefs = `
type Beer {
  name: String!
  food_pairing: [String!]
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

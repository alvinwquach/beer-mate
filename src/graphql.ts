import { makeExecutableSchema } from "@graphql-tools/schema";
import { getFromApi } from "./beerapi";

const typeDefs = `
type Beer {
  name: String!
}


type Query {
    beer: Beer
}
`;

const resolvers = {
  Query: {
    beer: async () => {
      const beers = await getFromApi();
      return beers[0];
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

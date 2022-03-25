import { makeExecutableSchema } from "@graphql-tools/schema";

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
    beer: () => {
      return { name: "Pliny" };
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

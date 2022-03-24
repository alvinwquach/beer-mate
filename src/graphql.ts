import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
type Volume {
    volume: Int, string
}
`;

const resolvers = {
  Query: {},
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

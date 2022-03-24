import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
type Beer {
    id: Int!
    name: String!
    tagline: String!
    first_brewed: String!
    description: String!
    image_url: string!
    abv: Float!
    ibu: Int!
    target_fg: Int!
    target_og: Int!
    ebc: Int!
    srm: Int!
    ph: Float!
    attenuation_level: Int!
    volume:
    boil_volume:
    method:
    ingredients:
    food_pairing: [String]
    brewers_tips: String!
    contributed_by: String!
}

type Query {
    beer: Beer
}
`;

const resolvers = {
  Query: {
    beer: () => {
      return;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const fetch = require("node-fetch");
// create express server
const app = express();


const typeDefs = `
type Beer {
  id: Int!
  name: String!
  tagline: String!
  first_brewed: String!
  description: String!
  image_url: String!
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
  value: Int
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

// creating api call 
const getFromApi = async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  return response.json();
};

//creating api call to grab beer by name
const getBeerFromAPIByName = async (beerName) => {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers/?beer_name=${beerName}`
  );
  return response.json();
};

const resolvers = {
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(8000);

import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from "../../schema";
import resolvers from "../../context/src/resolvers";
import {GraphQLContext} from "../../commonUtils";

const server = new ApolloServer<GraphQLContext>({
  cache: "bounded",
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  context: async ({req}) => ({
    token: req.headers.authorization,
  }),
}).then(({url}) => console.log(`🚀  Server ready at ${url}`));

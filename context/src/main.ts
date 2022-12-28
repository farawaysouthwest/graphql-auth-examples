import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import typeDefs from "../../schema";
import resolvers from "./resolvers";
import {GraphQLError} from "graphql";
import {GraphQLContext, validateToken} from "../../commonUtils";

const server = new ApolloServer<GraphQLContext>({
  cache: "bounded",
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  context: async ({req}) => {
    const token = req.headers.authorization;

    if (!validateToken(token)) throw new GraphQLError("invalid token");

    const context: GraphQLContext = {token};
    return context;
  },
}).then(({url}) => console.log(`🚀  Server ready at ${url}`));

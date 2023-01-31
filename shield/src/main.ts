import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "../../schema";
import resolvers from "../../context/src/resolvers";
import { GraphQLContext } from "../../commonUtils";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "./auth";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  permissions
);

const server = new ApolloServer<GraphQLContext>({
  cache: "bounded",
  schema,
});

startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.authorization,
  }),
}).then(({ url }) => console.log(`🚀  Server ready at ${url}`));

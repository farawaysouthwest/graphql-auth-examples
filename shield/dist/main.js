import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "graphql";
const schema = buildSchema();
const server = new ApolloServer({
    cache: "bounded",
    schema: schema,
});
await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
    context: ({ req }) => ({ token: req.headers.authorization }),
});

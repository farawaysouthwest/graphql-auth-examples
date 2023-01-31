import { rule, shield, not, and, or } from "graphql-shield";
import { GraphQLContext } from "../../commonUtils";

const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, ctx: GraphQLContext, info) => {
    return ctx.token !== null;
  }
);

const isAdmin = rule({ cache: "contextual" })(
  async (parent, args, ctx: GraphQLContext, info) => {
    return ctx.token === "admin";
  }
);

const isEditor = rule({ cache: "contextual" })(
  async (parent, args, ctx: GraphQLContext, info) => {
    return ctx.token === "editor";
  }
);

// Permissions
export const permissions = shield({
  Query: {
    getUsers: and(isAuthenticated, or(isAdmin, isEditor)),
  },
});

import {GraphQLContext} from "../../commonUtils";
import {Resolvers, User} from "../../resolvers-types";

export default {
  Query: {
    getUsers: (_, __: unknown, {token}: GraphQLContext) => {
      return [{id: "1"}, {id: "2"}] as User[];
    },
  },
} as Resolvers;

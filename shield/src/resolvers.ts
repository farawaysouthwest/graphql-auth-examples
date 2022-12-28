import {Resolvers, User} from "../../resolvers-types";
import {GraphQLContext} from "./main";

export default {
  Query: {
    getUsers: (_, __: unknown, {token}: GraphQLContext) => {
      return [{id: "1"}, {id: "2"}] as User[];
    },
  },
} as Resolvers;

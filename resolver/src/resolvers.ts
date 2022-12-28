import {GraphQLContext} from "../../commonUtils";
import {Resolvers, User} from "../../resolvers-types";
import {checkAuth} from "./auth";

function getUsers(_, __: unknown, context: GraphQLContext) {
  return [{id: "1"}, {id: "2"}] as User[];
}

export default {
  Query: {
    getUsers: checkAuth<unknown, User[]>(getUsers),
  },
} as Resolvers;

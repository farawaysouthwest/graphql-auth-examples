import {GraphQLError, GraphQLResolveInfo} from "graphql";
import {ResolversParentTypes} from "../../resolvers-types";
import {GraphQLContext, validateToken} from "../../commonUtils";

type ResolverSignature<args, result> = (
  parent: ResolversParentTypes,
  args: args,
  context: GraphQLContext,
  info: GraphQLResolveInfo
) => result;

export function checkAuth<A, R>(
  resolver: ResolverSignature<A, R>
): ResolverSignature<A, R> {
  return (parent, args, context, info) => {
    // check auth
    if (!validateToken(context.token)) throw new GraphQLError("invalid token");

    // continue execution.
    return resolver(parent, args, context, info);
  };
}

export interface GraphQLContext {
  token: string;
}

/// fake auth check

export function validateToken(token: string): boolean {
  return token === "testToken";
}

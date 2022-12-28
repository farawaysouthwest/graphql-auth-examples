export default `#graphql

type Query {
getUsers: [User]!
}

type User {
id: ID!
}
`;

import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import { userResolver } from '../resolver/user-resolver';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
    fullName: String
    hireDate: String
    birthDate: String
  }

  type Query {
    users: [User]
  }
`;


export default makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(userResolver)
});
import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import UserResolver from '../resolver/user-resolver';
import AuthResolver from '../resolver/auth-resolver';

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
    getUsers: [User]
  }

  type Mutation {
    authenticate(username: String!, password: String!): String!
  } 
`;


export default makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(UserResolver, AuthResolver)
});
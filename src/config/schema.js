import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import UserResolver from '../resolver/user-resolver';
import AuthResolver from '../resolver/auth-resolver';
import CepResolver from '../resolver/cep-resolver';

const typeDefs = gql`
  type CEP {
    cep: String
    logradouro: String
    complemento: String
    bairro: String
    uf: String
    unidade: String
    ibge: String
    gia: String
  }

  type User {
    id: ID!
    username: String!
    email: String
    fullName: String
    hireDate: String
    birthDate: String
    roles: [Role]
  }

  type Role {
    id: ID!
    name: String!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    findCEP(cep: String): CEP
  }

  input UserInput {
    username: String!
    password: String!
    email: String!
    fullName: String!
  }

  type Mutation {
    authenticate(username: String!, password: String!): String!
    createUser(user: UserInput): String
  } 
`;


export default makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(UserResolver, AuthResolver, CepResolver)
});
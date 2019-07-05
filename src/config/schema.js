import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server';
import { userResolver } from '../resolver/user';
import { companyResolver } from '../resolver/company';

const typeDefs = gql`
  type User {
    title: String
    author: String
  }

  type Company {
    name: String
    employees: [User]
  }

  type Query {
    users: [User]
    company(id: Int): [Company]
  }
`;


export default makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: merge(companyResolver, userResolver)
});
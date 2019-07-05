import { ApolloServer } from 'apollo-server';
import Schema from './config/schema';

const server = new ApolloServer({
  schema: Schema
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
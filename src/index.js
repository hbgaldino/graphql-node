import { ApolloServer } from 'apollo-server';
import { generateAuthToken, verifyAuthToken } from './config/auth-provider';
import Schema from './config/schema';

const server = new ApolloServer({
  schema: Schema,
  // context: ({ req }) => {
  //   return verifyAuthToken(req.headers.authorization || '');
  // }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
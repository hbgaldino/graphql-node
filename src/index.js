import { ApolloServer } from 'apollo-server';
import { verifyAuthToken } from './service/auth-service';
import Schema from './config/schema';

const server = new ApolloServer({
  schema: Schema,
  context: ({ req }) => {
    return { authUser: verifyAuthToken(req.headers.authorization || '') };
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
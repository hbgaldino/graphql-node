import { authenticate } from '../service/auth-service';

const authResolver = {
  Mutation: {
    authenticate: (parent, args, context) => authenticate(args)
  }
}

export default authResolver;
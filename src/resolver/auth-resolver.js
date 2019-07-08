import { authenticate } from '../service/auth-service';

const authResolver = {
  Mutation: {
    authenticate: (parent, context, args, info) => authenticate(context)
  }
}

export default authResolver;
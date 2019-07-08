import { fetchUsers, fetchUser, fetchUserRole, createUser } from '../service/user-service';

const userResolver = {
  Mutation: {
    createUser: (parent, args, context) => createUser(args)
  },
  Query: {
    getUsers: (parent, args, context) => fetchUsers(parent, args, context),
    getUser: (parent, args, context) => fetchUser(parent, args, context)
  },
  User: {
    roles: (parent) => fetchUserRole(parent)
  }
}

export default userResolver;
import { fetchUsers, fetchUser, fetchUserRole } from '../service/user-service';

const userResolver = {
  Query: {
    getUsers: (parent, args, context) => fetchUsers(parent, args, context),
    getUser: (parent, args, context) => fetchUser(parent, args, context)
  },
  User: {
    roles: (parent) => fetchUserRole(parent)
  }
}

export default userResolver;
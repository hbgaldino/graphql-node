import { fetchUsers, fetchUserRole } from '../service/user-service';

const userResolver = {
  Query: {
    getUsers: (parent, args, context, info) => fetchUsers(parent, args, context, info)
  },
  User: {
    roles: (parent) => fetchUserRole(parent)
  }
}

export default userResolver;
import { fetchUsers } from '../service/user-service';

const userResolver = {
  Query: {
    getUsers: (parent, args, context, info) => fetchUsers(parent, args, context, info)
  }
}

export default userResolver;
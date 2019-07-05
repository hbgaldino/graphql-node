import { fetchUsers } from '../service/user';

const userResolver = {
  Query: {
    users: async (parent, args, context, info) => {
      return await fetchUsers();
    }
  }
}

export { userResolver };
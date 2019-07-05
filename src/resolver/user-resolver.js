import { fetchUsers } from '../service/user-service';

const userResolver = {
  Query: {
    users: () => fetchUsers()
  }
}

export { userResolver };
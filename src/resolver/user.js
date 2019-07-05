import { fetchUsers, fetchJob } from '../service/user';

const userResolver = {
  User: {
    job: async (parent, args, context, info) => {
      return await fetchJob(parent.job_id);
    }
  },
  Query: {
    users: async (parent, args, context, info) => {
      return await fetchUsers();
    }
  }
}

export { userResolver };
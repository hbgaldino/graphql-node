import { fetchUsers, fetchJob } from '../service/user-service';

const userResolver = {
  User: {
    job: ({ job_id }) => fetchJob(job_id)
  },
  Query: {
    users: () => fetchUsers()
  }
}

export { userResolver };
import { executeSQL } from '../db/client';

const userResolver = {
  Query: {
    users: (parent, args, context, info) => {
      console.log(`User resolver!!!`)
      executeSQL();
    }
  }
}

export { userResolver };
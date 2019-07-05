const userResolver = {
  Query: {
    users: (parent, args, context, info) => {
      console.log(`User resolver!!!`)
    }
  }
}

export { userResolver };
const companyResolver = {
  Query: {
    company: (parent, args, context, info) => {
      console.log(`Company Resolver`);
      console.log(args);
    }
  }
}

export { companyResolver };
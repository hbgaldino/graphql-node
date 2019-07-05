import oracledb from 'oracledb';

const executeSQL = async (query, bind) => {
  try {

    const conn = await oracledb.getConnection({
      user: "graphql",
      password: "pomarola",
      connectionString: "localhost:1521/xe"
    });

    const options = {
      outFormat: oracledb.OBJECT
    };

    return conn.execute(query, bind, options);
  } catch (err) {
    console.error(err);
  }
}

export { executeSQL };
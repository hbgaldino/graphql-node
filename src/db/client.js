import oracledb from 'oracledb';

const executeSQL = async () => {
  try {

    const conn = await oracledb.getConnection({
      user: "system",
      password: "oracle",      
      connectionString: "localhost:1521/xe"
    });

    const bind = {};
    const options = {
      outFormat: oracledb.OBJECT
    };

    const result = await conn.execute(`SELECT * FROM HR.JOBS`, bind, options);  
    console.log(result);

  } catch (err) {
    console.error(err);
  }
}

export { executeSQL };




import { executeSQL } from "../db/client";

const fetchUsers = async () => {
  const result = await executeSQL(`SELECT * FROM HR.EMPLOYEES WHERE ROWNUM <= :1`, [10]);

  const users = result.rows.map((row) => ({
    id: row.EMPLOYEE_ID,
    first_name: row.FIRST_NAME,
    last_name: row.LAST_NAME
  }));


  return users;
}


export { fetchUsers };
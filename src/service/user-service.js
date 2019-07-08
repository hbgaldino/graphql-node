import { executeSQL } from "../db/client";

const fetchUsers = async (parent, args, { authUser }) => {
  const result = await executeSQL(`SELECT * FROM EMPLOYEE WHERE ROWNUM <= :1`, [10]);

  const users = result.rows.map((row) => ({
    id: row.ID,
    username: row.USERNAME,
    fullName: row.FULL_NAME,
    email: row.EMAIL,
    hireDate: row.HIRE_DATE.toISOString(),
    birthDate: row.BIRTH_DATE.toISOString()
  }));

  return users;
}

export { fetchUsers };
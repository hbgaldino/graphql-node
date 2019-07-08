import { executeSQL } from "../db/client";
import { AuthenticationError } from "apollo-server";

export const fetchUsers = async (parent, args, { authUser }) => {

  // checking if user is loggedin and has the ADMIN role
  if (!authUser || !authUser.roles.includes('ADMIN'))
    throw new AuthenticationError('Unauthorized access');


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
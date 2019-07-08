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

export const fetchUser = async (parent, { id }, { authUser }) => {

  // checking if user is loggedin and has the ADMIN role
  if (!authUser || !authUser.roles.includes('ADMIN'))
    throw new AuthenticationError('Unauthorized access');


  const result = await executeSQL(`SELECT * FROM EMPLOYEE WHERE ID = :1`, [id]);
  const row = result.rows[0];

  const user = {
    id: row.ID,
    username: row.USERNAME,
    fullName: row.FULL_NAME,
    email: row.EMAIL,
    hireDate: row.HIRE_DATE.toISOString(),
    birthDate: row.BIRTH_DATE.toISOString()
  };

  return user;
}

export const fetchUserRole = async ({ id }) => {
  const result = await executeSQL('SELECT R.ID, R.NAME FROM EMPLOYEE_ROLES E JOIN ROLES R ON (E.ID_ROLE = R.ID) WHERE E.ID_EMPLOYEE = :1', [id]);
  return result.rows.map(row => ({ id: row.ID, name: row.NAME }));
}

export const createUser = async ({ user }) => {
  await executeSQL(`BEGIN
                      SP_CREATE_USER(:fullName, :username, :password, :email);
                    END;`, user);
  return "successfuly";
}
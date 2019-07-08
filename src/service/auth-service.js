import jwt from 'jsonwebtoken';
import { executeSQL } from "../db/client";
import { AuthenticationError } from 'apollo-server';

const key = 'cQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s';

export const authenticate = async ({ username, password }) => {

  const sql = 'SELECT E.ID, E.FULL_NAME, E.EMAIL, R.ID ID_ROLE, R.NAME ROLE_NAME FROM EMPLOYEE E '
    + 'JOIN EMPLOYEE_ROLES ER ON(E.ID = ER.ID_EMPLOYEE) '
    + 'JOIN ROLES R ON(ER.ID_ROLE = R.ID) WHERE E.USERNAME = :1 AND E.PASSWORD = :2';

  const userData = await executeSQL(sql, [username, password]);

  if (userData.rows.length === 0)
    throw new AuthenticationError('Invalid Username or Password.');

  const userRow = userData.rows[0];

  const tokenPayload = {
    id: userRow.ID,
    fullName: userRow.FULL_NAME,
    username: userRow.USERNAME,
    email: userRow.EMAIL,
    roles: userData.rows.map(row => (row.ROLE_NAME))
  };

  return jwt.sign(tokenPayload, key, { expiresIn: 60 });
}

export const verifyAuthToken = (token) => {
  try {
    return jwt.verify(token, key);
  } catch (err) {
    return null;
  }
}
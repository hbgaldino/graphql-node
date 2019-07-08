import jwt from 'jsonwebtoken';
import { executeSQL } from "../db/client";
import { AuthenticationError } from 'apollo-server';

const key = 'cQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s';

export const authenticate = async ({ username, password }) => {
  const userData = await executeSQL('SELECT * FROM EMPLOYEE WHERE USERNAME = :1 AND PASSWORD = :2', [username, password]);

  if (userData.rows.length === 0)
    throw new AuthenticationError('Invalid Username or Password.');

  const userRow = userData.rows[0];
  const tokenPayload = {
    id: userRow.ID,
    fullName: userRow.FULL_NAME,
    username: userRow.USERNAME,
    email: userRow.EMAIL
  };

  return jwt.sign(tokenPayload, key, { expiresIn: 60000 });
}

export const verifyAuthToken = (token) => {
  try {
    return jwt.verify(token, key);
  } catch (err) {
    return null;
  }
}
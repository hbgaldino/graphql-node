import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

const key = 'cQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s';

const generateAuthToken = (userinfo) => {
  return jwt.sign(userinfo, key, { expiresIn: "1 hour" });
}

const verifyAuthToken = (token) => {
  try {
    return jwt.verify(token, key);
  } catch (err) {
    throw new AuthenticationError('you must be logged in');
  }
}


export { generateAuthToken, verifyAuthToken };


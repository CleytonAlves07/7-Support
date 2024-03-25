import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';
import HttpException from '../../middleware/errors/HttpException';
import httpStatus from 'http-status';

configDotenv(); 

interface UserPayload {
  id: string;
  email: string;
  role: string;
}

export const generateAccessToken = (payload: UserPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'UmaSenhaMuitoDaSecretaQuaseUm007!Uau$!!',
    { expiresIn: process.env.JWT_EXPIRATION_TIME || '3h' });
};

export const verifyAccessToken = (token: string): UserPayload => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'UmaSenhaMuitoDaSecretaQuaseUm007!Uau$!!') as UserPayload;
    return decoded;
  } catch (error) {
    throw new HttpException(httpStatus.UNAUTHORIZED,'Token inválido!');
  }
};


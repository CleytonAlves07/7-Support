import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';


export const emailFormat = async (email: string): Promise<void> => {
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Formato de email inválido')
  }
}
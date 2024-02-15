import bcryptjs from 'bcryptjs';
import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';
import { existUser } from '../existUser';


export const invalidPassword = async (email: string, passWord: string) => {
  const customer = await existUser(email);
  if (!customer) {
    throw new HttpException(httpStatus.UNAUTHORIZED, 'Credencial inválida')
  }
  
  const validPassword = bcryptjs.compareSync(passWord, customer.password);
  if (!validPassword) {
    throw new HttpException(httpStatus.UNAUTHORIZED, 'Credencial inválida')
  }
 
}


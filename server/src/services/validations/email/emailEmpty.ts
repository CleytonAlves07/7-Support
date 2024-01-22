import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';


export const emailEmpty = async (  email: string ): Promise<void> => {
  
  if (!email || email.length === 0) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'É necessário preencher todos os campos do formulário!')
  }
}
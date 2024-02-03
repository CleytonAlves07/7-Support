import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';


export const nameEmpty = async (  name: string ): Promise<void> => {
  
  if (!name || name.length === 0) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'É necessário preencher todos os campos do formulário!')
  }
}
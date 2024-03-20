import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const repairEmpty = async (  repair: string ): Promise<void> => {
  
  if (!repair || repair.length === 0) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'É necessário preencher todos os campos do formulário!')
  }
}
import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const repairMaxCharacters = async (  repair: string ): Promise<void> => {
  
  if (repair.length > 150 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no máximo 150 caracteres!');
  }
}
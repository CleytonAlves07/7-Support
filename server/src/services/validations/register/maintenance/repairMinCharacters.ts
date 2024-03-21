import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const repairMinCharacters = async (  repair: string ): Promise<void> => {
  
  if (repair.length < 10 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no mínimo 10 caracteres ou mais!');
  }
}
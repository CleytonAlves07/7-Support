import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const descriptionMinCharacters = async (  description: string ): Promise<void> => {
  
  if (description.length < 15 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no mínimo 15 caracteres ou mais!');
  }
}
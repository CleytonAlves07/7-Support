import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const descriptionMaxCharacters = async (  description: string ): Promise<void> => {
  
  if (description.length > 150 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no máximo 150 caracteres!');
  }
}
import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const productMaxCharacters = async (  product: string ): Promise<void> => {
  
  if (product.length > 60 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no máximo 60 caracteres!');
  }
}
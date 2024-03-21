import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const productMinCharacters = async (  product: string ): Promise<void> => {
  
  if (product.length < 10 ) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Preencher com no mínimo 10 caracteres ou mais!');
  }
}
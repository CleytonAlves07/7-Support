import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const pascalRegisterProduct = async (  product: string ): Promise<void> => {
  const firstLetter = product.slice(0, 1);
  const upperCaseFirstLetter = firstLetter.toUpperCase();
  if (firstLetter !== upperCaseFirstLetter) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Primeira letra deve ser maiúscula!');
  }
}
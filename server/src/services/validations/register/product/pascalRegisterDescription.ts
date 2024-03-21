import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const pascalRegisterDescription = async (  description: string ): Promise<void> => {
  const firstLetter = description.slice(0, 1);
  const upperCaseFirstLetter = firstLetter.toUpperCase();
  if (firstLetter !== upperCaseFirstLetter) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Primeira letra deve ser maiúscula!');
  }
}
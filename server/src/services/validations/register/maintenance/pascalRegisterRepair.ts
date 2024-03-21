import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const pascalRegisterRepair = async (  repair: string ): Promise<void> => {
  const firstLetter = repair.slice(0, 1);
  const upperCaseFirstLetter = firstLetter.toUpperCase();
  if (firstLetter !== upperCaseFirstLetter) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Primeira letra deve ser maiúscula!');
  }
}
import httpStatus from 'http-status';
import HttpException from '../../../../middleware/errors/HttpException';


export const amountFormat = async (  amount: string ): Promise<void> => {
  const amountRegex = /^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/;
  if (!amountRegex.test(amount)) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Formato inválido. Favor utilizar "," Ex: 15,50');
  }
}
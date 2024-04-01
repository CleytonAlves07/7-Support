import { verifyAccessToken } from '../../../../server/src/services/validations/jwt';
import HttpException from '../../../../server/src/middleware/errors/HttpException';

export default async function checkAccessToken():Promise<Boolean> {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new HttpException(401, 'Você não tem permissão para acessar esta página!');
    } 
    const verifiedToken = verifyAccessToken(accessToken);
      if (verifiedToken.role !== 'manager') {
        throw new HttpException(401, 'Você não tem permissão para acessar esta página!');
      } 
    return true;
    } catch (error) {
      console.error('Error: ', error);
      alert('Você não tem permissão para acessar esta página!');
      return false;
  }
}
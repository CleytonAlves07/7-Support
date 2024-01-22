import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';


export const passwordFormat = async (password: string) => {
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    throw new HttpException(httpStatus.BAD_REQUEST, 'Sua senha deve conter: ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial("@$!%*?&")')
  }
}



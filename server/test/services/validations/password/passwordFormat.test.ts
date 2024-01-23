import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { passwordFormat } from '../../../../src/services/validations/password/passwordFormat';



describe('passwordFormat', () => {
  const wrongPasswordFormats = [
       "asd",
       "asdABCV12",
       "asd12asdc",
       "asd12!$",
       "12!$1545",
       "ASDBCV!154",
    ]
   it.each(wrongPasswordFormats)('should show an error if the password format is wrong', async(wrongPasswordFormat) => {
         
     await expect(passwordFormat(wrongPasswordFormat))
       .rejects
       .toThrow(new HttpException(
         httpStatus.BAD_REQUEST,
         'Sua senha deve conter: ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial("@$!%*?&")'
         ));
   });
});
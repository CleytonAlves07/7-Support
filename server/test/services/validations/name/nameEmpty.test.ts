import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { emailEmpty } from '../../../../src/services/validations/email/emailEmpty';

describe('emailEmpty', () => {
    it('should show an error if an empty name is passed ', async() => {
      const emptyEmail = emailEmpty('') 

      await expect(emptyEmail).rejects.toThrow(new HttpException(httpStatus.BAD_REQUEST, 'É necessário preencher todos os campos do formulário!'));
    });
});
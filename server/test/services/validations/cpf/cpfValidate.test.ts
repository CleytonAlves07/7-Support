import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { cpfValidate } from '../../../../src/services/validations/cpf/cpfValidate';


describe('cpfValidate', () => {
    it('should show an error if an invalid cpf is passed', async() => {
      const isInvalidCPF = cpfValidate('111.999.999-21')
    
      await expect(isInvalidCPF).rejects.toThrow(new HttpException(httpStatus.BAD_REQUEST, 'CPF inválido'))
    });
});
import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { emailFormat } from '../../../../src/services/validations/email/emailFormat';

describe('emailFormat', () => {
  const invalidEmails = [
    "robervaleseuavalenviando.com",
    "robervaleseuaval@enviando",
    "robervaleseuaval@enviando.com.b",
    "robervaleseuaval!!!@enviando.com",
    "robervaleseuaval$$$@enviando.com",
    ]
    it.each(invalidEmails)('should show an error if email format is wrong!', async(invalidEmail) => {
      const wrongEmail = emailFormat(invalidEmail)

      await expect(wrongEmail).rejects.toThrow(new HttpException(httpStatus.BAD_REQUEST, 'Formato de email inválido'));

    });
});
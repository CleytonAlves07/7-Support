import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { emailNotFound } from '../../../../src/services/validations/email/emailNotFoundCustomer';


describe('emailNotFound', () => {
  it("should show an error if the customer's email is not found", async () => {
    const emailNonExist = 'emailnotfound@perdido.com';

    await expect(emailNotFound(emailNonExist)).rejects.toThrow(new HttpException(httpStatus.NOT_FOUND, 'Email do cliente não encontrado!'));
  });
});

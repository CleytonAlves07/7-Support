import httpStatus from 'http-status';
import { prisma } from '../../../../src/db/prismaClient';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { existingEmailCustomer } from '../../../../src/services/validations/email/existingEmailCustomer';

jest.mock('../../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      findUnique: jest.fn(),
    },
  },
}))


describe('existingEmailCustomer', () => {
  it('should show an error if the customer email already exists', async() => {
    const emailAlreadyExist = jest.spyOn(prisma.customer, "findUnique") as jest.Mock;
    emailAlreadyExist.mockResolvedValue({ where: "emailalreadyexist@ui.com" })
    
    await expect(existingEmailCustomer("emailalreadyexist@ui.com"))
      .rejects
      .toThrow(new HttpException(httpStatus.BAD_REQUEST, 'Email do cliente já cadastrado!'));
  });
});


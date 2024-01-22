import httpStatus from 'http-status';
import HttpException from '../../../../src/middleware/errors/HttpException';
import { prisma } from '../../../../src/db/prismaClient';
import { existingCPFCustomer } from '../../../../src/services/validations/cpf/existingCPFCustomer';

jest.mock('../../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      findUnique: jest.fn(),
    },
  },
}));

describe('existingCPFCustomer', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should show an error if there is already a cpf in the database', async () => {

    const existCPFMock = jest.spyOn(prisma.customer, 'findUnique') as jest.Mock;
    existCPFMock.mockResolvedValue({ cpf: "103.840.770-21"})
    

    await expect(existingCPFCustomer("103.840.770-21")).rejects.toThrow(
      new HttpException(httpStatus.BAD_REQUEST, 'CPF já cadastrado!')
    );
  });
});

import httpStatus from 'http-status';
import { prisma } from '../../../src/db/prismaClient';
import { findByIdCustomerService } from '../../../src/services/find/findByIdCustomerService';
import HttpException from '../../../src/middleware/errors/HttpException';

jest.mock('../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      findUnique: jest.fn(),
    },
  },
}));

const mockFindByIdCustomers = {
		"id": "clrpi6tmb000011v2donuoaiy",
		"name": "Roberval e seu Aval",
		"email": "robervaleseuavalnaocadastrado@enviando.com",
		"cpf": "103.840.770-21"
	}

describe('findByIdCustomerService', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return a customer when it exists', async () => {
    const validId = "clrpi6tmb000011v2donuoaiy";

    (prisma.customer.findUnique as jest.Mock).mockResolvedValueOnce(mockFindByIdCustomers);

    const consult = await findByIdCustomerService(validId)
    
    expect(consult).toEqual(mockFindByIdCustomers);
    expect(prisma.customer.findUnique).toHaveBeenCalledTimes(1);
  });
  it('should return an empty list when it does not exist', async () => {
    const invalidId = 'invalidId';

    (prisma.customer.findUnique as jest.Mock).mockResolvedValueOnce(null);

    
    await expect(findByIdCustomerService(invalidId)).rejects.toThrow(new HttpException(httpStatus.NOT_FOUND, "Cliente não encontrado!"));
    expect(prisma.customer.findUnique).toHaveBeenCalledTimes(1);
  });
});

import { prisma } from '../../../src/db/prismaClient';
import { findAllCustomerService } from '../../../src/services/find/findAllCustomerService';

jest.mock('../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      findMany: jest.fn(),
    },
  },
}));

const mockFindAllCustomers = [
	{
		"id": "clrpi6tmb000011v2donuoaiy",
		"name": "Roberval e seu Aval",
		"email": "robervaleseuavalnaocadastrado@enviando.com",
		"cpf": "103.840.770-21"
	},
	{
		"id": "clrjjriyy0000jg1bl0pl64e3",
		"name": "Cleyton_user_897",
		"email": "cleyton@hotmail.com.br",
		"cpf": "851.794.360-01"
	}
]


describe('findAllCustomerService', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return a list of customers when they exist', async () => {
    
    (prisma.customer.findMany as jest.Mock).mockResolvedValueOnce(mockFindAllCustomers);

    const consult = await findAllCustomerService()
    
    expect(consult).toEqual(mockFindAllCustomers);
    expect(prisma.customer.findMany).toHaveBeenCalledTimes(1);
  });
  it('should return an empty list when it does not exist', async () => {
    
    (prisma.customer.findMany as jest.Mock).mockResolvedValueOnce([]);

    const consult = await findAllCustomerService()
    
    expect(consult).toEqual([]);
    expect(prisma.customer.findMany).toHaveBeenCalledTimes(1);
  });
});

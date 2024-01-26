import httpStatus from 'http-status';
import { prisma } from '../../../src/db/prismaClient';
import HttpException from '../../../src/middleware/errors/HttpException';
import { patchUpdateCustomerService } from '../../../src/services/update/patchUpdateCustomerService';

jest.mock('../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      update: jest.fn(),
    },
  },
}));

describe('patchUpdateCustomerService', () => {

  afterEach(() => jest.clearAllMocks());

  const fakeCustomer = {
  "id": "valid_id",
  "name": "Roberval e seu Aval",
  "email": "robervaleseuavalnaocadastrado@enviando.com",
  "cpf": "103.840.770-21",
  "password": "uma_senha_qualquer",
  "createdAt": new Date(),
  "updatedAt": new Date(),
  }
  const fakeServiceCustomer = {
  "name": "Roberval e seu Aval",
  "email": "robervaleseuavalnaocadastrado@enviando.com",
  "cpf": "103.840.770-21",
  }
  it('should return updated customer data when successful!', async () => {


    const mockUpdate = jest.spyOn(prisma.customer, 'update').mockResolvedValueOnce(fakeCustomer)
    
    const callService = await patchUpdateCustomerService("valid_id", fakeServiceCustomer);

    expect(mockUpdate).toHaveBeenCalledWith({
      where: { id: "valid_id" },
      data: {
        "name": "Roberval e seu Aval",
		    "email": "robervaleseuavalnaocadastrado@enviando.com",
        "cpf": "103.840.770-21",
      },
      select: {
        name: true,
        email: true,
        cpf: true,
      }
    });
    expect(callService.updateCustomer).toEqual(fakeCustomer);
    expect(callService.success).toEqual(true)

  });

  it('should be an error if the customer cannot be update', async() => {
    const invalidId = "invalid_id";
    const mockUpdate = jest.spyOn(prisma.customer, 'update').mockRejectedValueOnce(null);

    await expect(patchUpdateCustomerService(invalidId, mockUpdate)).rejects.toThrow(
      new HttpException(httpStatus.BAD_REQUEST, 'É necessário preencher todos os campos do formulário!')
    );


  });
  
});

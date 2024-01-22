import { prisma } from '../../../src/db/prismaClient';
import * as customerSignUpServiceModule from '../../../src/services/register/customerSignUpService';
import { hashPassword } from '../../../src/services/register/passwordService';

jest.mock('../../../src/db/prismaClient', () => ({
  prisma: {
    customer: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  },
}));
jest.mock('../../../src/services/register/passwordService', () => ({
  hashPassword: jest.fn().mockResolvedValue('hashed_password'),
}));

const signUpCustomerMock = {
  name: "Roberval e seu Aval",
  email: "robervaleseuavalnaocadastrado@enviando.com",
  password: 'PasswordDoRoberval$1',
  cpf: "103.840.770-21",
};


describe('customerSignUpService', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should sign up a customer successfully', async () => {
    (prisma.customer.findUnique as jest.Mock).mockResolvedValue(null);
    (hashPassword as jest.Mock).mockResolvedValue('hashed_password');

    const cutomerServiceSpy = jest.spyOn(customerSignUpServiceModule, 'customerSignUpService')
    const cutomerServiceSuccess = await customerSignUpServiceModule.customerSignUpService(signUpCustomerMock)
    
    expect(prisma.customer.findUnique).toHaveBeenCalledWith({ where: { email: signUpCustomerMock.email } });
    expect(cutomerServiceSpy).toHaveBeenCalled();
    expect(cutomerServiceSuccess).toEqual({ success: true });
    expect(prisma.customer.create).toHaveBeenCalledWith({
      data: {
        cpf: "103.840.770-21",
        email: "robervaleseuavalnaocadastrado@enviando.com",
        name: "Roberval e seu Aval",
        password: 'hashed_password',
      },
    });

  });
});

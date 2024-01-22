import { NextFunction, Request, Response } from 'express';
import * as customerSignUpServiceModule from '../../src/services/register/customerSignUpService';
import { customerSignUpController } from '../../src/controllers/register/customerSignUpController';
import httpStatus from 'http-status';


describe('customerSignUpController', () => {
  it('should return when the customer is successful in signing up!', async () => {
    const req = {
      body: {
        name: "Roberval e seu Aval",
        email: "robervaleseuavalvalval1@enviando.com",
        password: 'PasswordDoRoberval$1',
        cpf: "103.840.770-21",
      }
    } as Request;
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

    const next = jest.fn() as NextFunction;

    const mockCustomer = jest.spyOn(customerSignUpServiceModule, 'customerSignUpService').mockResolvedValue({ success: true })

    await customerSignUpController(req, res, next);
    expect(mockCustomer).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(httpStatus.CREATED)
    expect(res.json).toHaveBeenCalledWith({ message: 'Cliente criado com sucesso!', success: true })

    });
});

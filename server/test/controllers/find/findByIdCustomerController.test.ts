import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findByIdCustomerController } from '../../../src/controllers/find/findByIdCustomerController';
import * as findByIdCustomerServiceModule from '../../../src/services/find/findByIdCustomerService';

jest.mock('../../../src/services/find/findByIdCustomerService')

describe('findByIdCustomerController', () => {

  afterEach(() => jest.clearAllMocks());

  it('should return customer data when successful!', async () => {
    const customerId = 'validID';
    const mockCustomerId = {
		"id": customerId,
		"name": "Roberval e seu Aval",
		"email": "robervaleseuavalnaocadastrado@enviando.com",
		"cpf": "103.840.770-21"
	}
    
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

    const req = { params: { id: customerId }} as unknown as Request;

    const next = jest.fn() as NextFunction;

  
    jest.spyOn(findByIdCustomerServiceModule, 'findByIdCustomerService').mockResolvedValue( mockCustomerId )

    await findByIdCustomerController(req, res, next);
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
    expect(res.json).toHaveBeenCalledWith( mockCustomerId )

  });

  it('should return 404 if customer is not found', async () => {
    const invalidId = 'invalidId';

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

    const req = { params: { id: invalidId } } as unknown as Request;

    const next = jest.fn() as NextFunction;

    jest.spyOn(findByIdCustomerServiceModule, 'findByIdCustomerService').mockResolvedValue(null);

    await findByIdCustomerController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND);
    expect(res.json).toHaveBeenCalledWith({ message: 'Cliente não encontrado!' });
    expect(next).not.toHaveBeenCalled();
    
  });
  
});

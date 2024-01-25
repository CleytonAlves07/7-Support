import { NextFunction, Request, Response } from 'express';
import * as findAllCustomerServiceModule from '../../../src/services/find/findAllCustomerService'
import httpStatus from 'http-status';
import { findAllCustomerController } from '../../../src/controllers/find/findAllCustomerController';

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

describe('findAllCustomerController.test', () => {

  afterEach(() => jest.clearAllMocks());

  it('should return a list of customers when successful!', async () => {
    
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

    const req = jest.fn()as unknown as Request;

    const next = jest.fn() as NextFunction;
  
    jest.spyOn(findAllCustomerServiceModule, 'findAllCustomerService').mockResolvedValue( mockFindAllCustomers )

    await findAllCustomerController(req, res, next);
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
    expect(res.json).toHaveBeenCalledWith( mockFindAllCustomers )

  });
  it('should return a empty list of customers when the service return a empty list!', async () => {
    
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

    const req = jest.fn()as unknown as Request;

    const next = jest.fn() as NextFunction;
  
    jest.spyOn(findAllCustomerServiceModule, 'findAllCustomerService').mockResolvedValue( [] )

    await findAllCustomerController(req, res, next);
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
    expect(res.json).toHaveBeenCalledWith( [] )

  });
});

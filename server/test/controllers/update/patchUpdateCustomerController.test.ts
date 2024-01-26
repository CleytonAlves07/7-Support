// import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import * as patchUpdateCustomerServiceModule from '../../../src/services/update/patchUpdateCustomerService';
// import { patchUpdateCustomerController } from '../../../src/controllers/update/patchUpdateCustomerController';

// jest.mock('../../../src/services/update/patchUpdateCustomerService');


// describe('patchUpdateCustomerController', () => {

//   afterEach(() => jest.clearAllMocks());

//   it('should return updated customer data when successful!', async () => {
//     const customerId = 'validID';
//     const mockCustomerId = {
// 		"id": customerId,
// 		"name": "Roberval e seu Aval",
// 		"email": "robervaleseuavalnaocadastrado@enviando.com",
// 		"cpf": "103.840.770-21"
// 	}
    
//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

//     const req = { params: { id: customerId }} as unknown as Request;

//     const next = jest.fn() as NextFunction;

  
//     jest.spyOn(patchUpdateCustomerServiceModule, 'patchUpdateCustomerService')
//       .mockResolvedValueOnce({ message: "Cliente atualizado com sucesso!", updateCustomer: mockCustomerId, success: true })

//     await patchUpdateCustomerController(req, res, next);
//     expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
//     expect(res.json).toHaveBeenCalledWith( { message: "Cliente atualizado com sucesso!", updateCustomer:mockCustomerId, success: true } )

//   });

//   it('should return 404 if customer is not found', async () => {
//     const invalidId = 'invalidId';

//     const res = { status: jest.fn().mockReturnThis(), json: jest.fn() } as unknown as Response;

//     const req = { params: { id: invalidId } } as unknown as Request;

//     const next = jest.fn() as NextFunction;

//     jest.spyOn(patchUpdateCustomerServiceModule, 'patchUpdateCustomerService').mockResolvedValue(null);

//     await patchUpdateCustomerController(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Cliente não encontrado!' });
//     expect(next).not.toHaveBeenCalled();
    
//   });
  
// });

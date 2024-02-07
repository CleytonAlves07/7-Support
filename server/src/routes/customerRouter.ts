import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { findByIdCustomerController } from '../controllers/find/findByIdCustomerController';
import { findAllCustomerController } from '../controllers/find/findAllCustomerController';
import { patchUpdateCustomerController } from '../controllers/update/patchUpdateCustomerController';
import { putUpdateCustomerController } from '../controllers/update/putUpdateCustomerController';
import { loginCustomerController } from '../controllers/login/loginCustomerController';



const customerRouter = Router()

customerRouter.post('/login/customer', expressAsyncWrap(loginCustomerController));

customerRouter.get('/customer/:id', expressAsyncWrap(findByIdCustomerController));

customerRouter.put('/customer/:id', expressAsyncWrap(putUpdateCustomerController));

customerRouter.patch('/customer/:id', expressAsyncWrap(patchUpdateCustomerController));

customerRouter.get('/customers', expressAsyncWrap(findAllCustomerController));


export { customerRouter }
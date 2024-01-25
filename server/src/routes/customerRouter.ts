import { Router } from 'express';
import { customerSignUpController } from '../controllers/register/customerSignUpController';
import expressAsyncWrap from 'express-async-wrap'
import { findByIdCustomerController } from '../controllers/find/findByIdCustomerController';
import { findAllCustomerController } from '../controllers/find/findAllCustomerController';
import { patchUpdateCustomerController } from '../controllers/update/patchUpdateCustomerController';
import { putUpdateCustomerController } from '../controllers/update/putUpdateCustomerController';



const customerRouter = Router()

customerRouter.post('/register/customer', expressAsyncWrap(customerSignUpController));

customerRouter.get('/customer/:id', expressAsyncWrap(findByIdCustomerController));

customerRouter.put('/customer/:id', expressAsyncWrap(putUpdateCustomerController));

customerRouter.patch('/customer/:id', expressAsyncWrap(patchUpdateCustomerController));

customerRouter.get('/customers', expressAsyncWrap(findAllCustomerController));


export { customerRouter }
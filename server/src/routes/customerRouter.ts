import { Router } from 'express';
import { customerSignUpController } from '../controllers/register/customerSignUpController';
import expressAsyncWrap from 'express-async-wrap'



const customerRouter = Router()

customerRouter.post('/register/customer', expressAsyncWrap(customerSignUpController))


export { customerRouter }
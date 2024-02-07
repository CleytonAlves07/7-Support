import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { signUpController } from '../controllers/register/signUpController';


const registerRouter = Router()

registerRouter.post('/register', expressAsyncWrap(signUpController));


export  {
  registerRouter
}
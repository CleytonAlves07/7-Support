import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { signUpController } from '../controllers/register/signUpController';
import { loginController } from '../controllers/login/loginController';


const authenticationRouter = Router()

authenticationRouter.post('/register', expressAsyncWrap(signUpController));

authenticationRouter.post('/login', expressAsyncWrap(loginController));


export  {
  authenticationRouter
}
import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { emailNotFound } from '../validations/email/emailNotFoundCustomer';
import { existUser } from '../validations/existUser';
import { invalidPassword } from '../validations/password/invalidPassword';
import { passwordFormat } from '../validations/password/passwordFormat';


export interface SignInUser {
  email: string;
  password: string;
}

export const loginService = async ({ email, password }: SignInUser ) => {
  await Promise.all([
      emailEmpty(email),
      emailFormat(email),
      passwordFormat(password),
      invalidPassword(email, password),
  ]);

  const user = await existUser(email)


  return { success: true, user}
  
}


import { emailEmpty } from '../validations/email/emailEmpty';
import { emailFormat } from '../validations/email/emailFormat';
import { emailNotFound } from '../validations/email/emailNotFoundCustomer';
import { existUser } from '../validations/existCustomer';
import { invalidPassword } from '../validations/password/invalidPassword';
import { passwordFormat } from '../validations/password/passwordFormat';


export interface SignInUser {
  email: string;
  password: string;
}

export const loginCustomerService = async ({ email, password }: SignInUser ) => {
  await Promise.all([
      emailEmpty(email),
      emailFormat(email),
      emailNotFound(email),
      passwordFormat(password),
      invalidPassword(email, password),
  ]);

  const customer = await existUser(email)


  return { success: true, customer}
  
}


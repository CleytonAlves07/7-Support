import httpStatus from 'http-status';
import HttpException from '../../../middleware/errors/HttpException';


export const cpfValidate = async (cpf: any): Promise<void> => {
    
  let cpfWhithoutDigit = cpf.replace(/\D+/g, '')
  let comparisonDigit = cpfWhithoutDigit.slice(-2)
  cpfWhithoutDigit = cpfWhithoutDigit.slice(0,9)

  let initialValue = 10
  let acc = 0
  for(let num of cpfWhithoutDigit){
      num = Number(num)
      acc += num * initialValue
      initialValue -= 1
  }
  let digit1 = 11 - (acc % 11)

  if (digit1 > 9) digit1 = 0;

  let includesDigito1 = cpfWhithoutDigit.concat(digit1)

  let acc2 = 0
  initialValue = 11
  for(let num of includesDigito1) {
    acc2 += num * initialValue
    initialValue -= 1
  }

  let digit2 = 11 - (acc2 % 11)

  if (digit2 > 9) digit2 = 0;
  let finalDigit = digit1.toString() + digit2.toString()

  let isValid = finalDigit === comparisonDigit

  if(!isValid) throw new HttpException(httpStatus.BAD_REQUEST, 'CPF inválido')
  
}

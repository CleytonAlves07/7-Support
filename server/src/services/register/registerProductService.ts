import httpStatus from 'http-status';
import { prisma } from '../../db/prismaClient';
import HttpException from '../../middleware/errors/HttpException';
import { createProduct } from '../interface/IProduct';
import { pascalRegisterProduct } from '../validations/register/product/pascalRegisterProduct';
import { pascalRegisterDescription } from '../validations/register/product/pascalRegisterDescription';
import { productMinCharacters } from '../validations/register/product/productMinCharacters';
import { descriptionMinCharacters } from '../validations/register/product/descriptionMinCharacters';
import { productMaxCharacters } from '../validations/register/product/productMaxCharacters';
import { descriptionMaxCharacters } from '../validations/register/product/descriptionMaxCharacters';
import { amountFormat } from '../validations/register/amountFormat';


export const registerProductService = async ({ product, description, amount }: createProduct ) => {
  await Promise.all([
    pascalRegisterProduct(product),
    productMinCharacters(product),
    productMaxCharacters(product),
    pascalRegisterDescription(description),
    descriptionMinCharacters(description),
    descriptionMaxCharacters(description),
    amountFormat(amount),
  ]);

  try {
    await prisma.product.create({
      data: {
        product,
        amount,
        description,
      }
    })
  } catch (error) {    
    console.log(error);
    throw new HttpException(httpStatus.BAD_REQUEST, 'Produto não cadastrado')
  }

  return { success: true }
}
      
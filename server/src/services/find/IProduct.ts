import { Decimal } from '@prisma/client/runtime/library';

export interface findProduct {
  id:           string,
  product:      string,
  value:        string,
  description:  string,
}

export interface createProduct {
  product:      string,
  value:        string,
  description:  string,
}
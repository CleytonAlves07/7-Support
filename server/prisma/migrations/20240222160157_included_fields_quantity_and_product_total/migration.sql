/*
  Warnings:

  - Added the required column `productTotal` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "productTotal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

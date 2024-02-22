/*
  Warnings:

  - You are about to drop the column `productTotal` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "productTotal",
DROP COLUMN "quantity";

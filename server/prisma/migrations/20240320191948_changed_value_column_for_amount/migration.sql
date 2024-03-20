/*
  Warnings:

  - You are about to drop the column `value` on the `maintenances` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `products` table. All the data in the column will be lost.
  - Added the required column `amount` to the `maintenances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "maintenances" DROP COLUMN "value",
ADD COLUMN     "amount" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "value",
ADD COLUMN     "amount" TEXT NOT NULL;

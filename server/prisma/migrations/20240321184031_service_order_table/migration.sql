-- CreateTable
CREATE TABLE "service_orders" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "mechanic_id" TEXT NOT NULL,
    "defect" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ServiceOrderProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ServiceOrderService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceOrderProduct_AB_unique" ON "_ServiceOrderProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceOrderProduct_B_index" ON "_ServiceOrderProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceOrderService_AB_unique" ON "_ServiceOrderService"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceOrderService_B_index" ON "_ServiceOrderService"("B");

-- AddForeignKey
ALTER TABLE "_ServiceOrderProduct" ADD CONSTRAINT "_ServiceOrderProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceOrderProduct" ADD CONSTRAINT "_ServiceOrderProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "service_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceOrderService" ADD CONSTRAINT "_ServiceOrderService_A_fkey" FOREIGN KEY ("A") REFERENCES "maintenances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceOrderService" ADD CONSTRAINT "_ServiceOrderService_B_fkey" FOREIGN KEY ("B") REFERENCES "service_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

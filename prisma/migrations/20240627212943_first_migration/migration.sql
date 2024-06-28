-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "productThumbnail" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" INTEGER NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_productTitle_key" ON "product"("productTitle");

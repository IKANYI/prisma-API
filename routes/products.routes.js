import { Router } from 'express';
import { PrismaClient } from '@prisma/client'


const router = Router();
const prisma = new PrismaClient()

router.get('/', async(req, res) => {
  try {
  const products = await prisma.product.findMany();
  res.status(200).json( products)
  }catch(e){
    res.status(500).json({success: false, message:e.message});
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
  const sproduct = await prisma.product.findFirst({
    where: {id: id},
    
  })
  res.status(200).json(sproduct)
  }catch(e){
    res.status(500).json({success: false, message:e.message});
  }
})

  router.post('/', async(req, res) => {
    try {
      const { productThumbnail, productTitle ,productDescription, productCost, onOffer  } = req.body;
      const newProduct = await prisma.product.create({
        data: { 
            productThumbnail: productThumbnail, 
            productTitle: productTitle,
            productDescription: productDescription,
            productCost: productCost,
            onOffer: onOffer
          }
      })
      res.status(200).json(newProduct)
    }catch (e){
      res.status(500).json({success:false ,message: e.message});
    }
  })

  router.patch('/:id', async(req, res) => {
    const id = req.params.id
    const { productThumbnail, productTitle ,productDescription, productCost, onOffer  } = req.body;
    try {
      let updateProduct;
      if(productThumbnail){
        updateProduct = await prisma.product.update({
          where:{id:id},
          data:{productThumbnail:productThumbnail}
        })
      }
      if(productTitle){
        updateProduct = await prisma.product.update({
          where:{id:id},
          data:{productTitle:productTitle}
          })
      }
      if(productDescription){
        updateProduct = await prisma.product.update({
          where:{id:id},
          data:{productDescription:productDescription}
        })
      }
      if(productCost){
        updateProduct = await prisma.product.update({
          where:{id:id},
          data:{productCost:productCost}
        })
      }
      if(onOffer){
        updateProduct = await prisma.product.update({
          where:{id:id},
          data:{onOffer:onOffer}
        })
      }
    
    res.status(200).json(updateProduct)
    }
    catch(e){
      res.status(500).json({success:false ,message: e.message});
    }
  })

  router.delete('/:id',async (req, res) => {
     const id = req.params.id;
    try {
      const delproduct = await prisma.product.delete({
        where: {id: id},
      });
      res.status(200).json(delproduct);
    }catch (e){
      res.status(500).json({success:false,message:e.message});
    }
  })

export default router;
import express from 'express';
import productRouter from './routes/products.routes.js';

app.use("/produducts",productRouter);
const app = express();

app.listen(3050,() => {
  console.log('App running on port 3050');
})
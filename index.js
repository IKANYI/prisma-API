import express from 'express';
import productRouter from './routes/products.routes.js';
import { config } from 'dotenv';

config();

const app = express();
app.use(express.json());
app.use("/products",productRouter);


app.listen(3050,() => {
  console.log('App running on port 3050');
})
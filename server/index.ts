import express from 'express';
import dotenv from 'dotenv';
import productsRoutes from './routes/products';

/* CONFIGURATION */
const app = express();
dotenv.config();

/* ROUTES */
app.use('/products', productsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

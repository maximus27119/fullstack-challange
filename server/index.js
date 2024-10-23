import express from 'express';
import dotenv from 'dotenv'
import ordersRoutes from './routes/orders.js';

dotenv.config({ path: '../.env' })

const PORT = process.env.SERVER_PORT || 4000;
const app = express();
app.use(express.json());

app.use(ordersRoutes);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on PORT = ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
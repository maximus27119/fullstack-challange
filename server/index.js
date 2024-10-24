import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import ordersRoutes from './routes/orders.js';

const PORT = process.env.SERVER_PORT || 3999;
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
}));

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
import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import router from './routes/index.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import "express-async-errors";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
});
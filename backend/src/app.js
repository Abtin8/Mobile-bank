import express from 'express';
import authRoutes from './routes/auth.routes.js';
import accountRoutes from './routes/account.routes.js';
import { errorHandler } from './middlewares/errorhandler.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`, req.body);
  next();
});

app.use('/auth', authRoutes);
app.use('/account', accountRoutes);

app.use(errorHandler);

export default app;
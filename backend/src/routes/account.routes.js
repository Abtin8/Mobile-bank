import express from 'express';
import AccountController from '../controllers/account.controller.js';

const router = express.Router();

router.get('/dashboard', AccountController.getDashboard);

router.post('/deposit', AccountController.deposit);

router.post('/withdraw', AccountController.withdraw);

export default router;
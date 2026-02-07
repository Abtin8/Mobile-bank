import express from 'express';
import AccountController from '../controllers/account.controller.js';

const router = express.Router();

// GET /account/dashboard
router.get('/dashboard', AccountController.getDashboard);

// POST /account/deposit
router.post('/deposit', AccountController.deposit);

// POST /account/withdraw
router.post('/withdraw', AccountController.withdraw);

export default router;
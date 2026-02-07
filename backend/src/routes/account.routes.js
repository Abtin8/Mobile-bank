import express from 'express';
import AccountService from '../services/AccountService.js';
import AccountController from '../controllers/account.controller.js';
import { authGuard } from '../middlewares/auth.guard.js';

const router = express.Router();

router.post('/deposit', async (req, res) => {
    const { userId, amount } = req.body;
    const result = await AccountService.deposit(userId, Number(amount));
    if (!result.success) return res.status(400).json(result);
    res.json(result);
});

router.post('/withdraw', async (req, res) => {
    const { userId, amount } = req.body;
    const result = await AccountService.withdraw(userId, Number(amount));
    if (!result.success) return res.status(400).json(result);
    res.json(result);
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const account = await AccountService.getAccountInfo(userId);
    res.json(account);
});

router.put('/change-password', async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;
    const result = await AccountService.changePassword(userId, currentPassword, newPassword);
    if (!result.success) return res.status(400).json(result);
    res.json(result);
});

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;
    const result = await AccountService.deleteAccount(userId);
    res.json(result);
});

router.post('/deposit', authGuard, AccountController.deposit);
router.post('/withdraw', authGuard, AccountController.withdraw);
router.get('/:userId', authGuard, AccountController.getAccountInfo);
router.put('/change-password', authGuard, AccountController.changePassword);
router.delete('/:userId', authGuard, AccountController.deleteAccount);

export default router;
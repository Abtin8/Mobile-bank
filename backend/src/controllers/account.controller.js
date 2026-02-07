import AccountService from '../services/AccountService.js';

class AccountController {
    static async deposit(req, res, next) {
        try {
            const { userId, amount } = req.body;
            const result = await AccountService.deposit(userId, Number(amount));
            if (!result.success) return res.status(400).json(result);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }

    static async withdraw(req, res, next) {
        try {
            const { userId, amount } = req.body;
            const result = await AccountService.withdraw(userId, Number(amount));
            if (!result.success) return res.status(400).json(result);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }

    static async getAccountInfo(req, res, next) {
        try {
            const { userId } = req.params;
            const account = await AccountService.getAccountInfo(userId);
            res.json(account);
        } catch (err) {
            next(err);
        }
    }

    static async changePassword(req, res, next) {
        try {
            const { userId, currentPassword, newPassword } = req.body;
            const result = await AccountService.changePassword(userId, currentPassword, newPassword);
            if (!result.success) return res.status(400).json(result);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }

    static async deleteAccount(req, res, next) {
        try {
            const { userId } = req.params;
            const result = await AccountService.deleteAccount(userId);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }
}

export default AccountController;
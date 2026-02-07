import AccountService from '../services/AccountService.js';

const getDashboard = async (req, res) => {
    try {
        const userId = req.user?.id || req.body.userId; // فعلاً ساده

        const result = await AccountService.getDashboard(userId);

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.json(result);
    } catch (err) {
        console.error('DASHBOARD ERROR:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const deposit = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        const result = await AccountService.deposit(userId, amount);

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.json(result);
    } catch (err) {
        console.error('DEPOSIT ERROR:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const withdraw = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        const result = await AccountService.withdraw(userId, amount);

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.json(result);
    } catch (err) {
        console.error('WITHDRAW ERROR:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export default {
    getDashboard,
    deposit,
    withdraw,
};
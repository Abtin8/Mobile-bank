import AuthService from '../services/AuthService.js';

const signUp = async (req, res) => {
    try {
        const { fullName, username, nationalId, password, confirmPassword } = req.body;

        const result = await AuthService.register({
            fullName,
            username,
            nationalId,
            password,
            confirmPassword,
        });

        if (!result.success) {
            return res.status(400).json(result);
        }

        res.status(201).json(result);
    } catch (err) {
        console.error('SIGNUP ERROR:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const login = async (req, res) => {
    try {
        const { nationalId, password } = req.body;

        const result = await AuthService.login({ nationalId, password });

        if (!result.success) {
            return res.status(401).json(result);
        }

        res.json(result);
    } catch (err) {
        console.error('LOGIN ERROR:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export default {
    signUp,
    login,
};
import AuthService from '../services/AuthService.js';

class AuthController {
    static async signUp(req, res, next) {
        try {
            const { fullName, username, nationalId, password, confirmPassword } = req.body;
            const result = await AuthService.register({ fullName, username, nationalId, password, confirmPassword });

            if (!result.success) return res.status(400).json(result);

            res.json(result);
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { nationalId, password } = req.body;
            const result = await AuthService.login({ nationalId, password });

            if (!result.success) return res.status(400).json(result);

            res.json(result);
        } catch (err) {
            next(err);
        }
    }
}

export default AuthController;
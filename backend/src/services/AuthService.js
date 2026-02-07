import pool from '../config/db.js';
import { generateCardNumber } from '../utils/cardNumber.generator.js';
import { validateSignUp } from '../utils/validatores.js';

class AuthService {
    static async register({ fullName, username, nationalId, password, confirmPassword }) {
        const errors = validateSignUp({ fullName, username, nationalId, password, confirmPassword });
        if (errors.length > 0) {
            return { success: false, errors };
        }

        const [existing] = await pool.query(
            'SELECT id FROM users WHERE username = ? OR national_id = ?',
            [username, nationalId]
        );
        if (existing.length > 0) {
            return { success: false, errors: ['username یا nationalId قبلا ثبت شده است.'] };
        }

        const cardNumber = await generateCardNumber();

        await pool.query(
            `INSERT INTO users (full_name, username, national_id, card_number, password, balance)
        VALUES (?, ?, ?, ?, ?, 0)`,
            [fullName, username, nationalId, cardNumber, password]
        );

        return { success: true, cardNumber };
    }

    static async login({ nationalId, password }) {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE national_id = ?',
            [nationalId]
        );

        if (rows.length === 0) {
            return { success: false, error: 'کاربری با این کد ملی وجود ندارد.' };
        }

        const user = rows[0];

        if (user.password !== password) {
            return { success: false, error: 'رمز عبور اشتباه است.' };
        }

        return { success: true, user };
    }
}

export default AuthService;
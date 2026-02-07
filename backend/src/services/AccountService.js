import pool from '../config/db.js';

class AccountService {
    static async deposit(userId, amount) {
        if (amount <= 0) return { success: false, error: 'مبلغ باید مثبت باشد.' };

        await pool.query(
            'UPDATE users SET balance = balance + ? WHERE id = ?',
            [amount, userId]
        );

        const [rows] = await pool.query('SELECT balance FROM users WHERE id = ?', [userId]);
        return { success: true, balance: rows[0].balance };
    }

    static async withdraw(userId, amount) {
        if (amount <= 0) return { success: false, error: 'مبلغ باید مثبت باشد.' };

        const [rows] = await pool.query('SELECT balance FROM users WHERE id = ?', [userId]);
        const balance = rows[0].balance;

        if (amount > balance) return { success: false, error: 'موجودی کافی نیست.' };

        await pool.query(
            'UPDATE users SET balance = balance - ? WHERE id = ?',
            [amount, userId]
        );

        return { success: true, balance: balance - amount };
    }

    static async getAccountInfo(userId) {
        const [rows] = await pool.query(
            'SELECT full_name, username, national_id, card_number, balance FROM users WHERE id = ?',
            [userId]
        );
        return rows[0];
    }

    static async changePassword(userId, currentPassword, newPassword) {
        const [rows] = await pool.query('SELECT password FROM users WHERE id = ?', [userId]);
        if (rows[0].password !== currentPassword) {
            return { success: false, error: 'رمز فعلی اشتباه است.' };
        }

        await pool.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, userId]);
        return { success: true };
    }

    static async deleteAccount(userId) {
        await pool.query('DELETE FROM users WHERE id = ?', [userId]);
        return { success: true };
    }
}

export default AccountService;
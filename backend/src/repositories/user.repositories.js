import pool from '../config/db.js';

class UserRepository {
    static async create({ fullName, username, nationalId, cardNumber, password }) {
        const [result] = await pool.query(
            `INSERT INTO users (full_name, username, national_id, card_number, password, balance)
        VALUES (?, ?, ?, ?, ?, 0)`,
            [fullName, username, nationalId, cardNumber, password]
        );
        return result.insertId;
    }

    static async findByUsernameOrNationalId(username, nationalId) {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE username = ? OR national_id = ?',
            [username, nationalId]
        );
        return rows[0] || null;
    }

    static async findByNationalId(nationalId) {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE national_id = ?',
            [nationalId]
        );
        return rows[0] || null;
    }

    static async findById(userId) {
        const [rows] = await pool.query(
            'SELECT * FROM users WHERE id = ?',
            [userId]
        );
        return rows[0] || null;
    }

    static async updatePassword(userId, newPassword) {
        await pool.query(
            'UPDATE users SET password = ? WHERE id = ?',
            [newPassword, userId]
        );
    }

    static async updateBalance(userId, newBalance) {
        await pool.query(
            'UPDATE users SET balance = ? WHERE id = ?',
            [newBalance, userId]
        );
    }

    static async delete(userId) {
        await pool.query('DELETE FROM users WHERE id = ?', [userId]);
    }
}

export default UserRepository;
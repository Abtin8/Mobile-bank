import pool from '../config/db.js';

export const generateCardNumber = async () => {
    let cardNumber;
    let exists = true;

while (exists) {
    cardNumber = '';
    for (let i = 0; i < 16; i++) {
      cardNumber += Math.floor(Math.random() * 10);
    }

    const [rows] = await pool.query(
        'SELECT id FROM users WHERE card_number = ?',
        [cardNumber]
    );
    exists = rows.length > 0;
    }

    return cardNumber;
};
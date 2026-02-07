import ApiClient from './ApiClient.js';

class AccountManager {
    static async deposit(userId, amount) {
        try {
            return await ApiClient.post('/account/deposit', { userId, amount });
        } catch (err) {
            return { success: false, error: err.message };
        }
    }

    static async withdraw(userId, amount) {
        try {
            return await ApiClient.post('/account/withdraw', { userId, amount });
        } catch (err) {
            return { success: false, error: err.message };
        }
    }

    static async getAccountInfo(userId) {
        try {
            return await ApiClient.get(`/account/${userId}`);
        } catch (err) {
            return { success: false, error: err.message };
        }
    }

    static async changePassword(userId, currentPassword, newPassword) {
        try {
            return await ApiClient.put('/account/change-password', {
                userId,
                currentPassword,
                newPassword,
            });
        } catch (err) {
            return { success: false, error: err.message };
        }
    }

    static async deleteAccount(userId) {
        try {
            return await ApiClient.delete(`/account/${userId}`);
        } catch (err) {
            return { success: false, error: err.message };
        }
    }
}

export default AccountManager;
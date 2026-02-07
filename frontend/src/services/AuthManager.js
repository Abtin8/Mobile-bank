import ApiClient from './ApiClient.js';

class AuthManager {
    static async signup(data) {
        try {
            const res = await ApiClient.post('/auth/signup', data);
            return res;
        } catch (err) {
            return { success: false, error: err.message };
        }
    }

    static async login(data) {
        try {
            const res = await ApiClient.post('/auth/login', data);
            return res;
        } catch (err) {
            return { success: false, error: err.message };
        }
    }
}

export default AuthManager;
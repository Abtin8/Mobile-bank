import { ApiClient } from './ApiClient.js';

export const AccountManager = {
    getDashboard: () => ApiClient.get('/account/dashboard'),
    deposit: (data) => ApiClient.post('/account/deposit', data),
    withdraw: (data) => ApiClient.post('/account/withdraw', data),
};
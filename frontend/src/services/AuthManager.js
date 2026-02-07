import { ApiClient } from './ApiClient.js';

export const AuthManager = {
    signup: (data) => ApiClient.post('/auth/signup', data),
    login: (data) => ApiClient.post('/auth/login', data),
};
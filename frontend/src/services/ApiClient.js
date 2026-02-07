const BASE_URL = 'http://localhost:3000';

export const ApiClient = {
    get: async (path) => {
        const res = await fetch(BASE_URL + path, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        return res.json();
    },

    post: async (path, data) => {
        const res = await fetch(BASE_URL + path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.json();
    },
};
const API_BASE = 'http://localhost:3006';

class ApiClient {
    static async get(endpoint) {
        const res = await fetch(`${API_BASE}${endpoint}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    }

    static async post(endpoint, body) {
        const res = await fetch(`${API_BASE}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    }

    static async put(endpoint, body) {
        const res = await fetch(`${API_BASE}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    }

    static async delete(endpoint) {
        const res = await fetch(`${API_BASE}${endpoint}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    }
}

export default ApiClient;
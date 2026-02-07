import { Modal } from './components/modal.js';
import { AuthManager } from './services/AuthManager.js';
import { AccountManager } from './services/AccountManager.js';

const modal = new Modal();

const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            fullName: e.target.fullName.value,
            username: e.target.username.value,
            nationalId: e.target.nationalId.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value,
        };

        const res = await AuthManager.signup(data);
        if (res.success) {
            modal.show(`ثبت‌نام موفق! شماره کارت شما: ${res.cardNumber}`);
        } else {
            modal.show(`خطا: ${res.error || res.errors.join(', ')}`);
        }
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = {
            nationalId: e.target.nationalId.value,
            password: e.target.password.value,
        };

        const res = await AuthManager.login(data);
        if (res.success) {
            localStorage.setItem('userId', res.user.id);
            window.location.href = '/src/pages/dashboard.html';
        } else {
            modal.show(`خطا: ${res.error}`);
        }
    });
}

const depositForm = document.getElementById('depositForm');
if (depositForm) {
    depositForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const amount = Number(e.target.amount.value);
        const res = await AccountManager.deposit(userId, amount);
        if (res.success) {
            modal.show(`واریز موفق! موجودی جدید: ${res.balance}`);
        } else {
            modal.show(`خطا: ${res.error}`);
        }
    });
}

const withdrawForm = document.getElementById('withdrawForm');
if (withdrawForm) {
    withdrawForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const amount = Number(e.target.amount.value);
        const res = await AccountManager.withdraw(userId, amount);
        if (res.success) {
            modal.show(`برداشت موفق! موجودی جدید: ${res.balance}`);
        } else {
            modal.show(`خطا: ${res.error}`);
        }
    });
}

const accountInfoEl = document.getElementById('accountInfo');
if (accountInfoEl) {
    const userId = localStorage.getItem('userId');
    const loadInfo = async () => {
        const res = await AccountManager.getAccountInfo(userId);
        if (res.success !== false) {
            accountInfoEl.innerHTML = `
        نام: ${res.full_name} <br>
        نام کاربری: ${res.username} <br>
        کد ملی: ${res.national_id} <br>
        شماره کارت: ${res.card_number} <br>
        موجودی: ${res.balance}
        `;
        }
    };
    loadInfo();
}
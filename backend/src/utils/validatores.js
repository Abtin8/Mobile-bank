export const validateSignUp = ({ fullName, username, nationalId, password, confirmPassword }) => {
    const errors = [];

    if (!fullName || !username || !nationalId || !password || !confirmPassword) {
        errors.push('تمام فیلدها باید پر شوند.');
    }

    if (password !== confirmPassword) {
        errors.push('رمز عبور و تکرار آن برابر نیستند.');
    }

    if (!/^\d{10}$/.test(nationalId)) {
        errors.push('کد ملی باید دقیقا 10 رقم باشد.');
    }

    if (password.length < 8) {
        errors.push('رمز عبور حداقل باید 8 کاراکتر باشد.');
    }

    return errors;
};
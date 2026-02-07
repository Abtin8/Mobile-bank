export const authGuard = (req, res, next) => {
    if (!req.body.userId) {
        return res.status(401).json({ error: 'دسترسی غیرمجاز: کاربر لاگین نکرده' });
    }

    next();
};
import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.APP_PORT || 3000;

await connectDB()

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
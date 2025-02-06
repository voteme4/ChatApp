import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

/* app.get('/', (req, res) => {
    // root route http://localhost:${PORT}
    res.send('Sup bro!');
}); */

app.use(express.json()); // middleware

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}!`);
});
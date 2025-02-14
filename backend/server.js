import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import messageRoutes from './routes/message.routes.js';
//import conversationRoutes from './routes/conversation.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

dotenv.config();

/* app.get('/', (req, res) => {
    // root route http://localhost:${PORT}
    res.send('Sup bro!');
}); */

app.use(express.json()); // middleware
app.use(cookieParser()); // middleware

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
//app.use('/api/conversations', conversationRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}!`);
});
import express from 'express';
import cors from 'cors';
import connectToMongoDB from './db/db.js';

import authRouter from './routes/auth.js';
import noteRouter from './routes/note.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter);

// Connect to MongoDB immediately
connectToMongoDB();

// ✅ Don't call app.listen
export default app;

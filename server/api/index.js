import express from 'express';
import cors from 'cors';
import connectToMongoDB from '../db/db.js';

import authRouter from '../routes/auth.js';
import noteRouter from '../routes/note.js';
import dotenv from "dotenv";
import serverless from 'serverless-http';  // ✅ Needed for Vercel

dotenv.config();
connectToMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/note', noteRouter);

// ❌ Remove app.listen entirely

export const handler = serverless(app);

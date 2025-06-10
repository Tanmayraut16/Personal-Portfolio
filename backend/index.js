// index.js
import './config.js'; // must be first to load .env ✅

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './contact.js';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

app.use(bodyParser.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

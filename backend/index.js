import './config.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './contact.js';

const app = express();

const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';

// ✅ Full CORS support
app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(bodyParser.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

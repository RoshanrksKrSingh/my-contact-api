import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://my-contact-api-seven.vercel.app',
    'https://studio.apicur.io',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));  // <-- This already enables CORS and handles OPTIONS requests.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remove or comment out the following if present:
// app.options('*', cors(corsOptions));
// app.options('/*', cors(corsOptions));

app.use('/api', contactRoutes);
app.use('/api-docs', serve, setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Contact API is running ✅');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger Docs at http://localhost:${PORT}/api-docs`);
});

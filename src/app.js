import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// Allow requests from Netlify + localhost
app.use(cors({
  origin: [
    'http://localhost:5173',                 // local dev
    'https://my-porfoli.netlify.app',       // Netlify frontend
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // important if sending cookies
}));

app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// Swagger
app.use('/api-docs', serve, setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('✅ Contact API is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',                 // Local dev
    'https://my-porfoli.netlify.app/', // Your Netlify frontend
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

// Contact routes
app.use('/api', contactRoutes);

// Swagger API docs
app.use('/api-docs', serve, setup(swaggerSpec));

// Health check route
app.get('/', (req, res) => {
  res.send('✅ Contact API is running');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});

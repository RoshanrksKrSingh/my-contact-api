import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js'; // ✅ include .js extension
import contactRoutes from './routes/contactRoutes.js'; // ✅ include .js extension

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // ✅ No need for body-parser

// ✅ Routes
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

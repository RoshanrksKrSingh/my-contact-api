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
    'http://localhost:5173',
    'https://studio.apicur.io'
  ],
  credentials: true,
};
app.use(cors(corsOptions));


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', contactRoutes);
app.use('/api-docs', serve, setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Contact API is running ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` Swagger Docs at http://localhost:${PORT}/api-docs`);
});

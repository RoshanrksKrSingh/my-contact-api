import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://studio.apicur.io',
  ],
  credentials: true,
};
app.use(cors(corsOptions));

// Parse cookies
app.use(cookieParser());

// Configure session middleware
app.use(session({
  name: 'sid',             // Session cookie name
  secret: process.env.SESSION_SECRET || 'your-secret-key',  // Use a strong secret in production
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,        // Prevent client-side JS access to cookies
    secure: process.env.NODE_ENV === 'production',  // HTTPS only in production
    maxAge: 1000 * 60 * 60 * 24,  // 1 day session expiration
    sameSite: 'lax',       // CSRF protection
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

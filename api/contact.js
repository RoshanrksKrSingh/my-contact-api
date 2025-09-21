import serverless from 'serverless-http';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/contact', (req, res) => {
  res.status(200).json({ message: 'API is live and working!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // Simulate success (replace with your mailer logic)
  res.status(200).json({ message: 'Message received' });
});

export default app;
export const handler = serverless(app);

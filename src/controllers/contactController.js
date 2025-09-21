import { sendContactEmail } from '../utils/mailer.js';


export async function submitContact(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    await sendContactEmail({ name, email, message });

    res.status(200).json({
      message: 'Contact form submitted and email sent successfully.',
    });
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    });
  }
}

import axios from 'axios';

export const sendContactEmail = async ({ name, email, message }) => {
  const apiKey = process.env.BREVO_API_KEY;
  const recipient = process.env.MAIL_TO;

  const emailData = {
    sender: { name, email },
    to: [{ email: recipient }],
    subject: `New Contact Us Message from ${name}`,
    textContent: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      emailData,
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
      }
    );

    console.log('✅ Email sent via Brevo API:', response.data);
  } catch (error) {
    console.error('❌ Error sending email via Brevo API:', error.response?.data || error.message);
    throw error;
  }
};

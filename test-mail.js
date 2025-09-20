// require('dotenv').config();
// const nodemailer = require('nodemailer');

// async function testMail() {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: Number(process.env.MAIL_PORT),
//       secure: false,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: `"Test" <${process.env.MAIL_USER}>`,
//       to: process.env.MAIL_TO,
//       subject: 'Test Email',
//       text: 'This is a test email sent from Nodemailer',
//     });

//     console.log('Message sent: %s', info.messageId);
//   } catch (error) {
//     console.error('Error sending test mail:', error);
//   }
// }

// testMail();

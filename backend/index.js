// index.mjs (or index.js if "type": "module" in package.json)
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// ✅ CORS Setup (Only one place)
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

// ✅ Middleware
app.use(bodyParser.json());

// ✅ Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ✅ Contact Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New contact form submission from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    const confirmationMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h3>Thank you for reaching out, ${name}!</h3>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Hitanmay Raut</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error sending mail:', err);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

// ✅ Server Listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

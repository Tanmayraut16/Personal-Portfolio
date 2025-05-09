// index.mjs or server.js (with "type": "module" in package.json)
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();

// ✅ Correct CORS Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, sessions)
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options('*', cors());

// ✅ Ensure CORS Headers Are Sent
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    process.env.CORS_ORIGIN || "http://localhost:5173"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware
app.use(bodyParser.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD, // Use an app password if 2FA is enabled
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields',
    });
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

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Email send error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

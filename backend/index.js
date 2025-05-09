const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD, // Use an app password if you have 2FA enabled
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the inputs
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields',
    });
  }

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New contact form submission from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      // Include a reply-to header so you can directly reply to the sender
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user (optional)
    const confirmationMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h3>Thank you for reaching out, ${name}!</h3>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Hitanmay Raut</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
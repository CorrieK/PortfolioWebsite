const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../websiteimages/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// Handle contact form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Configure email transporter (replace with your email service details)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-password'
      }
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.RECIPIENT_EMAIL || 'recipient@example.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };
    
    // Send email
    // Uncomment this when you have configured your email service
    /*
    await transporter.sendMail(mailOptions);
    */
    
    // For demo purposes, just log the data
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// API to update project data
app.post('/api/projects', upload.single('image'), (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file ? `/websiteimages/${req.file.filename}` : null;
    
    // In a real application, you would save this to a database
    // For this demo, we'll just log it
    console.log('New project added:', { title, description, imagePath });
    
    res.status(200).json({ 
      success: true, 
      message: 'Project added successfully',
      project: { title, description, imagePath }
    });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ success: false, message: 'Failed to add project' });
  }
});

// API to update about section
app.post('/api/about', upload.single('profileImage'), (req, res) => {
  try {
    const { name, bio } = req.body;
    const imagePath = req.file ? `/websiteimages/${req.file.filename}` : null;
    
    // In a real application, you would save this to a database or file
    console.log('About section updated:', { name, bio, imagePath });
    
    res.status(200).json({ 
      success: true, 
      message: 'About section updated successfully',
      about: { name, bio, imagePath }
    });
  } catch (error) {
    console.error('Error updating about section:', error);
    res.status(500).json({ success: false, message: 'Failed to update about section' });
  }
});

// API to update services
app.post('/api/services', (req, res) => {
  try {
    const { services } = req.body;
    
    // In a real application, you would save this to a database or file
    console.log('Services updated:', services);
    
    res.status(200).json({ 
      success: true, 
      message: 'Services updated successfully',
      services
    });
  } catch (error) {
    console.error('Error updating services:', error);
    res.status(500).json({ success: false, message: 'Failed to update services' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
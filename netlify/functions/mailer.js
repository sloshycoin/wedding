// filepath: /netlify/functions/mailer.js
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const { name, guests, allergies } = JSON.parse(event.body);

  // Create a transporter using your email service
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email provider (e.g., Gmail, Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Set this in Netlify environment variables
      pass: process.env.EMAIL_PASS, // Set this in Netlify environment variables
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "bustillosburgeewedding@gmail.com", // Your email address
    subject: "Wedding RSVP",
    html: `
      <h1>Burgee Wedding RSVP</h1>
      <p><strong>Guest Name:</strong> ${name}</p>
      <p><strong>Guest Count:</strong> ${guests}</p>
      <p><strong>Food Allergies:</strong> ${allergies}</p>
      <p>Thank you for your RSVP! We can't wait to celebrate with you.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

export const sendOTPEmail = async (email: string, otp: string) => {
  try {    
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token!
      }
    });

    await transporter.sendMail({
      from: `TravelGenie <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your TravelGenie OTP Code',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #2563eb;">TravelGenie Verification</h2>
          <p>Your one-time password is:</p>
          <div style="font-size: 24px; font-weight: bold; margin: 20px 0;">${otp}</div>
          <p>This code expires in 5 minutes.</p>
        </div>
      `
    });

  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Failed to send OTP email');
  }
};
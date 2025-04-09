import { NextResponse } from 'next/server';
import { generateOTP } from '@/lib/auth/utils';
import { sendOTPEmail } from '@/lib/auth/email';
import prisma from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const otp = generateOTP();
    const expiry = new Date(Date.now() + 5 * 60 * 1000);

    // Store OTP
    await prisma.user.upsert({
      where: { email },
      update: { otp, otpExpiry: expiry },
      create: { email, otp, otpExpiry: expiry }
    });

    // Send Email
    await sendOTPEmail(email, otp);

    return NextResponse.json(
      { success: true, message: 'OTP sent successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error in /api/send-otp:', error);

    // Optional: If error is from email sending, you could add specific handling
    if (error.message?.includes('send OTP email')) {
      return NextResponse.json(
        { error: 'Failed to send OTP email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error', message: error?.message },
      { status: 500 }
    );
  }
}

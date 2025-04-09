import prisma from '@/lib/db';
import { addMinutes } from 'date-fns'

type UpdateUserOTP = Prisma.UserUpdateInput & {
  otp: string;
  otpExpiry: Date;
};


export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export const storeOTP = async (email: string, otp: string) => {
  const expiry = addMinutes(new Date(), 5) // OTP valid for 5 minutes
  
  await prisma.user.upsert({
    where: { email },
    update: { 
      otp,
      otpExpiry: expiry
    }as UpdateUserOTP,
    create: {
      email,
      otp,
      otpExpiry: expiry
    }as UpdateUserOTP
  })
}

export const verifyOTP = async (email: string, otp: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || user.otp !== otp || !user.otpExpiry) {
    return false
  }

  if (new Date() > user.otpExpiry) {
    return false
  }

  // Clear OTP after verification
  await prisma.user.update({
    where: { email },
    data: { 
      otp: null,
      otpExpiry: null 
    }
  })

  return true
}
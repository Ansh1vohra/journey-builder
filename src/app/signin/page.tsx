'use client'
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setOtpSent(true);
    setIsLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/'); // Redirect after successful login
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic
    router.push('/'); // Redirect after successful login
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Welcome!</h2>
            <p className="mt-2 text-gray-600">Sign in to access your travel itineraries</p>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? (
                  'Sending OTP...'
                ) : (
                  <>
                    Send OTP
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter OTP sent to {email}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="otp"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="6-digit code"
                    maxLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>

              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-500"
              >
                Use different email
              </button>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
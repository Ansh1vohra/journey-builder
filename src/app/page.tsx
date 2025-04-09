'use client'
import { ArrowRightIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">AI-Powered</span>
            <span className="block text-emerald-600">Travel Itineraries</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-600">
            Let artificial intelligence craft your perfect trip itinerary in seconds, tailored exactly to your preferences.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => router.push('/generate')}
              className="flex items-center rounded-md bg-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Generate Your Itinerary
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => router.push('/demo')}
              className="flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-emerald-600 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              See Demo
            </button>
          </div>
        </div>
        <div className="mt-16">
          <div className="relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-900/5">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-full bg-emerald-600 p-4 text-white shadow-lg">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <Image
              src="/assets/banner.jpeg" 
              alt="Sample AI-generated itinerary"
              width={1200} 
              height={800} 
              className="w-full rounded-lg border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose TravelGenie?</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <SparklesIcon className="h-8 w-8 text-emerald-600" />,
                title: "AI-Powered Suggestions",
                description: "Our advanced algorithms analyze millions of data points to recommend the perfect activities for your trip."
              },
              {
                icon: <ClockIcon className="h-8 w-8 text-emerald-600" />,
                title: "Global Coverage",
                description: "Get expert recommendations for destinations worldwide, from bustling cities to remote getaways."
              },
              {
                icon: <ClockIcon className="h-8 w-8 text-emerald-600" />,
                title: "Time Optimization",
                description: "We maximize your travel time with perfectly timed schedules and efficient routes between locations."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Travel Planning?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of travelers who save hours of research and get better itineraries with our AI technology.
          </p>
          <button
            onClick={() => router.push('/signin')}
            className="rounded-md bg-white px-8 py-3 text-lg font-medium text-emerald-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
          >
            Get Started for Free
          </button>
        </div>
      </section>

    </div>
  );
}
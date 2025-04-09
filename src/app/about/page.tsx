'use client'
import { BoltIcon, MapIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

export default function AboutPage() {

  const { data: session } = useSession();
  console.log(session?.user?.email);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-b from-emerald-50 to-white">

      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-emerald-600">TravelGenie</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Your AI-powered travel assistant crafting perfect itineraries in seconds
          </p>
        </div>

        <div className="prose prose-lg prose-emerald mx-auto">
          <p>
            TravelGenie is an innovative AI-powered itinerary builder that transforms how travelers plan their trips.
            Our advanced algorithms analyze millions of data points to create customized travel plans that match your
            unique preferences, schedule, and budget.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Our Mission</h2>
          <p>
            We are on a mission to eliminate the stress and hours of research typically required for trip planning.
            By combining artificial intelligence with travel expertise, we deliver optimized itineraries that help
            you discover the best experiences while maximizing your valuable travel time.
          </p>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  icon: <BoltIcon className="h-8 w-8 text-emerald-600" />,
                  title: "AI-Powered Generation",
                  description: "Instant itinerary creation using advanced machine learning models"
                },
                {
                  icon: <MapIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Personalized Recommendations",
                  description: "Tailored suggestions based on your interests and travel style"
                },
                {
                  icon: <CurrencyDollarIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Budget Optimization",
                  description: "Smart suggestions that match your spending preferences"
                },
                {
                  icon: <ClockIcon className="h-8 w-8 text-emerald-600" />,
                  title: "Time Efficiency",
                  description: "Optimized schedules that minimize transit time between locations"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-16">How It Works</h2>
          <ol className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">1</span>
              <span className="ml-4">Tell us your destination, travel dates, and preferences</span>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">2</span>
              <span className="ml-4">Our AI analyzes millions of data points</span>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">3</span>
              <span className="ml-4">Receive a customized itinerary in seconds</span>
            </li>
            <li className="flex items-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">4</span>
              <span className="ml-4">Refine and adjust to make it perfect for you</span>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
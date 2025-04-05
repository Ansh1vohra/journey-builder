export default function Footer(){
    return(
        <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">TravelGenie</span>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-gray-500 md:text-right">
                &copy; {new Date().getFullYear()} TravelGenie. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-full rounded-lg"
            />
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
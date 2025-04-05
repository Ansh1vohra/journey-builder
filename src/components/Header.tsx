'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-lg shadow-sm">
            <nav className="flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center">
                    <Link 
                        href="/" 
                        className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 flex items-center gap-2"
                    >
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        TravelGenie
                    </Link>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link 
                        href="/about" 
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 sm:text-base"
                    >
                        About
                    </Link>
                    
                    <button 
                        onClick={() => router.push('/signin')}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
                    >
                        Sign In
                    </button>
                </div>
            </nav>
        </header>
    )
}
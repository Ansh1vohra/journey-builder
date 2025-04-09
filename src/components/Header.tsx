"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
// import { Menu } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-lg shadow-sm">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 transition-colors hover:text-emerald-600 flex items-center gap-2"
          >
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-full rounded-lg"
            />
            TravelGenie
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 sm:text-base"
          >
            About
          </Link>

          {status === "authenticated" ? (
            <div className="relative group">
                <p className="text-sm text-gray-700">{session.user?.email}</p>
              <Image
                src={session?.user?.image || "/assets/user.png"}
                alt="User"
                width={36}
                height={36}
                className="rounded-full cursor-pointer border-2 border-emerald-600"
              />
              {/* dropdown */}
              <div className="absolute right-0 mt-2 hidden w-40 bg-white border rounded-md shadow-md group-hover:block">
                <button
                  onClick={() => router.push("/profile")}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() => signOut()}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => router.push("/signin")}
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:text-base"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

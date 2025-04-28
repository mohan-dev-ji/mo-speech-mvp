"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold text-gray-900">Mo Speech</h1>
          <SignOutButton signOutCallback={() => router.push("/landing")}>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </div>
    </header>
  );
} 
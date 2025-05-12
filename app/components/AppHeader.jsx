"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function AppHeader() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo className="h-8 w-auto" />
          <SignOutButton signOutCallback={() => router.push("/")}>
            <Button variant="default">
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </div>
    </header>
  );
} 
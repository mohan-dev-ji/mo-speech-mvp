"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "../shared/Logo";
import { Button } from "../shared/ui/button";

export default function AppHeader() {
  const router = useRouter();

  return (
    <header className="bg-brand-background shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo className="h-8 w-auto" />
          </Link>
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
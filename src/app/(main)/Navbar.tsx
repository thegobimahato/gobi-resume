"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { CreditCardIcon } from "lucide-react";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import Loader from "@/components/general/Loader";

export default function Navbar() {
  const { resolvedTheme } = useTheme(); // Get the current (resolved) theme
  const { isLoaded } = useUser(); // Check if Clerk user is loaded

  return (
    <header className="shadow-md dark:border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        {/* Logo and App Name */}
        <Link
          href="/resumes"
          className="flex items-center gap-2"
          aria-label="Go to resumes"
        >
          <Image
            src="/logo.svg"
            alt="Gobi Resume Logo"
            width={35}
            height={35}
          />
          <span className="text-primary text-2xl font-bold tracking-tight">
            Gobi Resume
          </span>
        </Link>

        {/* Theme toggle and user menu */}
        <div className="flex items-center gap-3">
          {/* Theme toggle button */}
          <ThemeToggle />

          {/* Show loader while Clerk is loading, otherwise show user button */}
          {!isLoaded ? (
            <Loader />
          ) : (
            <UserButton
              appearance={{
                baseTheme: resolvedTheme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: 35,
                    height: 35,
                  },
                },
              }}
            >
              {/* Custom menu items for the user button */}
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Billing"
                  labelIcon={<CreditCardIcon className="size-4" />}
                  href="/billing"
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>
      </div>
    </header>
  );
}

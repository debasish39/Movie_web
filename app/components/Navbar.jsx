"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { FiSearch, FiMenu, FiX, FiHome } from "react-icons/fi";

export default function Navbar() {

  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  return (

    <nav className="fixed bottom-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-t border-gray-800
                    md:sticky md:top-0 md:border-t-0 md:border-b">

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            🎬 FilmBase
          </h1>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6">

          <Link
            href="/search"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FiSearch />
            Search Movies
          </Link>

          {!isSignedIn && (
            <>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}

          {isSignedIn && <UserButton afterSignOutUrl="/" />}

        </div>

      </div>


      {/* MOBILE BOTTOM NAV */}
      <div className="flex md:hidden items-center justify-around py-3">

        <Link
          href="/"
          className="flex flex-col items-center text-gray-300 hover:text-white"
        >
          <FiHome className="text-xl" />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="/search"
          className="flex flex-col items-center text-gray-300 hover:text-white"
        >
          <FiSearch className="text-xl" />
          <span className="text-xs">Search</span>
        </Link>

        {!isSignedIn && (
          <button
            className="flex flex-col items-center text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX className="text-xl"/> : <FiMenu className="text-xl"/>}
            <span className="text-xs">Menu</span>
          </button>
        )}

        {isSignedIn && (
          <div className="flex flex-col items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
        )}

      </div>


      {/* MOBILE MENU */}
      {open && !isSignedIn && (
        <div className="absolute bottom-16 left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 md:hidden border-t border-gray-800">

          <SignInButton mode="modal">
            <button className="px-4 py-2 rounded-lg bg-gray-800">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="px-4 py-2 rounded-lg bg-blue-600">
              Sign Up
            </button>
          </SignUpButton>

        </div>
      )}

    </nav>

  );
}
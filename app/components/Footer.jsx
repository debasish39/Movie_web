"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 mb-9 sm:mb-0">

      {/* Glow background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 text-gray-300">

        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              🎬 FilmBase
            </h2>

            <p className="text-sm text-gray-400 max-w-sm">
              Discover, explore and rate your favorite movies.
              Your personal movie universe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Explore
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/movies" className="hover:text-blue-400 transition">
                  Movies
                </Link>
              </li>

              <li>
                <Link href="/favorites" className="hover:text-blue-400 transition">
                  Favorites
                </Link>
              </li>

              <li>
                <Link href="/profile" className="hover:text-blue-400 transition">
                  Profile
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://github.com"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FilmBase. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

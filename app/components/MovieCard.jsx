"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import StarRating from "./StarRating";
import { FaStar } from "react-icons/fa";

export default function MovieCard({ movie }) {

  const { isSignedIn } = useUser();
  const router = useRouter();

  const CardContent = (
    <div
      className="
      group
      relative
      bg-slate-900/80
      backdrop-blur-md
      rounded-xl
      overflow-hidden
      h-[300px]
      flex flex-col
      shadow-lg
      transition-all
      duration-300
      hover:scale-101
      hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
      cursor-pointer
      "
    >

      {/* POSTER */}
      <div className="relative overflow-hidden">

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"/>

      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col justify-between flex-grow">

        <div>

          <h2 className="font-semibold text-white line-clamp-1 text-lg">
            {movie.Title}
          </h2>

          <p className="text-xs text-gray-400">
            {movie.Year}
          </p>

          <p className="text-xs text-gray-300 line-clamp-1">
            {movie.Genre}
          </p>

          <div className="flex items-center justify-between mt-0.5">

            <StarRating movieId={movie.imdbID} />

            {movie.imdbRating && (
              <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold mt-2">
                <FaStar className="text-[12px]" />
                {movie.imdbRating}
              </span>
            )}

          </div>

        </div>

      </div>

    </div>
  );

  // USER LOGGED IN → OPEN MOVIE
  if (isSignedIn) {
    return (
      <div onClick={() => router.push(`/movie/${movie.imdbID}`)}>
        {CardContent}
      </div>
    );
  }

  // USER NOT LOGGED IN → OPEN SIGN IN MODAL
  return (
    <SignInButton mode="modal">
      {CardContent}
    </SignInButton>
  );
}
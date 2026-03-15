"use client";

import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import Loading from "./Loading";
import TrailerCarousel from "./components/TrailerCarousel";
import { useUser, SignInButton } from "@clerk/nextjs";
import MovieRow from "./components/MovieRow";

export default function Home() {

  const { isLoaded, isSignedIn } = useUser();
  const { movies, loading } = useMovies();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  /* AUTH LOADER */
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <Loading/>
      </div>
    );
  }

  /* LOGIN PAGE */
  if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-6">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-cyan-600 bg-clip-text text-transparent">
          🎬 FilmBase
        </h1>

        <p className="text-gray-400">
          Discover and rate your favorite movies
        </p>

        <SignInButton mode="modal">
          <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition">
            Sign In
          </button>
        </SignInButton>

      </div>
    );
  }

  /* MOVIE LOADER */
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <video src="/loading4.webm" autoPlay loop muted className="w-40 h-40"/>
      </div>
    );
  }

  /* FILTER */
  const filteredMovies = movies.filter((movie) => {

    const matchSearch =
      movie.Title?.toLowerCase().includes(search.toLowerCase());

    const matchGenre =
      genre === "" || movie.Genre?.includes(genre);

    return matchSearch && matchGenre;

  });

  return (

    <div className="
    relative
    min-h-screen
    text-white
    pb-20
    bg-gradient-to-b from-black via-slate-950 to-black
    overflow-hidden
    ">

      {/* BACKGROUND BLUE GLOW */}
      <div className="absolute inset-0 -z-10">

        <div className="
        absolute
        top-[-250px]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-blue-500/20
        blur-[200px]
        rounded-full
        " />

        <div className="
        absolute
        bottom-[-250px]
        right-[-200px]
        w-[700px]
        h-[700px]
        bg-cyan-400/10
        blur-[180px]
        rounded-full
        " />

      </div>


      {/* HERO TRAILER */}
        <TrailerCarousel movies={movies} />
      {/* GLASS CONTENT SECTION */}
      <div className="
      max-w-9xl
      mt-10
      sm:px-4
      py-2
      ">

        {/* TRENDING */}
        <MovieRow
          title="🔥 Trending Now"
          movies={movies.slice(0,10)}
        />

        {/* ACTION */}
        <MovieRow
          title="🎬 Action Movies"
          movies={movies.slice(10,20)}
        />

        {/* DRAMA */}
        <MovieRow
          title="🎭 Drama Collection"
          movies={movies.slice(6,15)}
        />

      </div>


      {/* BROWSE SECTION */}
      <div className="max-w-9xl mx-auto mt-12 px-4">

        <MovieRow
          title="🍿 Browse Movies"
          movies={filteredMovies}
        />

      </div>

    </div>

  );
}
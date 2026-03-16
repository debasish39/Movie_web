"use client";

import { useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight, FaFire } from "react-icons/fa";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {

  const scrollRef = useRef(null);

  const scroll = (direction) => {

    const { current } = scrollRef;

    if (!current) return;

    const scrollAmount = 500;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });

  };
const handleMovieClick = (movie) => {
  if (!isSignedIn) {
    router.push("/sign-in"); // Clerk sign-in page
    return;
  }

  router.push(`/movie/${movie.imdbID}`);
};
  return (

    <div className="max-w-9xl mx-auto px-6 mt-12 relative group">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-xl font-semibold flex items-center gap-2">
        
          {title}
        </h2>

      </div>


      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition bg-black/60 backdrop-blur-md p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>


      {/* MOVIE ROW */}
  <div
  ref={scrollRef}
  className="flex gap-5 overflow-x-auto pb-6 scroll-smooth scrollbar-hide"
>

  {movies.map((movie) => (

    <div
      key={movie.imdbID}
      className="w-[200px] h-[360px] flex-shrink-0 transition duration-300 hover:scale-110 hover:z-20"
    >

<MovieCard
  movie={movie}
  onClick={() => handleMovieClick(movie)}
/>
    </div>

  ))}

</div>


      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition bg-black/60 backdrop-blur-md p-3 rounded-full"
      >
        <FaChevronRight />
      </button>

    </div>

  );

}
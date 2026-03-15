"use client";

import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Loading from "../Loading";

export default function SearchPage() {

  const { movies, loading } = useMovies();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <Loading />
      </div>
    );
  }

  const filteredMovies = movies.filter((movie) => {

    const matchSearch =
      movie.Title?.toLowerCase().includes(search.toLowerCase());

    const matchGenre =
      genre === "" || movie.Genre?.includes(genre);

    return matchSearch && matchGenre;

  });

  return (

    <div className="min-h-screen text-white px-6 py-12
    bg-gradient-to-b from-black via-slate-950 to-black">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h1 className="
          text-xl sm:text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-blue-400 to-cyan-400
          bg-clip-text text-transparent
          ">
            Search Movies
          </h1>

          <p className="text-gray-400 mt-2">
            Discover movies by title or genre
          </p>

        </div>

{/* SEARCH PANEL */}
{/* SEARCH PANEL */}
<div className="flex items-center gap-4 mb-12 w-full">

  {/* SEARCH 3/4 */}
  <div className="flex-[3]">
    <SearchBar setSearch={setSearch} />
  </div>

  {/* FILTER 1/4 */}
  <div className="flex-[1] flex justify-center sm:justify-end">
    <FilterBar setGenre={setGenre} />
  </div>

</div>


        {/* MOVIES GRID */}
        {filteredMovies.length > 0 ? (

          <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-4 sm:gap-6
          ">

            {filteredMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}

          </div>

        ) : (

          /* EMPTY STATE */
          <div className="
          flex flex-col items-center justify-center
          text-center py-24
          bg-white/5 backdrop-blur-md
          border border-white/10
          rounded-xl
          ">

            <h3 className="text-xl font-semibold mb-2">
              No movies found
            </h3>

            <p className="text-gray-400 text-sm">
              Try searching another title or selecting a different genre
            </p>

          </div>

        )}

      </div>

    </div>

  );
}
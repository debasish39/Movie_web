import Image from "next/image";

async function getMovie(id) {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function MovieDetails({ params }) {

  const { id } = await params;

  const movie = await getMovie(id);

  return (

    <div className="min-h-screen  text-white py-12 px-6">

      <div className="max-w-9xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 ">

          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-xl w-full max-w-sm shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              {movie.Title}
            </h1>

            <p className="text-gray-400 mb-6 text-sm">
              {movie.Year} • {movie.Runtime}
            </p>

            <div className="space-y-3 text-gray-300">

              <p>
                <span className="text-white font-semibold">Genre:</span>{" "}
                {movie.Genre}
              </p>

              <p>
                <span className="text-white font-semibold">Director:</span>{" "}
                {movie.Director}
              </p>

              <p>
                <span className="text-white font-semibold">Actors:</span>{" "}
                {movie.Actors}
              </p>

              <p className="flex items-center gap-2">
                <span className="text-white font-semibold">IMDb Rating:</span>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                  ⭐ {movie.imdbRating}
                </span>
              </p>

            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-gray-400 leading-relaxed">
                {movie.Plot}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}
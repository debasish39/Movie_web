"use client";

import { useEffect, useState } from "react";

export function useMovies() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let isMounted = true;

    async function fetchMovies() {
      try {

        const res = await fetch("/api/movies");

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await res.json();

        if (isMounted) {
          setMovies(data);
          setLoading(false);
        }

      } catch (err) {

        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }

      }
    }

    fetchMovies();

    return () => {
      isMounted = false;
    };

  }, []);

  return { movies, loading, error };

}
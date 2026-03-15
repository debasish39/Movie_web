"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({ setSearch }) {

  return (

    <div className="relative w-full max-w-md">

      {/* ICON */}
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          pl-11
          pr-4
          py-2
          rounded-full
          bg-gray-900
          text-white
          placeholder-gray-400
          border border-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />

    </div>

  );

}
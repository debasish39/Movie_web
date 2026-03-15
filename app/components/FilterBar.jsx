"use client";

import { FiFilter } from "react-icons/fi";

export default function FilterBar({ setGenre }) {

  return (

    <div className="relative w-12 sm:w-40 flex items-center justify-center ">

      {/* ICON */}
      <FiFilter
        className="
          absolute
          left-1/2 sm:left-3
          top-1/2
          -translate-y-1/2
          -translate-x-1/2 sm:translate-x-0
          text-gray-400
          pointer-events-none
        "
        size={22}
      />

      {/* SELECT */}
      <select
        onChange={(e) => setGenre(e.target.value)}
        className="
          w-full
          sm:pl-10
          pr-4
          py-2
          rounded-full
          bg-gray-900
          border border-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          appearance-none
          transition
          cursor-pointer
          text-sm
          text-transparent sm:text-white
        "
      >

        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>

      </select>

    </div>

  );

}
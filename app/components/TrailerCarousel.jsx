"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { movies } from "../data/movies";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { useState } from "react";
import TrailerModal from "./TrailerModel";

import { useUser, SignInButton } from "@clerk/nextjs";

export default function TrailerCarousel() {

  const [activeVideo, setActiveVideo] = useState(null);
  const { isSignedIn } = useUser();

  return (

    <div className="w-full mb-14">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        effect="fade"
        loop
      >

        {movies.slice(0, 20).map((movie) => (

          <SwiperSlide key={movie.id}>

            <div className="relative w-full h-[520px] overflow-hidden group">

              {/* VIDEO ALWAYS VISIBLE */}
              <video
                src={movie.trailer}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* MOVIE INFO */}
              <div className="absolute bottom-12 p-3 sm:left-12 max-w-xl">

                <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                  {movie.title}
                </h2>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {movie.plot}
                </p>

                <p className="text-gray-400 text-xs mb-4">
                  Official Trailer
                </p>

                {/* PLAY BUTTON */}
                {isSignedIn ? (

                  <button
                    onClick={() => setActiveVideo(movie.trailer)}
                    className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    ▶ Play Trailer
                  </button>

                ) : (

                  <SignInButton mode="modal">
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold">
                      🔒 Login to Play
                    </button>
                  </SignInButton>

                )}

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* VIDEO MODAL ONLY IF LOGGED IN */}
      {isSignedIn && (
        <TrailerModal
          video={activeVideo}
          close={() => setActiveVideo(null)}
        />
      )}

    </div>

  );
}
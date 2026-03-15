"use client";

export default function TrailerModal({ video, close }) {

  if (!video) return null;

  return (

    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

      <button
        onClick={close}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
      >
        ✕
      </button>

      <video
        src={video}
        controls
        autoPlay
        className="w-[90%] max-w-5xl rounded-xl"
      />

    </div>

  );
}
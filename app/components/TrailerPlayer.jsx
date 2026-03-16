"use client";

import { useUser, SignInButton } from "@clerk/nextjs";

export default function TrailerPlayer({ trailer }) {

  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="mt-8 p-6 bg-black/60 rounded-xl text-center">

        <p className="text-gray-300 mb-4">
          🔒 Login to watch the trailer
        </p>

        <SignInButton mode="modal">
          <button className="bg-white text-black px-5 py-2 rounded-lg">
            Sign In
          </button>
        </SignInButton>

      </div>
    );
  }

  return (

    <div className="mt-8">

      <video
        src={trailer}
        controls
        className="w-full rounded-xl shadow-lg"
      />

    </div>

  );
}
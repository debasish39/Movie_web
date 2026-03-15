import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";

export const metadata = {
  title: "FilmBase",
  description: "Discover and rate your favorite movies"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">

        <body className="bg-gradient-to-b from-black via-slate-950 to-black text-white min-h-screen">

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="max-w-full mx-auto pb-20">
            {children}
          </main>

      <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
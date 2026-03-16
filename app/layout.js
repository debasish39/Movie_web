import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";
import { Toaster } from "sonner";


export const metadata = {
  title: {
    default: "FilmBase",
    template: "%s | FilmBase"
  },

  description:
    "FilmBase – Discover trending movies, watch trailers, and rate your favorite films.",

  keywords: [
    "movies",
    "filmbase",
    "movie trailers",
    "IMDB movies",
    "movie ratings",
    "watch trailers",
    "cinema"
  ],
 icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "FilmBase" }],

  metadataBase: new URL("https://filmbase.debasish.xyz/"),

  manifest: "/manifest.json",

  themeColor: "#000000",

  icons: {
    icon: "/icons/icon-192x192.png",
    shortcut: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png"
  },

  openGraph: {
    title: "FilmBase",
    description:
      "Discover trending movies, watch trailers and rate your favorite films.",
    url: "https://filmbase.debasish.xyz/",
    siteName: "FilmBase",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FilmBase Movies"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "FilmBase",
    description:
      "Discover trending movies, watch trailers and rate your favorite films.",
    images: ["/og-image.png"]
  },

  robots: {
    index: true,
    follow: true
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  }
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#2563eb",
          // colorBackground: "#000000",
          colorText: "#ffffff",
        },
        elements: {
          modalBackdrop: "bg-black/30 backdrop-blur-md",
          card: "bg-black/5 border border-gray-800 shadow-xl",
          headerTitle: "text-white",
          headerSubtitle: "text-white",
          formButtonPrimary: "bg-blue-600 hover:bg-blue-500",
          formFieldInput:
            "bg-gray-900 border border-gray-700 text-white placeholder-gray-400",
          footerActionText: "text-white",
          footerActionLink: "text-blue-400 hover:text-blue-300",
        },
      }}
    >
      <html lang="en">
        <body className="bg-gradient-to-b from-black via-slate-950 to-black text-white min-h-screen">
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="max-w-full mx-auto pb-20">
            {children}
            <Toaster position="top-right" richColors />
          </main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

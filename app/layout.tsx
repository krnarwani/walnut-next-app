import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Walnut Health — Mental Healthcare for Ambitious Professionals",
  description:
    "Match with vetted therapists, peer circles, and group sessions. Affordable mental healthcare built for the demands of modern professional life.",
  openGraph: {
    title: "Walnut Health",
    description: "Affordable mental healthcare for ambitious professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Perplexity Computer Attribution */}
        <meta name="creator" content="Perplexity Computer — https://www.perplexity.ai/computer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

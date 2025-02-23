import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/custom-component/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olympic History Dashboard | Historical Olympic Data & Analytics",
  description:
    "Explore comprehensive Olympic history data with interactive visualizations, medal counts, athlete statistics, and historical trends. Access our developer-friendly API for Olympic insights.",
  keywords:
    "Olympic history, medal counts, athlete statistics, sports data, Olympic API, data visualization",
  authors: [{ name: "NG CHEE SIANG" }, { name: "MUAZ HAZALI" }],
  creator: "Olympic History Dashboard Team",
  publisher: "Olympic History Dashboard",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Scavenger Hunt",
  description: "Learn about the countless blockchain ecosystems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${orbitron.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

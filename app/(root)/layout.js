/* eslint-disable @next/next/no-img-element */
import "../globals.css";
import Navbar from "@/components/homepage/Navbar";

export const metadata = {
  title: "Scavenger Hunt",
  description: "Learn about the countless blockchain ecosystems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {/*  */}
        <img
          src="/images/challenges-section-bg.png"
          alt="Scavenger Hunt Challenges"
          className="absolute inset-0 z-0"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

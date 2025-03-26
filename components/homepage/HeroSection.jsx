// HeroSection.jsx
"use client";
import Image from "next/image";
import Button from "../ui/Button"; // Import the Button component
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-full min-h-screen px-6 overflow-hidden text-white bg-black md:px-12">
      {/* Background Image with gradient overlay for targeted darkening */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Custom gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent "></div>

        <Image
          src="/images/image2.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
          style={{
            objectPosition: "60% center", // Shift image slightly left
            filter: "brightness(0.85)", // Not too dark overall
          }}
        />
        <Image
          src="/images/image3.png"
          alt="Mobile Background"
          fill
          priority
          sizes="100vw"
          className="block object-cover md:hidden"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-xl ml-6 md:ml-12">
        <h1 className="text-4xl font-bold tracking-wide text-left md:text-6xl">
          Master Blockchain
          <br />
          Ecosystems Through
          <br />
          <span className="text-[#d946ef]">Fun Challenges.</span>
        </h1>
        <p className="mt-4 text-lg text-left text-gray-300">
          Gamify Your Learning Journey and Collect Unique NFTs
        </p>

        {/* Buttons container - centered on mobile */}
        <div className="flex justify-center mt-8 md:justify-start md:flex-row md:space-x-4">
          {/* Primary button (purple) */}
          <Link href="/challenges">
            <Button variant="primary">Join a challenge</Button>
          </Link>

          {/* Secondary button (dark gray) - hidden on mobile */}
          <Button variant="secondary" className="hidden md:block">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

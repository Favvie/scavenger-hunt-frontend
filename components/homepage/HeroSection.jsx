// HeroSection.jsx
"use client";
import Image from "next/image";
import Button from "../ui/Button"; // Import the Button component

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-start justify-center px-6 md:px-12 bg-black text-white overflow-hidden">
      {/* Background Image with gradient overlay for targeted darkening */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Custom gradient overlay - darker on left, lighter on right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-transparent "></div>

        <Image
          src="/images/image2.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
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
          className="block md:hidden object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-xl z-20 relative ml-6 md:ml-12">
        <h1 className="text-4xl md:text-6xl font-bold text-left tracking-wide">
          Master Blockchain
          <br />
          Ecosystems Through
          <br />
          <span className="text-[#d946ef]">Fun Challenges.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 text-left">
          Gamify Your Learning Journey and Collect Unique NFTs
        </p>

        {/* Buttons container - centered on mobile */}
        <div className="mt-8 flex justify-center md:justify-start md:flex-row md:space-x-4">
          {/* Primary button (purple) */}
          <Button variant="primary">Join a challenge</Button>

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

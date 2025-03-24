"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import people from "../../public/images/people.png";

// ===== UTILITY HOOKS =====

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

// ===== TESTIMONIAL CARD COMPONENT =====

function TestimonialCard({ testimonial, isMobile = false }) {
  return (
    <div className="bg-[#121727] mt-6 rounded-lg p-6 flex flex-col h-full transition-transform hover:scale-[1.02]">
      {isMobile ? (
        // Mobile layout - centered with avatar at top
        <>
          <div className="flex relative flex-col items-center mb-4">
            <div
              className="w-20  border-[8px] absolute h-20 translate-y-[-80%] rounded-full flex items-center justify-center mb-3"
              style={{
                backgroundColor: testimonial.avatarBg,
                borderColor: testimonial.border,
              }}
            >
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className="text-center pt-4">
              <h4 className="font-bold text-white text-xl">
                {testimonial.name}
              </h4>
              <p className="text-gray-400">{testimonial.handle}</p>
            </div>
          </div>

          <p className="text-gray-300 mb-6 flex-1 text-center">
            {testimonial.content}
          </p>

          <div className="flex justify-center">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
             <svg
             key={`${testimonial.id}-${i}`} // Unique key based on the testimonial
             className="w-5 h-5 text-yellow-400 fill-current"
             viewBox="0 0 24 24"
           >
             <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
           </svg>
           
            ))}
          </div>
        </>
      ) : (
        // Desktop layout - avatar on left
        <>
          <div className="flex flex-col items-center mb-4 relative">
            <div
              className="w-28 border-[8px] h-28 rounded-full flex items-center absolute translate-y-[-80%] justify-center mr-4"
              style={{
                backgroundColor: testimonial.avatarBg,
                borderColor: testimonial.border,
              }}
            >
              <Image
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className=" pt-10">
              <h4 className="font-bold text-white">{testimonial.name}</h4>
              <p className="text-gray-400">{testimonial.handle}</p>
            </div>
          </div>

          <p className="text-gray-300 mb-4 flex-1">{testimonial.content}</p>

          <div className="flex justify-center">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
                aria-labelledby={`star-icon-${i}`}
                role="img"
              >
                <title id={`star-icon-${i}`}>Star icon</title>
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ===== SOCIAL STATS COMPONENT =====

function SocialStats() {
  const isMobile = useMobile();

  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-[#8A3BAF] to-[#E05FAD] p-4 md:p-6">
      <div className="flex flex-row">
        {/* Stats Container - Takes full width on mobile, 2/3 on desktop */}
        <div className="w-full lg:w-2/3 grid grid-cols-3 gap-2 md:gap-4">
          {/* Facebook Stats */}
          <div className="text-center border-r border-white/20 pr-2">
            <div className="bg-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-1 md:mb-3">
              <Facebook className="h-4 w-4 md:h-6 md:w-6 text-[#8A3BAF]" />
            </div>
            <h3 className="text-xl md:text-4xl font-bold text-white">80K+</h3>
            <p className="text-white/80 text-xs md:text-sm">Facebook members</p>
          </div>

          {/* Twitter Stats */}
          <div className="text-center border-r border-white/20 pr-2">
            <div className="bg-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-1 md:mb-3">
              <Twitter className="h-4 w-4 md:h-6 md:w-6 text-[#8A3BAF]" />
            </div>
            <h3 className="text-xl md:text-4xl font-bold text-white">150K+</h3>
            <p className="text-white/80 text-xs md:text-sm">
              Twitter followers
            </p>
          </div>

          {/* LinkedIn Stats */}
          <div className="text-center">
            <div className="bg-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-1 md:mb-3">
              <Linkedin className="h-4 w-4 md:h-6 md:w-6 text-[#8A3BAF]" />
            </div>
            <h3 className="text-xl md:text-4xl font-bold text-white">45K+</h3>
            <p className="text-white/80 text-xs md:text-sm">LinkedIn members</p>
          </div>
        </div>

        {/* Illustration Container - Only on desktop/tablet */}
        {!isMobile && (
          <div className=" hidden lg:block md:w-1/3 relative">
            <div className="">
              <Image
                src={people}
                alt="Community illustration"
                width={300}
                height={150}
                priority
                className=" w-[200px] xl:w-[300px] absolute -bottom-5 left-16 xl:left-10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// MAIN COMPONENT
const testimonials = [
  {
    id: 1,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#FF7A2F",
    avatarUrl: "/images/1.png",
    rating: 5,
    border: "#121727",
  },
  {
    id: 2,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#3CDFDF",
    avatarUrl: "/images/2.png",
    rating: 4,
    border: "#121727",
  },
  {
    id: 3,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#A64FFF",
    avatarUrl: "/images/3.png",
    rating: 5,
    border: "#121727",
  },
  {
    id: 4,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#FF7A2F",
    avatarUrl: "/images/1.png",
    rating: 5,
    border: "#121727",
  },
  {
    id: 5,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#3CDFDF",
    avatarUrl: "/images/2.png",
    rating: 5,
    border: "#121727",
  },
  {
    id: 6,
    name: "Defipedia",
    handle: "@defipedia",
    content:
      "Absolutely loving the NFT Scavenger Hunt! The puzzles are challenging but rewarding, and the NFT rewards are genuinely unique.",
    avatarBg: "#A64FFF",
    avatarUrl: "/images/3.png",
    rating: 5,
    border: "#121727",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenSize = useScreenSize();

  // this controls how many testimonials to show based on the device screen size
  const getItemsPerPage = () => {
    if (screenSize === "mobile") return 1;
    if (screenSize === "tablet") return 2;
    return 3; // desktop
  };

  const itemsPerPage = getItemsPerPage();
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  //this function makes it auto slide every 4 seconds if its on mobile

  useEffect(() => {
    setActiveIndex(0); // Reset index on screen size change
  }, [screenSize]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };

  // Get current visible testimonials
  const getVisibleTestimonials = () => {
    if (screenSize === "mobile") {
      return [testimonials[activeIndex]];
    }

    const startIndex = activeIndex * itemsPerPage;
    return testimonials.slice(
      startIndex,
      Math.min(startIndex + itemsPerPage, testimonials.length)
    );
  };

  return (
    <>
      <section className="py-12 md:py-16 text-white bg-black">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Take a sneak peek into
              <br />
              <span className="text-[#B14FC5]">our community buzz</span>
            </h2>
            <p className="text-gray-400 text-[16px] max-w-2xl mx-auto">
              {screenSize === "mobile"
                ? "Join thousands of players to explore"
                : "Join thousands of players already exploring the ecosystem"}
            </p>
          </div>
          <div className=" pt-10 xl:pt-24">
            <SocialStats />
          </div>

          <div className="mt-12 md:mt-16 relative">
            {/* Testimonials Grid/Slider */}
            <div className=" grid grid-cols-1 gap-y-[80px] md:grid-cols-2 lg:grid-cols-3 gap-x-6">
              {getVisibleTestimonials().map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isMobile={screenSize === "mobile"}
                />
              ))}
            </div>

            {/* Mobile Pagination Dots */}
            {screenSize === "mobile" && (
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      activeIndex === index ? "bg-[#3CDFDF]" : "bg-[#2A2344]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Desktop/Tablet Navigation Controls */}
            {screenSize !== "mobile" && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="p-2 rounded-full text-white hover:text-[#B14FC5] transition-colors"
                  aria-label="Previous testimonials"
                >
                  <ArrowLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full text-white hover:text-[#B14FC5] transition-colors"
                  aria-label="Next testimonials"
                >
                  <ArrowRight className="h-8 w-8" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

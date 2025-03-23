"use client";
import React, {useEffect, useRef} from "react";

const TextCarousel = () => {
   const carouselRef = useRef(null);

   // Text items for the carousel
   const texts = ["Welcome to our site!", "Explore our new features.", "Get started today!", "Join our community!", "Check out our blog!"];

   useEffect(() => {
      const interval = setInterval(() => {
         if (carouselRef.current) {
            // Move the carousel content left
            carouselRef.current.scrollLeft += 200; // Adjust this value based on your container width
            // Loop back to the beginning when the end is reached
            if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
               carouselRef.current.scrollLeft = 0;
            }
         }
      }, 3000); // Adjust the speed (time) for scrolling here

      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="Orbitron text-white text-center font-[ 600] text-[32px]">
         {" "}
         <div className="w-full overflow-hidden flex justify-center items-center bg-[#060B1C] py-4">
            <div className="flex space-x-8 transition-transform duration-1000 ease-in-out" ref={carouselRef}>
               {texts.map((text, index) => (
                  <div key={index} className="px-8 py-4 bg-[#3B82F6] text-white font-semibold text-lg rounded-md">
                     <p>{text}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default TextCarousel;

"use client";
import React, {useEffect, useState} from "react";

const TextCarousel = () => {
   const texts = ["Get rewarded while learning", "Build your skills and knowledge", "Explore multiple ecosystems"];

   const [currentIndex, setCurrentIndex] = useState(0);
   const [isTransitioning, setIsTransitioning] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setIsTransitioning(true);
         setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setIsTransitioning(false);
         }, 700);
      }, 5000);

      return () => clearInterval(interval);
   }, []);

   // Handle next and previous buttons
   const goNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsTransitioning(true);
   };

   const goPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
      setIsTransitioning(true);
   };
   return (
      <div className="Orbitron text-white text-center font-[600] text-[32px]">
         <h1 className={`transition-opacity duration-1000 ease-in-out  ${isTransitioning ? "opacity-0" : "opacity-100"}`}>{texts[currentIndex]}</h1>
         <div className="flex flex-row justify-center gap-4 mt-4">
            <button
               className={`w-[55px] border-[3px] ${currentIndex === 0 ? "border-[#E9E9E9]" : "border-[#858894]"} border-solid rounded-full `}
               onClick={() => setCurrentIndex(0)}
            ></button>{" "}
            <button
               className={`w-[55px] border-[3px] ${currentIndex === 1 ? "border-[#E9E9E9]" : "border-[#858894]"} border-solid rounded-full `}
               onClick={() => setCurrentIndex(1)}
            ></button>{" "}
            <button
               className={`w-[55px] border-[3px] ${currentIndex === 2 ? "border-[#E9E9E9]" : "border-[#858894]"} border-solid rounded-full `}
               onClick={() => setCurrentIndex(2)}
            ></button>
         </div>
      </div>
   );
};

export default TextCarousel;

"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image"; // Import Image component from Next.js
import messageIcon from "@/public/images/message-icon.png"; // Import the new icon

const EmailSentPopup = ({ isOpen, onClose, email, onResend, onChangeEmail }) => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      if (isOpen) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   }, [isOpen]);

   if (!isOpen && !isVisible) return null;

   return (
      <div
         className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}
      >
         {/* Overlay with Linear Gradient */}
         <div
            className="absolute inset-0 bg-gradient-to-r from-[#AE61F8] to-[#060B1C] opacity-20"
            onClick={onClose}
         ></div>

         {/* Back Button */}
         <div className="absolute hidden lg:flex top-[59px] left-[90px] z-[60]">
            <BackButton />
         </div>

         {/* Pop-Up Container */}
         <div
            className={`bg-[#060B1C] rounded-[30px] w-[90%] max-w-[550px] h-auto min-h-[400px] max-h-[90vh] mx-4 flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 relative z-10 transition-transform duration-300 ease-in-out ${
               isVisible ? "scale-100" : "scale-95"
            }`}
         >
            <div className="w-full max-w-[400px] h-auto flex flex-col justify-center items-center">
               {/* Message Icon */}
               <div className="mb-1">
                  <Image
                     src={messageIcon}
                     alt="Message Icon"
                     width={60}
                     height={60}
                     priority
                  />
               </div>

               {/* Title */}
               <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 Orbitron text-center">
                  Email sent
               </h2>

               {/* Description */}
               <p className="text-[#858894] mb-6 sm:mb-8 md:mb-10 font-spaceGrotesk text-xs sm:text-sm font-[400] text-center">
                  We have sent you an email at <span className="text-white">{email}</span>.
                  Check your inbox and follow the instructions to <br/> reset your account password.
               </p>

               {/* Options */}
               <div className="flex flex-col items-center gap-4">
                  <p className="font-spaceGrotesk text-center text-[12px] sm:text-[14px] font-[500] text-[#E9E9E9]">
                     Did not receive the email?{" "}
                     <button
                        type="button"
                        onClick={onResend}
                        className="text-[#FF4D90] font-[700] underline font-orbitron"
                     >
                        Resend Email
                     </button>
                  </p>
                  <p className="font-spaceGrotesk text-center text-[12px] sm:text-[14px] font-[500] text-[#E9E9E9]">
                     Wrong email address?{" "}
                     <button
                        type="button"
                        onClick={onChangeEmail}
                        className="text-[#FF4D90] font-[700] underline font-orbitron"
                     >
                        Change Email Address
                     </button>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EmailSentPopup;
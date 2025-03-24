"use client";
import Input from "@/components/ui/Input";
import { useFormik } from "formik";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import BackButton from "@/components/ui/BackButton";

const ForgotPasswordPopup = ({ isOpen, onClose, onEmailSent }) => {
   const [isVisible, setIsVisible] = useState(false);

   const forgotPasswordFormik = useFormik({
      initialValues: {
         Email: "",
      },
      onSubmit: (values) => {
         console.log("Forgot Password Email:", values.Email);
         onEmailSent(values.Email);
      },
   });

   const { values, handleChange, handleSubmit } = forgotPasswordFormik;

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
         <div
            className="absolute inset-0 bg-gradient-to-r from-[#AE61F8] to-[#060B1C] opacity-20"
            onClick={onClose}
         ></div>

         <div className="absolute hidden lg:flex top-[59px] left-[90px] z-[60]">
            <BackButton/>
         </div>

         <div
            className={`bg-[#060B1C] rounded-[30px] w-[90%] max-w-[550px] h-auto min-h-[300px] max-h-[90vh] mx-4 flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 relative z-10 transition-transform duration-300 ease-in-out ${
               isVisible ? "scale-100" : "scale-95"
            }`}
         >
            <div className="w-full max-w-[400px] h-auto flex flex-col justify-center">
               <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 Orbitron text-center">
                  Forgot Password?
               </h2>
               <p className="text-[#858894] mb-6 sm:mb-8 md:mb-10 font-spaceGrotesk text-xs sm:text-sm font-[400] text-center">
                  Enter your Email to reset your password
               </p>
               <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                  <Input
                     type={"email"}
                     name={"Email"}
                     label={"Email"}
                     placeholder={"eg. johndoe@gmail.com"}
                     className="font-orbitron! mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base"
                     value={values.Email}
                     onChange={handleChange}
                     required={true}
                  />
                  <Button
                     variant="gradient"
                     className="Orbitron font-[500] text-[16px] sm:text-[18px] md:text-[20px] h-[40px] sm:h-[45px] md:h-[50px] flex items-center justify-center"
                  >
                     Send email
                  </Button>
                  <p className="font-spaceGrotesk text-center text-[12px] sm:text-[14px] font-[500] text-[#858894] mt-1">
                     Remember Password?{" "}
                     <button
                        type="button"
                        onClick={onClose}
                        className="text-[#858894] font-[700]!"
                     >
                        Sign in
                     </button>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ForgotPasswordPopup;
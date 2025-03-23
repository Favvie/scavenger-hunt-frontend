"use client";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import background from "@/public/images/formImage.svg";
import TextCarousel from "@/components/ui/TextCarousel";
import FormIntro from "@/components/ui/FormIntro";
import ConnectWalletButton from "@/components/ui/ConnectWalletButton";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton";
import BackButton from "@/components/ui/BackButton";
import {Formik, useFormik} from "formik";
import Button from "@/components/ui/Button";
import Link from "next/link";
import mobilebackground from "@/public/images/mobilebackground.svg";

const Page = () => {
   const [Error, setError] = useState(false);
   const formik = useFormik({
      initialValues: {
         FirstName: "",
         LastName: "",
         Email: "",
         Password: "",
      },
      onSubmit: (values) => {
         if (Error) {
            return;
         } else {
            console.log(values);
         }
      },
   });

   const {values, handleChange, handleSubmit} = formik;
   useEffect(() => {
      if (values.Password) {
         values.Password.length < 8 ? setError(true) : setError(false);
      }
   }, [values.Password]);
   return (
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
         <section className=" hidden lg:flex h-full relative">
            <div className="absolute top-[59px] left-[90px] z-40">
               <BackButton />
            </div>
            <Image src={background} alt="background" className="z-0 brightness-75" objectFit="cover" objectPosition="top center" fill priority sizes="100vw" />
            <div className="absolute bottom-12 right-0 left-0 w-full">
               <TextCarousel />
            </div>
         </section>
         {/*  */}
         <section className=" bg-[#060B1C] py-16 px-8 lg:px-16 xl:px-28">
            <Image src={mobilebackground} alt="background" className="lg:hidden absolute brightness-50 z-20" objectFit="cover" objectPosition="top center" fill priority sizes="100vw" />

            <div className=" flex flex-col items-center gap-6 z-40">
               <FormIntro title={"Sign up"} description={"Join thousands of learners exploring blockchain ecosystems, completing challenges, and earning NFT rewards."} />
               <div className="flex flex-row items-center gap-4">
                  <GoogleSignInButton />
                  <ConnectWalletButton />
               </div>
               <div className="relative w-[350px] sm:w-[370px] flex justify-center">
                  <hr className="border-[#3B82F64D] h-[1px] w-full" />
                  <div className="text-[#3B82F64D] space-grotesk absolute top-[-0.75rem] bg-[#060B1C] w-8 text-center">Or</div>
               </div>
               <form action="" className="flex flex-col gap-4 w-full sm:w-[400px] mt-4" onSubmit={handleSubmit}>
                  <div className="w-full flex flex-col  sm:flex-row gap-4 ">
                     <Input
                        type={"text"}
                        name={"FirstName"}
                        label={"FirstName"}
                        placeholder={"John"}
                        value={values.FirstName}
                        onChange={handleChange}
                        className={"w-full sm:w-[100%]"}
                        required={true}
                     />
                     <Input
                        type={"text"}
                        name={"LastName"}
                        label={"LastName"}
                        placeholder={"Doe"}
                        value={values.LastName}
                        onChange={handleChange}
                        className={"w-full sm:w-[100%]"}
                        required={true}
                     />
                  </div>
                  <Input type={"email"} name={"Email"} label={"Email"} placeholder={"Johndoe@gmail.com"} value={values.Email} onChange={handleChange} required={true} />
                  <Input type={"password"} name={"Password"} label={"Password"} placeholder={"Password"} value={values.Password} onChange={handleChange} required={true} />
                  <p className="text-[#F93232] space-grotesk font-[500] text-[14px]">{Error ? "Must be atleast 8 characters" : ""}</p>
                  <div className="mt-6 flex flex-col gap-4 z-40">
                     <Button variant="gradient" className="Orbitron font-[500] text-[20px] h-[50px] flex flex-col items-center justify-center">
                        Sign Up
                     </Button>
                     <p className="space-grotesk text-centertext-[14px] font-[500] text-[#858894] text-center ">
                        Already have an account? <Link href={"/sign-in"}>Sign in</Link>
                     </p>
                  </div>
               </form>
            </div>
         </section>
      </div>
   );
};

export default Page;

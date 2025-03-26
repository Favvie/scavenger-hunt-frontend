'use client';

import React, { useState } from "react";
import google from "@/public/images/googleicon.png";
import Image from "next/image";
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthWrapper';

const GoogleSignInButton = () => {
   const router = useRouter();
   const auth = useAuth();
   const [isLoading, setIsLoading] = useState(false);
   
   const login = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
         try {
            setIsLoading(true);
            console.log("Google login success, token received");
            
            // Get user details using access token
            const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
               headers: {
                  'Authorization': `Bearer ${tokenResponse.access_token}`
               }
            });
            
            const userInfo = await userInfoResponse.json();
            
            // Create user object
            const userData = {
               email: userInfo.email,
               name: userInfo.name,
               profilePicture: userInfo.picture,
               authProvider: 'google'
            };
            
            // Log user details to console
            console.log('Google Authentication Successful');
            console.log('User Details:', userData);
            
            // Store in auth context if available
            if (auth && auth.login) {
                auth.login(userData);
            } else {
                // Fallback to localStorage if context isn't available
                localStorage.setItem('scavengerhunt_user', JSON.stringify(userData));
            }
            
            // Redirect to the homepage
            router.push('/');
            
         } catch (error) {
            console.error('Error fetching user info:', error);
            setIsLoading(false);
         }
      },
      onError: (error) => {
         console.error('Google Login Failed:', error);
         setIsLoading(false);
      },
      flow: 'implicit',
      prompt: 'select_account'
   });
  
   const handleClick = () => {     
      setIsLoading(true);
      try {
         login();
      } catch (e) {
         console.error("Login error:", e);
         setIsLoading(false);
      }
   };

   return (
      <div 
         className="relative" 
         style={{ zIndex: 50 }} 
      >
         <button 
            onClick={handleClick}
            disabled={isLoading}
            className={`border-[1px] border-solid border-[#E4489F4D] h-[50px] rounded-[10px] w-[170px] sm:min-w-[195px] flex flex-row items-center text-[#E9E9E9] text-[16px] font-[500] justify-center gap-2 space-grotesk active:bg-[#101528] hover:bg-[#101528] ${
               isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            type="button"
         >
            {isLoading ? (
               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
               <>
                  <Image src={google} alt="Google" className="w-[20px] h-[21px]" />
                  Google
               </>
            )}
         </button>
      </div>
   );
};

export default GoogleSignInButton;
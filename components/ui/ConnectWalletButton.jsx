import React from "react";
import wallet from "@/public/images/walleticon.png";
import Image from "next/image";
const ConnectWalletButton = () => {
   return (
      <button className="border-[1px] border-solid border-[#E4489F4D] h-[50px] rounded-[10px] w-[170px] sm:min-w-[195px] flex flex-row items-center text-[#E9E9E9] text-[16px] font-[500] justify-center gap-2 space-grotesk">
         <Image src={wallet} alt="wallet" className="w-[20px] h-[24px]" />
         Connect wallet
      </button>
   );
};

export default ConnectWalletButton;

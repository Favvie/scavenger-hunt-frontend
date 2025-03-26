"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const TextWithIcon = ({ text = "", subText = "", wrapperClassName = "" }) => {
  return (
    <div
      className={cn(
        "max-w-[574px] flex gap-[18px] items-start justify-start",
        wrapperClassName
      )}
    >
      {/* <div className="relative w-[37px] h-[37px]">
        <div className="absolute rounded-[2px] top-0 w-[30px] h-[30px] bg-[#DE48A0]"></div>
        <div className="absolute rounded-[2px]  top-0 translate-y-2 translate-x-2 w-[30px] h-[30px] bg-[#3B82F680]"></div>
      </div> */}
      <Image
        src="/images/text-icon.png"
        alt="Scavenger"
        width={37}
        height={36}
        className="my-2"
      />
      <div className="flex flex-col items-start justify-between gap-2">
        <p className="text-base font-medium font-spaceGrotesk text-texts-input">
          {text}
        </p>
        <p className="text-sm font-normal font-spaceGrotesk text-texts-placeholder">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default TextWithIcon;

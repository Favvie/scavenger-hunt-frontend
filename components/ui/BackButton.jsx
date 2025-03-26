import React from "react";
import back from "@/public/images/back.svg";
import Image from "next/image";
const BackButton = ({ className = "" }) => {
  return (
    <button className={className}>
      <Image src={back} alt="back" />
    </button>
  );
};

export default BackButton;

import React from "react";
import Image from "next/image";


const Card = ({ card }) => {

  return (
    <div
      className={`absolute ${position} w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border ${colors.border} shadow-lg`}
    >
      <div className="h-3/5 overflow-hidden rounded-t-lg">
        <div
          className={`bg-gradient-to-br ${colors.bg} h-full flex items-center justify-center`}
        >
          <div className="bg-gray-800 opacity-50 w-16 h-16 rounded-full flex items-center justify-center">
            <span className="text-2xl">{card.icon}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className={`text-xs font-bold ${colors.text}`}>{card.title}</div>
        <div className="text-xs text-gray-400 mt-1">{card.subtitle}</div>
        <div className="bg-orange-500 text-xs text-white px-2 py-1 rounded mt-2 w-fit">
          {card.action || "Start Now"}
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ step, isEven, className = "", index }) => {
  return (
    <div
      className={`relative flex ${
        isEven || index === 0 || index === 2 ? "flex-col-reverse" : "flex-col"
      } ${!isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 ${className}`}
    >
  
      <div
        className={`
          flex items-center justify-center text-[24px]  w-[40px] h-[40px] rounded-full bg-blue  text-white font-bold md:text-[36px] md:w-[60px] md:h-[60px]
          md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0
          absolute top-0 left-0 z-10
        `}
      >
        {step.id}
      </div>

 
      <div
        className={`md:w-1/2 flex flex-col flex-grow justify-center items-start h-full px-[48px] mt-10 md:mt-0`}
      >
        <h2 className="text-2xl text-[#E9E9E9] font-bold mb-4">{step.title}</h2>
        <p className="text-[#BFBFBF] text-sm  mb-2">{step.description}</p>
        <p className="text-[#BFBFBF] text-sm ">{step.description2}</p>
      </div>

  
      <div
        className={`md:w-1/2 flex flex-grow justify-center relative ${
          !isEven ? "md:justify-start" : "md:justify-center"
        }`}
      >
        <Image
          src={`/images/${step.img}`}
          width={400}
          height={400}
          className=""
          alt={step.title}
        />
      </div>
    </div>
  );
};

export default StepCard;
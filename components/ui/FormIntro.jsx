import React from "react";

const FormIntro = ({title, description}) => {
   return (
      <div className="flex flex-col items-center justify-center Orbitron ">
         <h1 className="text-white text-center font-[600] text-[18px] sm:text-[32px] ">
            {title} to <span className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent">Scavengerhunt</span>
         </h1>
         <p className="text-[#BFBFBF] text-center mt-4 max-w-[35rem] text-[14px]">{description}</p>
      </div>
   );
};

export default FormIntro;

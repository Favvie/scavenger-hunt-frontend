import React from "react";

const Input = ({name, onChange, value, placeholder, label, type, className, required}) => {
   return (
      <div className="flex flex-col gap-1 z-40">
         <label htmlFor={name} className="text-[14px] font-[400] font-orbitron text-[#BFBFBF] pl-1">
            {label}
         </label>
         <input
            type={type}
            name={name}
            id={name}
            className={`bg-[#121727] h-[50px] rounded-[10px] font-spaceGrotesk pl-4 font-[300] text-[14px] text-[#BFBFBF] focus:outline-none ${className}`}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            required={required}
         />
      </div>
   );
};

export default Input;

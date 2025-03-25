// components/ui/Button.jsx
"use client";

const Button = ({children, variant = "primary", className = "", onClick, ...props}) => {
   // Styles based on variant
   const variants = {
      primary: "bg-[#d946ef] text-white hover:bg-[#c084fc]",
      secondary: "bg-[#333333] text-white hover:bg-gray-800",
      gradient: "bg-gradient-to-r from-[#E749A0] to-[#AC54F0] text-white ",
   };

   // Base button styles + variant-specific styles + any custom classes
   const buttonClasses = `px-8 py-4 rounded-[10px] font-medium transition-colors ${variants[variant]} ${className}`;

   return (
      <button className={buttonClasses} onClick={onClick} {...props}>
         {children}
      </button>
   );
};

export default Button;

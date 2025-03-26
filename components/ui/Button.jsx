// components/ui/Button.jsx
"use client";

import { cn } from "@/lib/utils";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  // Styles based on variant
  const variants = {
    primary: "bg-[#d946ef] text-white hover:bg-[#c084fc]",
    secondary: "bg-[#333333] text-white hover:bg-gray-800",
    gradient: "bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white ",
  };

  // Base button styles + variant-specific styles + any custom classes
  const buttonClasses = cn(
    `px-8 py-4 rounded-[10px] font-medium font-orbitron transition-all`,
    variants[variant],
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

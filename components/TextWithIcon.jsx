import Image from "next/image";

const TextWithIcon = ({ icon, heading, text }) => {
  return (
    <div className="flex gap-4 items-start mb-6">
      <div className="w-12 h-12">
        <Image
          src={icon}
          alt={heading}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="mb-2 text-[14px] font-spaceGrotesk font-[500] text-[#E9E9E9] md:text-[24px]">{heading}</h3>
        {text && <p className="text-gray-400">{text}</p>}
      </div>
    </div>
  );
};

export default TextWithIcon;

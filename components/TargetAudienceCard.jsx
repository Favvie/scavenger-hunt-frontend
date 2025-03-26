import Image from "next/image";

const TargetAudienceCard = ({ icon, title, description }) => {
  // Mapping for separate border (and icon) colors per target audience
  const borderColors = {
    "Blockchain Enthusiasts & Learners": "border-[#EC4899]",
    "Gamers & Puzzle Solvers": "border-[#3B82F6]",
    "Developers & Crypto Users": "border-[#FFB82E]",
  };

  // Choose the color based on title; fallback to a default color
  const borderColor = borderColors[title] || "border-gray-700/65";

  return (
    <div
      className={`p-6 rounded-lg transition-all bg-[#0E1428] hover:bg-[#1A1F35] border-l-2 ${borderColor} border-r-2 ${borderColor} relative w-[320px] h-[200px]`}
    >
      {/* Top left and right borders */}
      <span className={`absolute top-0 left-0 w-14 h-3 border-t-2 ${borderColor}`}></span>
      <span className={`absolute top-0 right-0 w-14 h-3 border-t-2 ${borderColor}`}></span>

      {/* Bottom left and right borders */}
      <span className={`absolute -bottom-3 -left-[0.9px] w-14 h-3 border-t-2 ${borderColor}`}></span>
      <span className={`absolute -bottom-3 -right-[0.9px] w-14 h-3 border-t-2 ${borderColor}`}></span>

      <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-lg bg-[#1A1F35]">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default TargetAudienceCard;

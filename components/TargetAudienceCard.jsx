const TargetAudienceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg border-[1px] transition-all border-[#2E2E3F] bg-[#0E1428] hover:bg-[#1A1F35]">
      <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-[#1A1F35]">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default TargetAudienceCard;

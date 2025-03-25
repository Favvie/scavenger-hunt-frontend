const TargetAudienceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-900/10 hover:bg-purple-900/20 transition-all">
      <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="text-xl text-white font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default TargetAudienceCard;

const TextWithIcon = ({ icon: Icon, heading, text }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="p-2 rounded-lg bg-purple-900/20">
        <Icon className="w-5 h-5 text-purple-500" />
      </div>
      <div>
        <h3 className="text-lg text-white font-medium mb-1">{heading}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default TextWithIcon;

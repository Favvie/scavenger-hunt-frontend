const TextWithIcon = ({ icon: Icon, heading, text }) => {
  return (
    <div className="flex gap-4 items-start mb-6">
      <div className="flex justify-center items-center w-12 h-12 rounded-full bg-purple-900/30">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-medium text-white">{heading}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export default TextWithIcon;

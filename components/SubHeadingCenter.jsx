const SubHeadingCenter = ({ text }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      {/* Desktop: text centered between two lines with fixed width */}
      <div className="hidden items-center w-full md:flex md:justify-between">
        <div className="w-44 border-t border-gray-400"></div>
        <h2 className="px-4 text-[32px] font-[500] text-center text-white font-orbitron md:text-3xl">
          {text}
        </h2>
        <div className="w-44 border-t border-gray-400"></div>
      </div>
      {/* Mobile: text on top with a line of fixed width below */}
      <div className="flex flex-col items-center w-full md:hidden">
        <h2 className="text-[24px] font-[500] text-center text-white font-orbitron">
          {text}
        </h2>
        <div className="mt-2 w-1/2 border-t border-gray-400"></div>
      </div>
    </div>
  );
};

export default SubHeadingCenter;

import Image from 'next/image';

const EcosystemCard = ({ title, description, logo }) => {
  return (
    <div className="p-6 rounded-lg border-[1px] border-[#2E2E3F] bg-[#0E1428] hover:bg-[#1A1F35] transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-[#1A1F35] flex justify-center items-center">
          <div className="relative w-8 h-8">
            <Image
              src={logo}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default EcosystemCard;

import Image from 'next/image';

const EcosystemCard = ({ title, description, logo }) => {
  return (
    <div className="p-7 rounded-lg border-[1px] border-[#2E2E3F] bg-[#0E1428] hover:bg-[#1A1F35] transition-all w-[356.1px] h-[220px] md:w-[600px] md:h-[360px]">
      <div className="flex gap-4 items-center mb-2 md:mb-16">
        <div className="flex justify-center items-center w-[117.01px] h-[34px] md:w-[201px] md:h-[70px]">
          <div className="relative w-[201px] h-[70px]">
            <Image
              src={logo}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className=''>
        <h3 className="mb-2 text-[20px] md:text-[28px] font-[400] font-orbitron text-white">{title}</h3>
        <p className="text-gray-400 font-spaceGrotesk text-[14px] md:text-[20px]">{description}</p>
      </div>

    </div>
  );
};

export default EcosystemCard;

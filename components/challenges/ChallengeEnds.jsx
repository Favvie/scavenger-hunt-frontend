import Image from "next/image";
import Button from "../ui/Button";

function ChallengeEnds() {
  return (
    <main className="md:w-[1084px] w-full   md:h-[348px] rounded-[30px]  bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white flex">
      <div className="md:w-1/2 w-full ">
        <div className="flex w-[147px] h-[53px] rounded-br-[8px] gap-4 bg-[#060B1C] justify-center  bg-opacity-20 items-center">
          <div className="size-3 bg-[#439F6E] rounded-full"></div>
          <div>
            <p className="text-[10px] font-normal">Challenge ends</p>
            <h5 className="text-font-semibold text-xs">14 D : 17H : 5M</h5>
          </div>
        </div>
        <div className="md:pl-16 pl-8 pt-3 flex flex-col ">
          <h3 className="font-semibold md:text-4xl text-lg">Win our featured NFT</h3>
          <p className="font-normal md:text-xl space-grotesk text-sm text-[#BFBFBF] my-2">
            Demonstate your proficiency in Steller
            <br /> with our most difficult challnge
          </p>
          <div className="flex gap-1">
            <button className="bg-white rounded-[4px] bg-opacity-20 md:w-[111px] w-20 md:h-[22px] h-4 text-[8px] md:text-[10px] flex justify-center items-center">
              Stellar
            </button>
            <button className="bg-white rounded-[4px] bg-opacity-20 md:w-[111px] w-20 md:h-[22px] h-4 text-[8px] md:text-[10px] flex justify-center items-center">
            Difficult
            </button>
           
          </div>
          <Button className=" md:mt-12 mt-4 mb-8 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] text-white md:w-[200px] w-[120px] md:h-[50px] px-0 py-0 h-[30px] text-sm md:text-lg">
            Join now
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-[454px] pl-28 md:block hidden ">
      <Image
  src="/images/robot.png"
  alt="Robot"
  width={454}
  height={454}
  className="-mt-[5rem]"
  priority
/>
      </div>
      <div></div>
    </main>
  );
}

export default ChallengeEnds;

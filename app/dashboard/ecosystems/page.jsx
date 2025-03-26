import StarknetLogo from "@/public/ecosystems/Starknet_Symbol.png"
import WorldcoinLogo from "@/public/ecosystems/Worldcoin_Symbol.png"
import EcosystemCard from "@/components/ui/EcosystemCard"
import bannerImg from "@/public/images/ecosystem-banner.png"
import Image from "next/image"

const Page = () => {
  const ecosystems = [
    {
      title: "Worldcoin",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Worldcoin",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: WorldcoinLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
    {
      title: "Stellar",
      description:
        "Dive into the StarkNet ecosystem through our interactive challenges and discover how to build, transact, and innovate on this revolutionary platform.",
      image: StarknetLogo,
    },
  ]

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
      <div>
        <div className="border-[#EC48994D] border rounded-[10px] p-4 sm:p-6 md:p-[32px] relative overflow-hidden">
          <Image
            src={bannerImg || "/placeholder.svg"}
            alt="ecosystem banner"
            width={600}
            height={300}
            className="w-full h-full absolute inset-0 object-cover"  
          />
          <div className="bg-[#060B1CB2] z-20 absolute w-full h-full inset-0"></div>
          <div className="relative z-20">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-6 bg-[linear-gradient(130deg,rgba(125,62,175,1)_21%,rgba(231,73,159,1)_100%)] text-transparent bg-clip-text w-fit">
              Ecosystems
            </h1>
            <p className="text-[#BFBFBF] font-light text-sm sm:text-lg md:text-[20px] md:leading-[30px] max-w-[900px]">
              Where you take control of your Web3 journey! Here, you can explore and master a variety of blockchain
              ecosystems through fun, interactive challenges. Whether you're curious about Ethereum, Solana, Polygon,
              StarkNet, or beyond, there's a world of learning and rewards waiting for you.
            </p>
          </div>
        </div>
      </div>

      {/* ecosystems container */}
      <div className="pt-10 sm:pt-16 md:pt-20">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
          <div className="text-[20px] sm:text-lg md:text-[20px] md:w-fit w-full md:text-start text-center font-semibold">Scavenger hunt Ecosystem</div>
          <div className="flex-1 md:block hidden">
            <hr className="w-56 border-[white]/20 p-0 m-0"></hr>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          {ecosystems.map((ecosystem, index) => (
            <EcosystemCard key={index} {...ecosystem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page


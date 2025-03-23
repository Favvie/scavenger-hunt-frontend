import ChallengeCard from "@/components/challenges/ChallengeCard";
import ChallengeEnds from "@/components/challenges/ChallengeEnds";
import ChallengeMainCard from "@/components/challenges/ChallengeMainCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dummyChallenges = [
  {
    title: "The Cryptic Key",
    description:
      "Decode the ancient StarkNet runes to unlock the hidden vault.",
    status: "Active",
    players: "1k",
    timeLeft: "2D : 4H : 10M",
    image: "/images/image2.png",
    nftType: "Legendary NFT",
    ecosystem: "Stellar",
    level: "easy",
  },
  {
    title: "Shadow Hunt",
    description: "Track the elusive shadow entity through the Ethereum realm.",
    status: "Upcoming",
    players: "750",
    timeLeft: "1D : 6H : 30M",
    image: "/images/image3.png",
    nftType: "Epic NFT",
    ecosystem: "starknet",
    level: "medium",
  },
  {
    title: "Cyber Heist",
    description: "Bypass the AI security systems and steal the digital crown.",
    status: "Upcoming",
    players: "500",
    timeLeft: "3D : 2H : 15M",
    image: "/images/image.png",
    nftType: "Rare NFT",
    ecosystem: "Web3",
    level: "hard",
  },
  {
    title: "Celestial Rift",
    description:
      "Align the cosmic energies to stabilize the metaverse gateway.",
    status: "Active",
    players: "1.2k",
    timeLeft: "5H : 40M",
    image: "/images/image3.png",
    nftType: "Mythic NFT",
    ecosystem: "Worldcoin",
    level: "easy",
  },
  {
    title: "Neon Syndicate",
    description: "Take down the rogue faction in the cyber city underworld.",
    status: "Upcoming",
    players: "890",
    timeLeft: "12H : 20M",
    image: "/images/image2.png",
    nftType: "Legendary NFT",
    ecosystem: "Stellar",
    level: "medium",
  },
  {
    title: "Quantum Paradox",
    description: "Solve the paradox to prevent the multiverse from collapsing.",
    status: "Upcoming",
    players: "650",
    timeLeft: "4D : 3H : 5M",
    image: "/images/image.png",
    nftType: "Ultra Rare NFT",
    ecosystem: "starknet",
    level: "hard",
  },
];
const ecosystems = ["All", ...new Set(dummyChallenges.map((c) => c.ecosystem))];
function page() {
  return (
    <>
      <section className="relative w-full   flex flex-col md:pt-40 pt-32 px-6 md:px-12 bg-black text-white overflow-hidden Orbitron">
        <div className="text-center ">
          <h1 className="font-semibold lg:text-[64px] sm:text-[48px] text-[24px]">
            Challenges <br />{" "}
            <span className="bg-gradient-to-r from-[#7d3eaf] to-[#e7499f] bg-clip-text text-transparent">
              Learn and Earn<br className="block md:hidden"/> reward
            </span>{" "}
          </h1>
        </div>
      </section>
      <section className="relative w-full  flex flex-col items-center  md:pt-24 pt-12 px-6 md:px-12 bg-black text-white Orbitron ">
        <Tabs className="w-full  " defaultValue="All">
          <div className="w-full  flex justify-center items-center">

          <TabsList className="grid md:w-[1000px] w-full grid-cols-5 bg-[#FD7DFF] bg-opacity-10 md:h-[50px] h-6 rounded-xl md:mb-60 mb-12">
            {ecosystems.map((eco) => (
              <TabsTrigger
                key={eco}
                value={eco}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#7D3EAF] data-[state=active]:to-[#E7499F] data-[state=active]:text-white text-white md:h-[40px] h-5  rounded-xl  font-medium md:text-xl text-xs"
              >
                {eco}
              </TabsTrigger>
            ))}
          </TabsList>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <ChallengeEnds />
          </div>

          {ecosystems.map((eco) => (
            <TabsContent key={eco} value={eco} className="md:mt-32 mt-16 pb-8  ">
              <div className="flex flex-wrap gap-4 lg:w-[1240px] justify-center gap-y-4 w-full md:mx-auto ">
                {dummyChallenges
                  .filter(
                    (challenge) => eco === "All" || challenge.ecosystem === eco
                  )
                  .map((challenge, index) => (
                    <ChallengeMainCard key={index} {...challenge} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}

export default page;

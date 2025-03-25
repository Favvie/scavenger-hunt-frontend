import ChallengeCard from "@/components/challenges/ChallengeCard";
import ChallengeEnds from "@/components/challenges/ChallengeEnds";
import ChallengeMainCard from "@/components/challenges/ChallengeMainCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const dummyChallenges = [
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
      <section className="relative flex flex-col w-full px-6 pt-32 overflow-hidden text-white md:pt-40 md:px-12 Orbitron">
        <div className="text-center ">
          <h1 className="font-semibold lg:text-[64px] sm:text-[48px] text-[24px]">
            Challenges <br />{" "}
            <span className="bg-gradient-to-r from-[#7d3eaf] to-[#e7499f] bg-clip-text text-transparent">
              Learn and Earn
              <br className="block md:hidden" /> reward
            </span>{" "}
          </h1>
        </div>
      </section>
      <section className="relative flex flex-col items-center w-full px-6 pt-12 text-white md:pt-24 md:px-12 Orbitron ">
        <Tabs className="w-full " defaultValue="All">
          <div className="flex items-center justify-center w-fit mx-auto rounded-[10px] bg-[#FD7DFF1A] md:mb-60 mb-12">
            <TabsList className="grid md:w-[1000px] w-full grid-cols-5 bg-[#FD7DFF] bg-opacity-10 md:h-[50px] h-6 rounded-xl">
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

          <div className="flex items-center justify-center w-full h-full">
            <ChallengeEnds />
          </div>

          {ecosystems.map((eco) => (
            <TabsContent key={eco} value={eco} className="pb-8 mt-16 md:mt-32 ">
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

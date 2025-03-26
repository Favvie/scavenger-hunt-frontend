import ChallengeCard from "../challenges/ChallengeCard";
import image1 from "@/public/images/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music 2.svg";
import image2 from "@/public/images/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music 3.svg";
import image3 from "@/public/images/sci-fi-fantasy-landscape 1.svg";
const FeatureChallenges = () => {
  const challenges = [
    {
      title: "Lost Relic",
      description:
        "Unravel the mystery of the lost relic hidden deep in the ancient ruins.",
      status: "active",
      players: "2.5k",
      timeLeft: "5 days",
      image: image1,
      nftType: "Legendary NFT",
    },
    {
      title: "Cyber Heist",
      description:
        "Join the elite hackers to break into the digital vault and steal crypto assets.",
      status: "upcoming",
      players: "800",
      timeLeft: "1 week",
      image: image2,
      nftType: "Epic NFT",
    },
    {
      title: "Galactic Wars",
      description:
        "Fight in interstellar battles to conquer new planets and claim cosmic rewards.",
      status: "completed",
      players: "5k",
      timeLeft: "Expired",
      image: image1,
      nftType: "Mythic NFT",
    },
    {
      title: "Shadow Protocol",
      description:
        "Infiltrate the underground network and expose the hidden secrets of the syndicate.",
      status: "active",
      players: "1.2k",
      timeLeft: "3 days",
      image: image2,
      nftType: "Ultra Rare NFT",
    },
  ];

  return (
    <>
      <section className="w-full px-[24.88px] pt-[100px] lg:px-[116.91px] md:pt-[120px]">
  <header className="items-center justify-between w-full lg:flex">
    <div className="w-full lg:w-[70%] lg:flex lg:items-center lg:justify-start lg:gap-[55px]">
      <h2 className="font-medium font-orbitron text-wrap text-2xl text-center text-white lg:text-left md:text-[28px] lg:text-[32px]">
        Participate in ongoing <br />
        <span className="bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] bg-clip-text text-transparent">
          featured challenges
        </span>
      </h2>
      <div className="hidden lg:block border-[0.1px] border-[#858894] w-[206px] opacity-20" />
    </div>

    <div className="w-full relative flex lg:w-[30%] lg:justify-end">
      <button className="w-[250px] font-orbitron mx-auto bg-[#FD7DFF1A] rounded-[10px] py-[15px] text-sm font-bold text-white mt-[20px] lg:mx-0 
        transition-all duration-300 ease-in-out hover:bg-[#FD7DFF] hover:text-white hover:scale-105 hover:shadow-[0_0_10px_#FD7DFF]">
        View all
      </button>
    </div>
  </header>

  <div className="w-full mt-[50px] flex items-stretch justify-between gap-[66px]">
    <aside className="hidden w-1/2 lg:block">
      <ChallengeCard
        bigCard
        title="The Cryptic Key"
        description="Decode the ancient StarkNet runes to unlock the hidden vault."
        status="active"
        players="1k"
        timeLeft="2 days"
        image={image3}
        nftType="Rare NFT"
      />
    </aside>

    <ul className="w-full lg:w-1/2 md:px-[65px] md:gap-2 lg:px-0 flex items-center justify-between flex-wrap">
      {challenges.map((challenge, index) => (
        <li key={index} className="w-full mb-[24px] md:w-[45%] lg:w-[45%]">
          <ChallengeCard {...challenge} />
        </li>
      ))}
    </ul>
  </div>
</section>

    </>
  );
};

export default FeatureChallenges;

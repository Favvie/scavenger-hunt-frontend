import React from "react";
import StepCard from "./StepCard";
import Button from "../ui/Button";

const HowItWorks = () => {

  const stepsData = [
    {
      id: 1,
      title: "Choose Your Challenge",
      description:
        "Pick a challenge that matches your skill level, whether you are a beginner or an advanced user.",
      description2:
        "Engage with interactive tasks designed to teach you key concepts on a specific blockchain ecosystem.",
      img: "Group1.png",
    },
    {
      id: 2,
      title: "Level up and compete",
      description:
        "Progress through different levels and unlock more advanced challenges.",
      description2:
        "Climb the leaderboard by earning points and competing with other learners in the community.",
      img: "Group2.png",
    },
    {
      id: 3,
      title: "Earn NFT rewards",
      description:
        "Successfully complete a challenge? Congratulations! You will earn an exclusive NFT as proof of your achievement.",
      description2:
        "Collect and showcase your NFTs in your profile—they are a testament to your growing blockchain expertise",
      img: "Group3.png",
    },
    {
      id: 4,
      title: "Join the community",
      description:
        "Share your progress, connect with other learners, and get support in our Discord or Telegram community",
      description2:
        "Participate in seasonal events and special challenges for even more rewards!",
      img: "Group4.png",
    },
  ];

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-6  text-white">
      <div className="container mx-auto pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <header className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 text-center mb-10 sm:mb-16 md:mb-24">
          <div className="hidden mr-6 sm:block bg-[#858894] w-20 md:w-24 h-px"></div>
          <div className="max-w-md">
            <h1 className="text-[#E9E9E9]  sm:text-2xl md:text-[28px] font-bold mb-1 sm:mb-2">
              Learning has never been more
            </h1>
            <p className="font-bold mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F]">
              how it works
            </p>
            <p className="text-[#858894] text-sm sm:text-base md:text-[16px]">
              Join and make use of the platform in 4 simple steps
            </p>
          </div>
          <div className="hidden ml-6 sm:block bg-[#858894] w-20 md:w-24 h-px"></div>
        </header>

        {/* Steps Section with Vertical Line */}
        <div className="relative flex flex-col gap-10 sm:gap-16 md:gap-20">
          <div
            className="absolute left-1/2 top-8 bottom-0 w-px bg-[#858894] transform -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          ></div>

          {stepsData.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              isEven={index % 2 !== 0} // Alternate layout for even steps
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 
                     bg-how-footer md:bg-how-it-works bg-center bg-no-repeat 
                     bg-cover md:py-10">
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold">
          Dive into the world of blockchain
        </h2>
        <p className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl md:text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F]">
          Ready to start?
        </p>
        <p className="text-[#858894] text-sm sm:text-base md:text-[16px] mb-6 sm:mb-8 md:mb-10">
          play, learn and earn your way to blockchain mastery!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
          <Button
            variant="secondary"
            className=" md:w-auto py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-20 bg-gradient-to-r from-[#7D3EAF] to-[#E7499F]"
            aria-label="Join a challenge"
          >
            Join a challenge
          </Button>
              
          <Button
            variant="secondary"
            className=" md:w-auto py-2 px-4 sm:py-3 sm:px-10 md:py-4 md:px-20 bg-[#E68AAF1F]"
            aria-label="Learn how to play"
          >
            Learn how to play
          </Button> 
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
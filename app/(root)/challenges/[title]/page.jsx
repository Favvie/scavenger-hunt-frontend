"use client";

import {
  dummyChallenges,
  GAME_INSTUCTIONS,
  LEADER_BOARD,
} from "@/lib/mockdata";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import { titleCase } from "@/lib/utils";
import { Clock, Trophy, User } from "lucide-react";
import Button from "@/components/ui/Button";
import ChallengeCard from "@/components/challenges/ChallengeCard";
import SubheadingLeft from "@/components/SubheadingLeft";
import TextWithIcon from "@/components/ui/TextWithIcon";
import LeaderBoard from "@/components/Leaderboard";
import StateDifficulty from "@/components/StateDifficulty";

function Page({ params }) {
  const [challenge, setChallenge] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Decode the title and find the matching challenge
    const title = params.title ? decodeURIComponent(params.title) : null;
    const foundChallenge = dummyChallenges.find(
      (c) => c.title.toLowerCase() === title?.toLowerCase()
    );

    if (!foundChallenge) {
      router.push("/challenges");
      return;
    }

    setChallenge(foundChallenge);
  }, [params.title, router]);

  // If no challenge is found, return null or a loading state
  if (!challenge) {
    return null;
  }

  return (
    <div className="bg-[#121727] h-full pb-20 pt-40">
      <section className="relative  rounded-[30px] flex flex-col mx-auto max-w-[1053px] items-center justify-start bg-black text-white">
        <Link
          href="/challenges"
          className="absolute top-0 left-0 translate-x-10 translate-y-10"
        >
          <BackButton />
        </Link>
        <Image
          src={challenge.image}
          alt={challenge.title}
          width={1053}
          height={420}
          className="m-auto max-h-[420px]"
        />
        <div className="w-full px-6 py-4 md:px-11 md:py-8">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-between gap-10">
              <Image
                src={`/ecosystems/${titleCase(
                  challenge.ecosystem.toLowerCase()
                )}_Symbol.png`}
                alt={challenge.ecosystem.toLowerCase()}
                width={120}
                height={120}
                className=""
              />
              <div className="flex flex-col gap-[14px]">
                <StateDifficulty
                  status={challenge.status}
                  level={challenge.level}
                />
                <h1 className="text-3xl font-semibold font-orbitron">
                  {challenge.title}
                </h1>
                <div className="flex items-center justify-start gap-5">
                  <p
                    className={`rounded-lg text-texts-important flex items-center font-bold text-xs font-orbitron`}
                  >
                    <Clock
                      className="inline-block mr-1 text-[#3B82F6]"
                      size={16}
                    />
                    {challenge.timeLeft}
                  </p>

                  <p
                    className={`rounded-lg text-texts-important flex items-center font-bold text-xs font-orbitron`}
                  >
                    <Trophy
                      className="inline-block mr-1 text-[#3B82F6]"
                      size={16}
                    />
                    {challenge.nftType}
                  </p>

                  <p
                    className={`rounded-lg text-texts-important flex items-center font-bold text-xs font-orbitron`}
                  >
                    <User
                      className="inline-block mr-1 text-[#3B82F6]"
                      size={16}
                    />
                    {`${challenge.players} players`}
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="gradient"
              className="px-10 py-1 text-lg font-medium h-fit font-orbitron text-texts-important"
            >
              Join Now
            </Button>
          </div>

          <div className="flex justify-between gap-0 mt-14">
            <div className="flex flex-col gap-16 w-full max-w-[70%]">
              <p className="text-xl font-normal text-texts-input font-spaceGrotesk">
                {challenge.description}
                <span className="block mt-4">
                  Crack puzzles to unlock challenges and advance through the
                  game. Use your blockchain knowledge to overcome exciting
                  obstacles.
                </span>
              </p>

              <div>
                <SubheadingLeft
                  wrapperClassName="text-[#E9E9E9] mb-4"
                  text="Game Instructions"
                />
                {GAME_INSTUCTIONS.map((instruction, index) => (
                  <TextWithIcon
                    key={index}
                    {...instruction}
                    wrapperClassName="mb-6"
                  />
                ))}
              </div>

              {(challenge.status.toLowerCase() === "active" ||
                challenge.status.toLowerCase() === "ended") && (
                <LeaderBoard slice={5} players={LEADER_BOARD} />
              )}
            </div>

            <div className="max-w-[25%]">
              <h3 className="mb-6 text-xl font-semibold text-texts-important font-orbitron">
                Similar Challenges
              </h3>
              <ul className="grid grid-cols-1 gap-6">
                {dummyChallenges
                  .filter(
                    (dc) =>
                      dc.ecosystem.toLowerCase() ===
                        challenge.ecosystem.toLowerCase() &&
                      dc.title.toLowerCase() != challenge.title.toLowerCase()
                  )
                  .map((c, index) => (
                    <li key={index} className="w-full">
                      <ChallengeCard
                        title={c.title}
                        description={c.description}
                        status={c.status}
                        players={c.players}
                        timeLeft={c.daysLeft}
                        image={c.thumbnail ?? c.image}
                        nftType={c.nftType}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

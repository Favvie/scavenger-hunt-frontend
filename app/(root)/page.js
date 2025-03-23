import HeroSection from "@/components/homepage/HeroSection";
import FeatureChallenges from "@/components/homepage/FeaturedChallenges";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <div className="w-full min-h-full bg-black pb-[40px]" >
          <FeatureChallenges />
        </div>
      </div>


    </>
  );
}

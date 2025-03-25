import HeroSection from "@/components/homepage/HeroSection";
import FeatureChallenges from "../components/homepage/FeaturedChallenges";
import FeatureSection from "@/components/homepage/FeatureSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection  />
        
        <FeatureSection />
        <div className="w-full min-h-full bg-black pb-[40px]" >
          <FeatureChallenges />
        </div>
      </div>


    </>


import HeroSection from "@/components/homepage/HeroSection";
import FeatureChallenges from "../components/homepage/FeaturedChallenges";
import FeatureSection from "@/components/homepage/FeatureSection";
import Ecosystems from "@/components/homepage/Ecosystems";
import FAQ from "@/components/homepage/FAQ";
import Testimonial from "@/components/homepage/Testimonial";
import HowItWorks from "@/components/homepage/HowItWorks";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />

        <FeatureSection />
        <div className="w-full min-h-full bg-black pb-[40px]">
          <FeatureChallenges />
          <HowItWorks />
          <Ecosystems />
          <Testimonial />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}

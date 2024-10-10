import AboutShort from "./componentsForHome/AboutShort";
import AdditionalServices from "./componentsForHome/AdditionalServices";
import Category from "./componentsForHome/Category";
import Contact from "./componentsForHome/Contact";
import HeroSection from "./componentsForHome/HeroSection";
import Recommendations from "./componentsForHome/Recommendations";
import SwiperForBest from "./componentsForHome/swiper/SwiperForBest";
import { dresses, womenModel } from "@/data/data";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 items-center p-1">
      <HeroSection />
      <SwiperForBest photoArr={womenModel} numOfSlide={1.3}/>
      <Category />
      <SwiperForBest photoArr={dresses} numOfSlide={2}/>
      {/* <Recommendations /> */}
      {/* <AdditionalServices /> */}
      {/* <AboutShort /> */}
      {/* <Contact /> */}
    </main>
  );
}

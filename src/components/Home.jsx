import AboutShort from "./componentsForHome/AboutShort"
import AdditionalServices from "./componentsForHome/AdditionalServices"
import Category from "./componentsForHome/Category"
import Contact from "./componentsForHome/Contact"
import HeroSection from "./componentsForHome/HeroSection"
import Recommendations from "./componentsForHome/Recommendations"
import SwiperForBest from "./componentsForHome/SwiperForBest"

export default function Home(){
  return(
    <main>
      <HeroSection />
      <Category />
      <SwiperForBest />
      <Recommendations />
      <AdditionalServices />
      <AboutShort />
      <Contact />
    </main>
  )
}
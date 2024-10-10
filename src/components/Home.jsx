import AboutShort from "./componentsForHome/AboutShort"
import AdditionalServices from "./componentsForHome/AdditionalServices"
import Category from "./componentsForHome/Category"
import Contact from "./componentsForHome/Contact"
import HeroSection from "./componentsForHome/HeroSection"
import Recommendations from "./componentsForHome/Recommendations"
import SwiperForBest from "./componentsForHome/swiper/SwiperForBest"
import WhatsApp from "./WhatsApp"

export default function Home(){
  return(
    <main className="flex flex-col gap-3 items-center p-1">
      <HeroSection />
      <Category />
      <SwiperForBest />
      {/* <Recommendations /> */}
      {/* <AdditionalServices /> */}
      {/* <AboutShort /> */}
      {/* <Contact /> */}
      <WhatsApp />
    </main>
  )
}
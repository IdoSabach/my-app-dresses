import { allDresses } from "@/data/data";
import Image from "next/image";
// import SwiperForBest from "@/components/componentsForHome/swiper/SwiperForBest";
import SwiperDresses from "@/components/swiperForDressPage/SwiperDresses";
export default function DressPage({ params }) {
  const { dressId } = params;

  const dressIndex = parseInt(dressId, 10);
  const selectedDress = allDresses.find((dress) => dress.id === dressIndex + 1);

  if (!selectedDress) {
    return <p>שמלה לא נמצאה</p>;
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <h1 className="text-2xl pb-2">{selectedDress.name}</h1>
      <SwiperDresses photoArr={selectedDress.dressPhoto} />
    </div>
  );
}

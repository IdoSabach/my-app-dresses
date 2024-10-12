// dress/[dressId]/page.jsx
import { allDresses } from "@/data/data";
import Image from "next/image";
import { lazy } from "react";

export default function DressPage({ params }) {
  const { dressId } = params;

  const dressIndex = parseInt(dressId, 10);
  const selectedDress = allDresses.find((dress) => dress.id === dressIndex+1);

  if (!selectedDress) {
    return <p>שמלה לא נמצאה</p>;
  }

  return (
    <div className="p-2">
      <h1>{selectedDress.name}</h1>
      {/* <p>פרטים נוספים על שמלה {dressIndex}</p> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {selectedDress.dressPhoto.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`שמלה ${dressIndex}`}
            width={500}
            height={750}
            loading="lazy"
            className="h-96 w-96 object-cover"
          />
        ))}
      </div>
    </div>
  );
}

// dresses/page.jsx
import Link from "next/link";
import Image from "next/image";
import { dresses, allDresses } from "@/data/data";

export default function Dresses() {
  return (
    <main className="flex flex-col items-center p-2">
      <h1 className="text-xl pb-4">Our Dresses</h1>
      <section className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {allDresses.map((dress, index) => (
          <Link key={dress.id} href={`/dress/${dress.id-1}`} className="text-center font-semibold mb-4 ">
            <Image
              src={dresses[index]} 
              alt={dress.name}
              width={450}
              height={450}
              className="photoForDressPage rounded-md"
            />
            <h2 className="">{dress.name}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}

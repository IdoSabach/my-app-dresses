import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <section className="flex flex-row justify-between gap-2 w-full">
      <section className="relative w-1/2 md:w-1/3 lg:w-1/4">
        <Link href="/">
          <Image
            src="/Dress project/Long sleeve mini dress/IMG_5704_result.webp"
            alt="logo"
            width={350}
            height={350}
            quality={75}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Link>
        <p className="absolute top-0 left-0 text-black">77</p>
      </section>

      <section className="relative w-1/2 md:w-1/3 lg:w-1/4">
        <Link href="/">
          <Image
            src="/Dress project/Pink mini dress/15CEDA9F-FA72-4C3E-8EDF-93E2610C4760_result.webp"
            alt="logo"
            width={350}
            height={350}
            quality={75}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Link>
        <p className="absolute top-0 left-0 text-black">123456</p>
      </section>
    </section>
  );
}

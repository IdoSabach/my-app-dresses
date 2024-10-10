import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <section className="flex flex-row justify-between gap-2 w-full">
      <section className="relative w-1/2">
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
          <section className="absolute top-0 left-0 text-black p-1 md:text-2xl font-medium md:p-4">
            <p>EVENING</p>
            <p className="text-xs border-b border-black inline-block md:text-xl font-light tracking-widest">
              Discover
            </p>
          </section>
        </Link>
      </section>

      <section className="relative w-1/2">
        <Link href="/">
          <Image
            src="/Dress project/Mini lace dress/IMG_5413_result.webp"
            alt="logo"
            width={350}
            height={350}
            quality={75}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <section className="absolute top-0 left-0 text-black p-1 md:text-2xl font-medium md:p-4">
            <p>TAILORED</p>
            <p className="text-xs border-b border-black inline-block md:text-xl font-light tracking-widest">
              Discover
            </p>
          </section>
        </Link>
      </section>
    </section>
  );
}

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative">
      <video autoPlay loop muted width="2500" className="z-0" controls={false} playsInline>
        <source src="/video/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="absolute top-0 left-0 text-black text-sm md:text-3xl font-medium p-4 z-10 flex flex-col md:gap-2">
        Fall Winter 2025 Collection
        <Link
          href="/dress"
          className="text-lg hover:bg-black hover:text-white font-light tracking-widest md:text-2xl flex flex-row justify-between md:w-1/3 border-b border-black"
        >
          <p>DRESSES</p>
          <p>{">"}</p>
          
          {/* <span className="h-0.5 absolute bg-black md:w-2/5 w-1/2 md:transform translate-y-7" /> */}
        </Link>
      </h1>
    </section>
  );
}

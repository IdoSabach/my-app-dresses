"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between md:p-6 md:pl-12 md:pr-12 p-4">
      <section>
        <Link href="/">
          <Image
            src="/logo/NeriyaLogo.png"
            alt="logo"
            width={250}
            height={150}
            quality={75}
            loading="lazy"
            className="w-36 md:w-60"
          />
        </Link>
      </section>
      <section className="hidden md:flex gap-8 text-2xl font-semibold">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/dress" className="hover:underline">
          Dresses
        </Link>
      </section>
      <button
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <span className="text-2xl fixed">✖</span>
        ) : (
          <div className="flex flex-col space-y-2 items-end justify-end">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </div>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-65 z-40 md:opacity-0"
            onClick={toggleMenu}
          ></div>

          <div className="shadow-md absolute right-0 h-full bottom-0 md:hidden bg-white text-black p-10 z-50">
            <button onClick={toggleMenu} className="p-0 fixed top-4 right-4">
              <span className="text-2xl">X</span>
            </button>
            <div className="flex flex-col gap-6 text-lg font-semibold">
              <Link href="/" className="hover:underline" onClick={toggleMenu}>
                Home
              </Link>
              <Link
                href="/dress"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Dresses
              </Link>
              <Link
                href="/about"
                className="hover:underline"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

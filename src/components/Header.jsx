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
    <>
      <header className="sticky top-0 flex items-center justify-between md:p-3 md:pl-8 md:pr-8 p-2 pl-4 pr-4 z-50 bg-white">
        <section className="z-50">
          <Link href="/">
            <Image
              src="/logo/NeriyaLogo.png"
              alt="logo"
              width={120}
              height={150}
              quality={75}
              // loading="lazy"
              className="w-24 md:w-44 z-50"
            />
          </Link>
        </section>
        <section className="hidden md:flex gap-8 text-sm font-semibold">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <Link href="/dress" className="hover:underline">
            DRESSES
          </Link>
          <Link href="/about" className="hover:underline">
            ABOUT
          </Link>
        </section>
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <div className="flex flex-col -space-y-0.5 z-50">
              <div className="w-6 h-0.5 bg-black transform rotate-45"></div>
              <div className="w-6 h-0.5 bg-black transform -rotate-45"></div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 items-end justify-end z-50">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </div>
          )}
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
            <div className="fixed inset-0 bg-white z-40 flex flex-col text-black pt-12">
              <div className="flex flex-col gap-6 text-lg font-semibold p-4">
                <section>
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="flex flex-row items-center justify-between"
                  >
                    HOME
                    <span>{">"}</span>
                  </Link>
                </section>
                <section>
                  <Link
                    href="/dress"
                    onClick={toggleMenu}
                    className="flex flex-row items-center justify-between"
                  >
                    DRESSES
                    <span>{">"}</span>
                  </Link>
                </section>
                <section>
                  <Link
                    href="/about"
                    onClick={toggleMenu}
                    className="flex flex-row items-center justify-between"
                  >
                    ABOUT
                    <span>{">"}</span>
                  </Link>
                </section>
              </div>
            </div>
          </>
        )}
      </header>
      <hr className="w-full border-gray-300 mb-2" />
    </>
  );
}

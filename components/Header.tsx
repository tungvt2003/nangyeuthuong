"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import NavResponsive from "./NavResponsive";
import { useEffect, useState } from "react";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full z-50 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 bg-[#F8F7F7B0] transform translate-y-0"
          : "relative bg-white transform-none"
      }`}
    >
      <nav className="container flex items-center p-3">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/assets/images/nang-yeu-thuong-raw-logo.png"
            alt="Nắng yêu thương logo"
            width={85}
            height={85}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center flex-wrap mx-2">
          <Navbar />
        </ul>

        {/* Button ủng hộ nhóm */}
        <button
          type="button"
          className="hidden md:block text-white uppercase font-bold rounded-full text-sm px-5 py-2.5 bg-orange-400 hover:bg-yellow-700 duration-300 whitespace-nowrap"
        >
          <Link href="/ung-ho-nhom" className="block focus:outline-none">
            Ủng Hộ Nhóm
          </Link>
        </button>

        {/* Nav-Responsive */}
        <div className="block md:hidden p-3">
          <NavResponsive />
        </div>
      </nav>
    </section>
  );
};

export default Header;

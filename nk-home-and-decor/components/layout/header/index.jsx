import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";

const Header = () => {
  return (
    <header className="w-full h-[78px] fixed top-0 left-0 z-[999] bg-black/70 transition-all duration-500">
      <div className="container">
        <nav className="flex justify-between items-center h-[78px]">
          <div className="animate-logo">
            <Link href="/" className="flex items-end gap-2">
              <Image
                src="/images/nk_logo.png"
                width={52}
                height={52}
                alt="navbarLogo"
              />
              <p className="relative text-white text-[14px] font-semibold leading-[21px] tracking-widest uppercase nav-link header-text">
                HOME AND <br /> DECOR
                <span className="text-[14px] font-semibold leading-[21px] uppercase tracking-widest color-text">
                  HOME AND <br /> DECOR
                </span>
                <Icons.Brush
                  size={50}
                  className="absolute top-[40%] left-[-10%] text-[#ffffff] header-brush"
                  fill="#ffffff"
                />
              </p>
            </Link>
          </div>
          <ul className="list-none hidden md:flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
                // ref={homeRef}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
                // ref={homeRef}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
                // ref={homeRef}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

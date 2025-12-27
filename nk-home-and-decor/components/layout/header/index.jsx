"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "@/components/icons";

const Header = () => {
  const [isHamMenuActive, setIsHamMenuActive] = useState(false);

  return (
    <header className="w-full h-[78px] fixed top-0 left-0 z-[9999] bg-[#101010] transition-all duration-500">
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
          <ul className="list-none hidden lg:flex items-center gap-6">
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
                href="/maintenance"
                className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
              // ref={homeRef}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/maintenance"
                className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
              // ref={homeRef}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="relative flex">
            <button
              type="button"
              className="bg-none border-0 cursor-pointer"
              onClick={() => setIsHamMenuActive(!isHamMenuActive)}
            >
              <Icons.Hamburger size={30} fill="#ffffff" />
            </button>
          </div>
        </nav>
      </div>
      <div className={`sidebar-group ${isHamMenuActive ? "isActive" : ""}`}>
        <div className="fixed top-0 w-full h-full opacity-0 invisible z-[999] bg-[#D9AB7A] overlay" onClick={() => setIsHamMenuActive(false)}></div>
        <div className="fixed top-0 bottom-0 right-full w-full h-full max-w-[360px] opacity-0 invisible z-[9999] bg-[#272727] sidebar-content">
          <div className="flex justify-end py-[40px] px-[32px]">
            <button className="w-[28px] h-[28px] p-[2px] rounded-full border-[3px] border-[#D8AB79] bg-none cursor-pointer" onClick={() => setIsHamMenuActive(false)}>
              <Icons.Close size={20} fill="#D8AB79" />
            </button>
          </div>
          <div className="px-[32px]">
            <h2 className="text-white text-[26px] font-semibold leading-[30px] mb-[32px]">Contact Info</h2>
            <ul className="list-none">
              <li className="flex gap-[5px] text-[14px] leading-[21px] font-normal mb-[8px]"><Icons.Location size={20} fill="#ffffff" /> Gharaunda, Karnal, Haryana, 132114</li>
              <li className="flex gap-[5px] text-[14px] leading-[21px] font-normal mb-[8px]"><Icons.Phone size={20} fill="#ffffff" />+91 8870760709</li>
              <li className="flex gap-[5px] text-[14px] leading-[21px] font-normal mb-[8px]"><Icons.Mail size={20} fill="#ffffff" />nkhomeadndecore@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

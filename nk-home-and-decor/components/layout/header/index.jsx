"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "@/components/icons";

const Header = ({ contact, settings }) => {
  const [isHamMenuActive, setIsHamMenuActive] = useState(false);

  const navLinks = settings?.navLinks || [
    { label: "Home", url: "/" },
    { label: "About", url: "/aboutus" },
    { label: "Contact", url: "/#contact" },
  ];

  const logoText = settings?.logoText || "HOME AND DECOR";

  return (
    <header className="w-full h-[78px] fixed top-0 left-0 z-[9999] bg-[#101010] transition-all duration-500">
      <div className="container">
        <nav className="flex justify-between items-center h-[78px]">
          <div className="animate-logo">
            <Link href="/" className="flex items-end gap-2">
              <Image
                src={settings?.logo || "/images/nk_logo.png"}
                width={52}
                height={52}
                alt="navbarLogo"
              />
              <p className="relative text-white text-[14px] font-semibold leading-[21px] tracking-widest uppercase nav-link header-text">
                {logoText.split(" ").slice(0, 2).join(" ")} <br /> {logoText.split(" ").slice(2).join(" ")}
                <span className="text-[14px] font-semibold leading-[21px] uppercase tracking-widest color-text">
                  {logoText.split(" ").slice(0, 2).join(" ")} <br /> {logoText.split(" ").slice(2).join(" ")}
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
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-white text-[17px] font-normal leading-[27px] uppercase nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative flex">
            <button
              type="button"
              className="flex flex-col justify-between w-[30px] h-[20px] bg-none border-0 cursor-pointer"
              onClick={() => setIsHamMenuActive(!isHamMenuActive)}
            >
              <span className="block w-full h-[2px] bg-white rounded-[2px]"></span>
              <span className="block w-[80%] h-[2px] bg-white rounded-[2px]"></span>
              <span className="block w-[50%] h-[2px] bg-white rounded-[2px]"></span>
            </button>
          </div>
        </nav>
      </div>
      <div className={`sidebar-group ${isHamMenuActive ? "isActive" : ""}`}>
        <div
          className="fixed top-0 w-full h-full opacity-0 invisible z-[999] bg-[#D9AB7A] overlay"
          onClick={() => setIsHamMenuActive(false)}
        ></div>
        <div className="fixed top-0 bottom-0 right-full w-full h-full max-w-[360px] opacity-0 invisible z-[9999] bg-[#272727] sidebar-content">
          <div className="flex justify-end py-[40px] px-[32px]">
            <button
              className="w-[28px] h-[28px] p-[2px] rounded-full border-[3px] border-[#D8AB79] bg-none cursor-pointer"
              onClick={() => setIsHamMenuActive(false)}
            >
              <Icons.Close size={20} fill="#D8AB79" />
            </button>
          </div>
          <div className="px-[32px]">
            <h2 className="text-white text-[26px] font-semibold leading-[30px] mb-[32px]">
              {settings?.headerContactHeading || "Contact Info"}
            </h2>
            <ul className="list-none">
              {(contact?.contactDetails || [
                { icon: 'Location', text: 'Gharaunda, Karnal, Haryana, 132114', link: '#' },
                { icon: 'Phone', text: '+91 81685-19429', link: 'tel:+918168519429' },
                { icon: 'WhatsApp', text: '+91 81685-19429', link: 'https://wa.me/918168519429?text=Hi%20NK%20Home%20and%20Decor...' },
                { icon: 'Mail', text: 'nkhomeanddecor@gmail.com', link: 'mailto:nkhomeanddecor@gmail.com' }
              ]).map((item, index) => {
                const IconComponent = Icons[item.icon] || Icons.Home;
                return (
                  <li key={index} className="flex gap-[5px] text-[14px] leading-[21px] font-normal mb-[8px]">
                    <IconComponent size={20} fill="#ffffff" />
                    {item.link && item.link !== '#' ? (
                      <Link
                        href={item.link}
                        target={item.link.startsWith('http') ? "_blank" : "_self"}
                        className="hover:text-[#D9AB7A] transition-colors"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

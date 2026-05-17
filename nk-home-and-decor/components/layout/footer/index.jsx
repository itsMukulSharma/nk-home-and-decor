import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const contact = [
    {
      id: 0,
      link: "+918168519429",
      text: "+91 81685-19429",
      Icons: <Icons.Phone size={20} fill="#D7AB79" />,
    },
    {
      id: 1,
      link: "nkhomeanddecor@gmail.com",
      text: "nkhomeanddecor@gmail.com",
      Icons: <Icons.Mail size={20} fill="#D7AB79" />,
    },
    {
      id: 2,
      link: "Gharaunda, Karnal, Haryana, 132114",
      text: "Gharaunda, Karnal, Haryana, 132114",
      Icons: <Icons.Home size={20} fill="#D7AB79" />,
    },
  ];
  const social = [
    // {
    //   id: 0,
    //   link: "/",
    //   Icons: <Icons.Facebook size={20} fill="#ffffff" />,
    // },
    {
      id: 1,
      link: "https://www.instagram.com/nk_home_and_decor/?hl=en",
      Icons: <Icons.Instagram size={20} fill="#ffffff" />,
    },
    {
      id: 2,
      link: "https://wa.me/918168519429?text=Hi%20NK%20Home%20and%20Decor...",
      Icons: <Icons.WhatsApp size={20} fill="#ffffff" />,
    },
  ];
  const useFulLinks = [
    {
      id: 0,
      text: "About",
      link: "/",
    },
    {
      id: 1,
      text: "Products",
      link: "/",
    },
    {
      id: 2,
      text: "Contact Us",
      link: "/",
    },
  ];
  return (
    <footer className="relative z-[1] bg-[#101010] px-0">
      <div className="container py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] gap-0">
          <div className="lg:pr-[85px]">
            <h3 className="relative text-[20px] leading-[26px] text-white font-medium relative z-[1] mb-[30px] heading-line">
              Get in touch
            </h3>
            <ul>
              {contact?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.link}
                    className="flex gap-[10px] items-start text-[14px] leading-[26px] text-[#999999] font-normal block mb-[8px]"
                  >
                    {item?.Icons} {item?.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:text-center">
            <div className="animate-logo flex lg:justify-center">
              <Link href="/" className="flex items-end gap-2">
                <Image
                  src="/images/nk_logo.png"
                  width={52}
                  height={52}
                  alt="navbarLogo"
                />
                <p className="relative text-white text-[14px] text-left font-semibold leading-[21px] tracking-widest uppercase nav-link header-text">
                  HOME AND <br /> DECOR
                </p>
              </Link>
            </div>
            <p className="text-[#515151] text-[15px] leading-[30px] mt-[28px] mb-[30px]">
              Made to Last. Designed to Impress.
            </p>
            <ul className="flex gap-[20px] items-center lg:justify-center">
              {social?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center justify-center text-[14px] text-white bg-[#282828] h-[40px] w-[40px] leading-[40px] text-center rounded-full transition-all duration-500 hover:bg-[#D9AB7A]"
                  >
                    {item?.Icons}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-[85px]">
            <h3 className="relative text-[20px] leading-[26px] text-white font-medium relative z-[1] mb-[30px] heading-line">
              Useful links
            </h3>
            <ul>
              {useFulLinks?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-[14px] leading-[26px] text-[#999999] font-normal inline-block mb-[8px] transition-all duration-500 cursor-pointer hover:text-white link-bottom"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-[30px] text-center border-t border-t-[#282828]">
          <p className="text-[15px] leading-[26px] text-[#999999] font-normal text-center">
            © Copyright NK Home and Decor 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

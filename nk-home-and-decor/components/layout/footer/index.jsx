import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ contact, settings }) => {
  const contactInfo = contact?.contactDetails?.map((item, index) => {
    const IconComponent = Icons[item.icon] || Icons.Home;
    return {
      id: index,
      link: item.link || "#",
      text: item.text,
      Icons: <IconComponent size={20} fill="#D7AB79" />,
    };
  }) || [
    {
      id: 0,
      link: "tel:+918168519429",
      text: "+91 81685-19429",
      Icons: <Icons.Phone size={20} fill="#D7AB79" />,
    },
    {
      id: 1,
      link: "mailto:nkhomeanddecor@gmail.com",
      text: "nkhomeanddecor@gmail.com",
      Icons: <Icons.Mail size={20} fill="#D7AB79" />,
    },
    {
      id: 2,
      link: "#",
      text: "Gharaunda, Karnal, Haryana, 132114",
      Icons: <Icons.Home size={20} fill="#D7AB79" />,
    },
  ];

  const social = contact?.socialLinks?.map((item, index) => {
    const IconComponent = Icons[item.platform] || Icons.Instagram;
    return {
      id: index,
      link: item.url,
      Icons: <IconComponent size={20} fill="#ffffff" />,
    };
  }) || [
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

  const useFulLinks = settings?.usefulLinks?.map((link, index) => ({
    id: index,
    text: link.label,
    link: link.url,
  })) || [
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

  const logoText = settings?.logoText || "HOME AND DECOR";
  const footerSlogan = settings?.footerSlogan || "Made to Last. Designed to Impress.";

  return (
    <footer className="relative z-[1] bg-[#101010] px-0">
      <div className="container py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="lg:pr-[85px]">
            <h3 className="relative text-[20px] leading-[26px] text-white font-medium relative z-[1] mb-[30px] heading-line">
              {settings?.footerContactHeading || "Get in touch"}
            </h3>
            <ul>
              {contactInfo?.map((item, index) => (
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
                  src={settings?.logo || "/images/nk_logo.png"}
                  width={52}
                  height={52}
                  alt="navbarLogo"
                />
                <p className="relative text-white text-[14px] text-left font-semibold leading-[21px] tracking-widest uppercase nav-link header-text">
                  {logoText.split(" ").slice(0, 2).join(" ")} <br /> {logoText.split(" ").slice(2).join(" ")}
                </p>
              </Link>
            </div>
            <p className="text-[#515151] text-[15px] leading-[30px] mt-[28px] mb-[30px]">
              {footerSlogan}
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
              {settings?.footerLinksHeading || "Useful links"}
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
            {settings?.copyrightText || `© Copyright NK Home and Decor ${new Date().getFullYear()}. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

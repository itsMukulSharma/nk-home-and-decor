"use client";
import React from "react";

const WhyChooseUs = () => {
  const cardData = [
    {
      id: 0,
      title: "Modular Kitchen Solutions",
      text: "NK offers a wide range of imported modular kitchen solutions. The inclusion of exclusive European modular kitchen designs and German precision makes it one of a kind in the market. From intelligent storage to premium finishes, each design is tailored for modern living. Designed for elegance and built for performance, NK kitchens transform cooking spaces into a true expression of style and sophistication.",
    },
    {
      id: 1,
      title: "Luxury Wardrobe Solutions",
      text: "Luxury wardrobe solutions with sophisticated designs, fine European quality, and customizable to every inch. From premium finishes to innovative storage solutions, every detail is tailored to reflect your lifestyle. Built to maximize space without compromising on style, they bring timeless luxury and practicality to your home.",
    },
    {
      id: 2,
      title: "Modern TV Units",
      text: "Elegant and sophisticated modern European TV units, customizable to all needs. Designed with a blend of style and functionality, these units bring a luxurious charm to your living space. Available in various finishes, sizes, and layouts, they perfectly complement both contemporary and classic interiors.",
    },
  ];
  const marqueText = [
    {
      text: ". INTERIOR DESIGN .",
    },
    {
      text: ". CONSTRUCTION .",
    },
    {
      text: ". FURNITURES .",
    },
    {
      text: ". LUXURY HOME .",
    },
    {
      text: ". ARCHITECTURE .",
    },
    {
      text: ". BUILDING .",
    },
    {
      text: ". INTERIOR DESIGN .",
    },
    {
      text: ". CONSTRUCTION .",
    },
    {
      text: ". LUXURY HOME .",
    },
  ];
  return (
    <section className="relative w-full pt-[75px] lg:pt-[140px] bg-[url('/images/Banner_2.jpg')] bg-center bg-cover">
      <div className="top-shadow"></div>
      <div className="absolute top-0 left-0 w-full h-full z-[20] bg-black/90"></div>
      <div className="container relative z-[40] pb-[75]">
        <div className="relative text-center mb-[16px] lg:mb-0">
          <h3 className="text-white text-[32px] lg:text-[130px] leading-[100%] font-bold uppercase opacity-[0.040]">
            Our Expertise
          </h3>
          <h4 className="relative top-[-30px] lg:top-[-90px] text-white text-[20px] leading-[35px] lg:text-[50px] lg:leading-[58px] font-semibold uppercase">
            Designs That Inspire <span className="text-[#D7AB7C]"> Living</span>
          </h4>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cardData.map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              <h4 className="text-[18px] leading-[30px] text-[#d8ab7a] font-medium m-0 bg-[#212121] inline-block h-[45px] w-[90px] text-right pr-[15px] pt-[8px] relative z-[1] transition-all duration-500 group-hover:text-white number-before number-after">
                0{item.id + 1}
              </h4>
              <h5 className="text-[20px] lg:text-[24px] leading-[40px] text-white font-medium mt-[37px] mb-[11px] transition duration-500 hover:text-[#d8ab7a]">
                {item.title}
              </h5>
              <p className="text-[14px] lg:text-[15px] leading-[28px] text-[#999999] font-normal mb-[16px]">
                {item.text}
              </p>
              <div className="relative z-[1] transition-all duration-500 overflow-hidden view-btn-circle">
                <button
                  type="button"
                  className="inline-block relative z-[1] text-[15px] leading-[32px] text-white font-normal transition-all duration-500 ml-[-103px] group-hover:text-[#D9AA7C] group-hover:ml-0 hover:cursor-pointer view-btn-line view-btn-dot"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-[40] py-[100px] bg-[url('/images/tag-bg.jpg')] bg-center bg-cover">
        <div className="relative flex overflow-hidden">
          <div className="flex items-center justify-around shrink-[0] min-w-[87%] marque-animation">
            {marqueText.map((item, index) => (
              <div key={index} className="relative">
                <h4 className="inline-block text-[42px] text-white font-semibold px-12 transition duration-500 hover:text-[#D8AB7A]">
                  <span>{item.text}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around shrink-[0] min-w-[87%] marque-animation">
            {marqueText.map((item, index) => (
              <div key={index} className="relative">
                <h4 className="inline-block text-[42px] text-white font-semibold px-12 transition duration-500 hover:text-[#D8AB7A]">
                  <span>{item.text}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
